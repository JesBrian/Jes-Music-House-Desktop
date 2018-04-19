<template>
	<layout>
		<div style="width:78%; height:288px; margin:0 auto;">
			<slide-box />
		</div>
	</layout>
</template>

<script>
import Layout from '../components/Layout/Layout.vue'
import SlideBox from '../components/SlideBox/SlideBox.vue'

export default {
  name: 'Index',

  components: {SlideBox, Layout}
}
</script>

<style scoped>

</style>