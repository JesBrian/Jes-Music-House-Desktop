<template>
  <div :class="$store.state.Tips.tipsType" class="glass-bg box-show">
    <div id="tipsIcon">
      <i class="mh-if gear"></i>
    </div>
    <p style="display:inline-block; line-height:36px;">
      <span style="color:#AAA; letter-spacing:1.3px;">{{ $store.state.Tips.tips }}</span>
    </p>
    <i @click="closeTips" class="close-button">×</i>
  </div>
</template>

<script>
export default {
  name: 'Tips',

  methods: {
    closeTips () {
      this.$store.commit('SHOW_TIPS', {})
    }
  }
}
</script>

<style scoped>
  div.glass-bg {
    height:38px; top:68px; right:18px; padding:0 28px 0 0; position:fixed; z-index:9999; box-sizing:border-box;
  }
  div.glass-bg.info {
    box-shadow:0 0 2px #00d8ff, inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
  }
  div.glass-bg.warning {
    box-shadow:0 0 2px #FF92C3, inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
  }

  #tipsIcon {
    width:38px; height:38px; margin-right:8px; display:inline-block; border-radius:4px 4px 6px 4px; line-height:37px; text-align:center; box-shadow:inset -2px 0 2px -2px #444, 2px 0 2px -2px #000;
  }
  #tipsIcon > .gear {
    font-size:18px;
  }
  .glass-bg.info #tipsIcon > .gear {
    color:#00d8ff;
  }
  .glass-bg.warning #tipsIcon > .gear {
    color:#FF92C3;
  }

  div > i.close-button {
    top:-3px; right:2px; position:absolute; font-size:23px; color:#AAA; cursor:pointer;
  }
  div > i:hover {
    color:#EEE;
  }
</style>