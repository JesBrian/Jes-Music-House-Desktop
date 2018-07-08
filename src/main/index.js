'use strict'

import { app, ipcMain, Tray, BrowserWindow, Menu, shell } from 'electron'

const iconName = process.platform === 'win32' ? 'icon.ico' : 'icon.png'
var iconPath = require('path').join(__dirname, `../../static/images/${iconName}`)

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
  iconPath = `../../static/images/${iconName}`
}

let mainWindow, miniWin
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
        mainWindow.webContents.send('save-music-info')
      }
    }
  ]))
  tray.on('double-click', () => {
    if (miniWin) {
      miniWin.hide()
    }
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
 * 最小化模式
 */
ipcMain.on('show-mini-view', () => {
  mainWindow.hide()
  if (!miniWin) {
    miniWin = new BrowserWindow({width: 358, height: 52, frame: false, transparent: true, resizable: false})
    miniWin.loadURL(`${winURL}/#/miniView`)
  }
  miniWin.show()
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
