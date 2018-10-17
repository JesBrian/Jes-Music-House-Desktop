<template>
  <div @click.right="showAlertMenu" @dblclick="playThisSong" class="song-item">
    <p class="song-item-num">{{ index }}</p>
    <p class="song-item-oper-container">
      <i class="song-item-oper-cell mh-if play"></i>
      <i class="song-item-oper-cell mh-if non-colloection"></i>
      <i class="song-item-oper-cell mh-if download"></i>
    </p>
    <p class="song-item-title text-hidden">{{ songItem.name }}</p>
    <p class="song-item-singer text-hidden">{{ songItem.singer }}</p>
    <p class="song-item-time">{{ songItem.time }}</p>
  </div>
</template>

<script>
  import { mouseCoords } from '../../../assets/js/commom.js'

  export default {
    name: 'SongItem',

    props: {
      index: Number,
      songItem: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },

    methods: {
      showAlertMenu (event) {
        let position = mouseCoords(event)
        let alertMenuConf = {
          type: 'SongMenu',
          position: position
        }
        this.$store.commit('SHOW_ALERT_MENU', alertMenuConf)
      },

      playThisSong () {
      }
    }
  }
</script>

<style scoped>
  .song-item {
    width:100%; height:28px; line-height:28px;
  }
  .song-item-num {
    width:4%; padding-right:4px; float:left; box-sizing:border-box; text-align:right; font-size:14px; line-height:30px;
  }
  .song-item-oper-container {
    width:12%; float:left; text-align:center;
  }
  .song-item-oper-container > .song-item-oper-cell {
    margin:0 2px;
  }
  .song-item-title {
    width:48%; padding:0 8px 0 3px; float:left; box-sizing:border-box;
  }
  .song-item-singer {
    width:25%; float:left;
  }
  .song-item-time {
    width:10%; float:left; text-align:center;
  }
</style>