'use strict'

import { app, ipcMain, Tray, BrowserWindow, shell } from 'electron'
const electron = require('electron')
const path = require('path')

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
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
    webPreferences: {webSecurity: false},
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  // 系统托盘右键菜单
  var trayMenuTemplate = [
    {
      label: '设置',
      click: () => {} // 打开相应页面
    },
    {
      label: '退出Music House',
      click: () => {
        app.quit()
      }
    }
  ]

  const url = path.join(__dirname, '../../static/images/icon.ico')
  // 系统托盘图标
  let tray = new Tray(url)
  const Menu = electron.Menu
  // 鼠标放到系统托盘图标上时的tips;
  tray.setToolTip('Music House')
  // 图标的上下文菜单
  const contextMenu = Menu.buildFromTemplate(trayMenuTemplate)
  // 设置此图标的上下文菜单
  tray.setContextMenu(contextMenu)
  // 双击图片显示窗口
  tray.on('double-click', () => {
    mainWindow.show()
    mainWindow.focus()
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
