<template>
	<div style="width:100%; height:108px; padding:5px; box-sizing:border-box; overflow:auto;">
      <div style="width:100%; height:100%; box-sizing:border-box; background:rgba(0, 0, 0, 0.18); box-shadow:0 0 4px #CCC, inset 0 0 1px #DDD, inset 0 0 1px #000; -webkit-app-region:drag;">
        <div style="width:100%; height:38px; line-height:38px; text-align:center;">
          <i class="mh-if music-list"></i>
          <i class="mh-if double-arrow-left"></i>
          <i class="mh-if play"></i>
          <i class="mh-if double-arrow-right"></i>
          <i class="mh-if gear"></i>
          <i class="mh-if lock"></i>
          <i class="mh-if volume-on"></i>
          <i class="mh-if close"></i>
        </div>
        <p style="font-size:36px; line-height:45px; text-align:center; -webkit-text-stroke:0.5px red;">666 {{ status }}</p>
      </div>
	</div>
</template>

<script>
  export default {
    name: 'LyricView',

    components: {},

    data () {
      return {
        status: false
      }
    },

    watch: {
    },

    created () {
      this.$ipcRenderer.on('change-lyric-status', (event, status) => {
        this.status = status
      })
    },

    computed: {
    },

    methods: {
    }
  }
</script>

<style scoped>
  .mh-if {
    margin:0 8px; font-size:18px; color:#DDD; text-shadow:1px 1px 2px #000; -webkit-app-region:no-drag;
  }
  .mh-if:hover {
    color:#FFF;
  }
  .mh-if:active {
    color: #20dbfc;
  }
</style>