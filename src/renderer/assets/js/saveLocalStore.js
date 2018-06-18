import store from '../../store'
import localStore from 'store'

export function testSaveLocalStore () {
  localStore.set('music', store.state.Music.playModel)
}
