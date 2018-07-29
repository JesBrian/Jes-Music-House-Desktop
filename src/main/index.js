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

let mainWindow, lyricWindow, timer
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    resizable: false,
    width: 1180,
    height: 638,
    frame: false,
    transparent: true,
    webPreferences: {webSecurity: false}
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('move', () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      mainWindow.webContents.send('window-move', mainWindow.getPosition())
    }, 368)
  })

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
      label: '显示窗口',
      click: () => {
        mainWindow.show()
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
    mainWindow.show()
    mainWindow.focus()
  })
})

/**
 * PC本地浏览器打开网页
 */
ipcMain.on('open-browser-url', (event, url) => {
  shell.openExternal(url)
})

ipcMain.on('save-view-position', () => {
  mainWindow.webContents.send('window-move', mainWindow.getPosition())
})

/**
 * 窗口最小化
 */
ipcMain.on('hide-window', () => {
  mainWindow.minimize()
})

/**
 * mini 播放器模式
 */
ipcMain.on('show-mini-view', (event, position) => {
  mainWindow.setContentBounds({x: position[0], y: position[1], width: 368, height: 52})
  mainWindow.setAlwaysOnTop(true)
})

/**
 * mini 播放器模式下展示内容
 */
ipcMain.on('mini-show-content', (event, isShow, contentType) => {
  if ((isShow === true) && (contentType === 'volume')) {
    mainWindow.setSize(368, 86)
  } else if ((isShow === true) && (contentType === 'playList')) {
    mainWindow.setSize(368, 288)
  } else {
    mainWindow.setSize(368, 52)
  }
})

/**
 * 正常客户端模式
 */
ipcMain.on('show-main-view', (event, position) => {
  mainWindow.setContentBounds({x: position[0], y: position[1], width: 1180, height: 638})
  mainWindow.setAlwaysOnTop(false)
})

/**
 * 系统托盘
 */
ipcMain.on('hide-main-window', () => {
  mainWindow.hide()
})

/**
 * 展示歌词
 */
ipcMain.on('show-lyric-view', () => {
  lyricWindow = new BrowserWindow({
    resizable: false,
    width: 888,
    height: 168,
    frame: false,
    transparent: true,
    webPreferences: {webSecurity: false, devTools: false}
  })

  lyricWindow.loadURL(winURL)
})

/**
 * 取消展示歌词
 */
ipcMain.on('close-lyric-view', () => {
  lyricWindow.close()
})

/**
 * 退出
 */
ipcMain.on('window-all-closed', () => {
  app.quit()
})
