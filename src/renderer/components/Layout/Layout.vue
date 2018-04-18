<template>
	<div>
		<div class="glass-bg box-show"  style="-webkit-app-region:drag; width:100%; height:54px; top:0; left:0; position:fixed; z-index:9; border-radius:0;"></div>
		<div class="glass-bg box-show" style="width:188px; height:100%; top:0; left:0; position:fixed; border-radius:0;"></div>
		<div style="width:100%; height:600px; padding:54px 0 46px 188px; box-sizing:border-box; background:lightpink;">
			<slot />
		</div>
		<div class="glass-bg box-show" style="width:100%; height:46px; bottom:0; left:0; position:fixed; border-radius:0;"></div>
	</div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style scoped>

</style>