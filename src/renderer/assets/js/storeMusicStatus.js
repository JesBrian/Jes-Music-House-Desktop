import localStore from 'store'

export function saveNowPlayIndex () {
  localStore.set('nowPlayIndex', 0)
}

export function savePlayList () {
  localStore.set('playList', [

  ])
}

export function getNowPlayIndex () {
  return localStore.get('nowPlayIndex')
}

export function getPlayList () {
  return localStore.get('playList')
}
