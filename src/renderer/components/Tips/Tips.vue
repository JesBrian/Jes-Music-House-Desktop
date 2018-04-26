<template>
  <div class="glass-bg" style="height:38px; top:68px; right:18px; padding:0 25px 0 12px; position:fixed; z-index:9999; box-sizing:border-box;
    box-shadow:0 0 2px #00d8ff, inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;">
    <p style="line-height:35px;">
      <i class="mh-if gear" style="margin-right:5px; font-size:18px; color:#00d8ff;"></i>
      <span style="color:#AAA; letter-spacing:1.3px;">{{ $store.state.Tips.tips }}</span>
    </p>
    <i @click="closeTips" style="top:-3px; right:2px; position:absolute; font-size:23px; color:#DDD; cursor:pointer;">×</i>
  </div>
</template>

<script>
export default {
  name: 'Tips',

  methods: {
    closeTips () {
      this.$store.commit('SHOW_TIPS')
    }
  }
}
</script>

<style scoped>

</style>