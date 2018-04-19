<template>
	<div class="glass-bg box-show" style="-webkit-app-region:drag; width:100%; height:54px; top:0; left:0; position:fixed; z-index:9; border-radius:0;">
		<div style="-webkit-app-region: no-drag; height:50%; top:12px; right:8px; position:absolute; z-index:9; color:#DDD;">
			<i @click="atest" class="mh-if lessen" style="font-size:28px;"></i>
			<i class="mh-if close" style="font-size:28px;"></i>
		</div>
	</div>
</template>

<script>
var ipcRenderer = require('electron').ipcRenderer

export default {
  name: 'TopMenu',

  methods: {
    atest () {
      ipcRenderer.send('hide-window')
    }
  }
}
</script>

<style scoped>

</style>