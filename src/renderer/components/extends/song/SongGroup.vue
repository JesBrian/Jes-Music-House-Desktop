<template>
  <div>
    <div class="song-nav" style="margin:2px 0; padding:2px 0 0; box-shadow:inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.5), inset 0 0 0 1px #272727; line-height:31px;">
      <div style="height:30px;">
        <div style="width:5.5%; height:100%; float:left; box-sizing:border-box; border-right:1px solid #282828;"></div>
        <div style="width:9%; height:100%; float:left; box-sizing:border-box; border-right:1px solid #282828; text-align:center;">操作</div>
        <div @click="changeOrder('titleOrder')" style="width:47.5%; height:100%; padding-left:14px; position:relative; float:left; box-sizing:border-box; border-right:1px solid #282828; cursor:pointer;">
          音乐标题<i :class="titleOrder" class="mh-if" style="top:0; right:10px; position:absolute; font-size:13px; color:#888;"></i>
        </div>
        <div @click="changeOrder('singerOrder')" style="width:28%; height:100%; padding-left:16px; position:relative; float:left; box-sizing:border-box; border-right:1px solid #282828; cursor:pointer;">
          歌手<i :class="singerOrder" class="mh-if" style="top:0; right:10px; position:absolute; font-size:13px; color:#888;"></i>
        </div>
        <div @click="changeOrder('timeOrder')" style="width:10%; height:100%; padding-left:16px; position:relative; float:left; box-sizing:border-box; border-right:1px solid #282828; cursor:pointer;">
          时长<i :class="timeOrder" class="mh-if" style="top:0; right:10px; position:absolute; font-size:13px; color:#888;"></i>
        </div>
      </div>
    </div>

    <div v-for="(item, index) in songListData" class="box-shadow" style="padding:2px 0;">
      <song-item :index="index" :song-item="item" />
    </div>
  </div>
</template>

<script>
  import SongItem from './SongItem.vue'

  export default {
    name: 'SongGroup',

    components: {
      SongItem
    },

    props: {
      searchKey: ''
    },

    data () {
      return {
        titleOrder: 'up-down',
        singerOrder: 'up-down',
        timeOrder: 'up-down',

        songListData: [
          {id: 101, name: 'test1', singer: 'JesBrian', time: '00:58'},
          {id: 102, name: 'test2', singer: 'Jehfrian', time: '01:45'},
          {id: 103, name: 'test3', singer: '曾跟随', time: '01:30'},
          {id: 104, name: 'test4', singer: 'vsaguc', time: '11:30'},
          {id: 105, name: 'test5', singer: 'gqefyug', time: '03:33'},
          {id: 106, name: 'test6', singer: '参数部分', time: '12:05'},
          {id: 107, name: 'test7', singer: '二45幺', time: '08:45'},
          {id: 108, name: 'test8', singer: 'sxJcbh', time: '06:34'},
          {id: 109, name: 'test9', singer: '二45幺', time: '06:45'},
          {id: 110, name: 'test10', singer: 'ruqwoho', time: '06:45'},
          {id: 111, name: 'test11', singer: 'JesBrian', time: '00:58'},
          {id: 112, name: 'test12', singer: 'Jehfrian', time: '01:45'},
          {id: 113, name: 'test13', singer: '曾跟随', time: '01:30'},
          {id: 114, name: 'test14', singer: 'vsaguc', time: '11:30'},
          {id: 115, name: 'test15', singer: 'gqefyug', time: '03:33'},
          {id: 116, name: 'test16', singer: '参数部分', time: '12:05'},
          {id: 117, name: 'test17', singer: '二45幺', time: '08:45'},
          {id: 118, name: 'test18', singer: 'sxJcbh', time: '06:34'},
          {id: 119, name: 'test19', singer: '二45幺', time: '06:45'},
          {id: 120, name: 'test20', singer: 'ruqwoho', time: '18:45'}
        ],
        tempSongListData: [],

        timer: null
      }
    },

    watch: {
      searchKey (nVal) {
        if (this.timer === null) {
          this.songListData.forEach((item) => {
            this.tempSongListData.push(item)
          })
        }
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          if (nVal === '') {
            this.songListData = this.tempSongListData
          } else {
            let tempData = []
            this.tempSongListData.forEach(item => {
              if (item.name.includes(nVal) || item.singer.includes(nVal)) {
                tempData.push(item)
              }
            })
            this.songListData = tempData
          }
        }, 100)
      }
    },

    methods: {
      changeOrder (type) {
        if (this[type] === 'up-down') {
          this[type] = 'up'
        } else if (this[type] === 'up') {
          this[type] = 'down'
        } else {
          this[type] = 'up-down'
        }

        this.changeSongListOrder(type, this[type])
      },

      changeSongListOrder (type, order) {
        alert(type + ' - ' + order)
      }
    }
  }
</script>

<style scoped>

</style>