<template>
  <ul>
    <li style="margin:0 0 2px; padding:2px 0 0; box-shadow:inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.5), inset 0 0 0 1px #272727; line-height:32px;">
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
    </li>
    <li v-for="n in 18" class="box-shadow" style="padding:2px 0;">
      <downloaded-item :index="n" />
    </li>
  </ul>
</template>

<script>
  import DownloadedItem from './DownloadedItem.vue'

  export default {
    name: 'DownloadedGroup',

    components: {
      DownloadedItem
    },

    data () {
      return {
        titleOrder: 'up-down',
        singerOrder: 'up-down',
        timeOrder: 'up-down'
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
      }
    }
  }
</script>

<style scoped>

</style>