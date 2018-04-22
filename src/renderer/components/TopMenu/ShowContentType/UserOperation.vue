<template>
  <div class="glass-bg box-show" style="width:288px; top:54px; right:188px; position:fixed; border-radius:0 0 6px 6px; font-size:15px;">
    <div class="box-show" style="width:100%; height:48px; position:relative;">
      <slot />
      <p class="text-hidden" style="max-width:138px; margin-left:18px; display:inline-block; line-height:48px; letter-spacing:0.68px; font-size:16px;">JesBrianJesBrianJesBrianJesBrianJesBrian</p>
      <div class="super-btn-out" style="width:68px; height:25px; margin:10.5px 38px 0 0; float:right;">
        <span class="super-btn-in" style="width:60px; height:19px; top:52%; line-height:20px;">签到</span>
      </div>
    </div>
    <div style="width:100%; height:56px; margin:16px 0 8px;">
      <div style="width:33%; height:100%; float:left;"></div>
      <div style="width:34%; height:100%; float:left; box-sizing:border-box; border-left:1px solid #282828; border-right:1px solid #282828;"></div>
      <div style="width:33%; height:100%; float:left;"></div>
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