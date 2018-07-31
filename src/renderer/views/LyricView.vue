<template>
	<div style="width:100%; height:68px; box-sizing:border-box; overflow:auto; background:#555;">
      666 {{ status }}
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

</style>