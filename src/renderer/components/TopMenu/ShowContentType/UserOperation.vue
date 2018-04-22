<template>
  <div class="glass-bg box-show" style="width:288px; height:128px; top:54px; right:188px; position:fixed; border-radius:0 0 0 6px; font-size:15px;">
    <div class="box-show" style="width:100%; height:48px; position:relative;">
      <i style="width:0; height:0; top:-25px; left:51%; position:absolute; transform:translate(-50%,0); border-width:12px; border-style:solid; border-color:transparent transparent #20dbfc transparent;"></i>
      <slot />
      This is UserOperation
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserOperation'
}
</script>

<style scoped>

</style>