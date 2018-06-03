<template>
  <div>

    <div style="width:92%; margin:0 auto 28px; padding-bottom:28px; box-shadow:0 2px 3px -3px #FFF;">
      <div style="width:100%; height:88px; background:lightskyblue"></div>
    </div>

    <div style="width:92%; margin:0 auto; text-align:center;">
      <singer-group />
    </div>
  </div>
</template>

<script>
import SingerGroup from '../../singer/SingerGroup.vue'

export default {
  name: 'IndexSinger',

  components: {
    SingerGroup
  }
}
</script>

<style scoped>

</style>