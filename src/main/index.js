'use strict'

import { app, ipcMain, Tray, BrowserWindow, Menu, shell } from 'electron'

import localForage from 'localforage'

// var ipcRenderer = require('electron').ipcRenderer

var iconPath = require('path').join(__dirname, '../../static/images/icon.ico')

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
  iconPath = '../../static/images/icon.ico'
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    resizable: false,
    height: 638,
    width: 1180,
    frame: false,
    webPreferences: {webSecurity: false}
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

let tray = null
app.on('ready', () => {
  tray = new Tray(iconPath)
  tray.setToolTip('Music House')
  // 系统托盘右键菜单
  tray.setContextMenu(Menu.buildFromTemplate([
    {
      label: '设置',
      click: () => { // 打开相应页面
        localForage.setItem('users', '888', (result) => {
        })
        console.log(666)
      }
    },
    {
      label: '最小化 Music House',
      click: () => {
        mainWindow.hide()
      }
    },
    {
      label: '退出 Music House',
      click: () => {
        app.quit()
      }
    }
  ]))
  tray.on('double-click', () => {
    mainWindow.show()
    mainWindow.focus()
  })
})

/**
 * PC本地浏览器打开网页
 */
ipcMain.on('open-browser-url', (event, arg) => {
  shell.openExternal(arg)
})

/**
 * 窗口最小化
 */
ipcMain.on('hide-window', () => {
  mainWindow.minimize()
})

/**
 * 系统托盘
 */
ipcMain.on('hide-main-window', () => {
  mainWindow.hide()
})

/**
 * 退出
 */
ipcMain.on('window-all-closed', () => {
  app.quit()
})
