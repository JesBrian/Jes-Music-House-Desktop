<template>
  <div class="glass-bg box-show" style="width:368px; height:52px; position:absolute; overflow:hidden; -webkit-app-region:drag;">
    <div style="width:100%; height:100%; position:relative;">
      <div @click="changeViewModel" style="width:38px; height:38px; margin:6px; float:left; box-sizing:border-box; -webkit-app-region:no-drag;">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530963872613&di=fc5d6a5013940181dce717ca9034dfb9&imgtype=0&src=http%3A%2F%2Fstatic.open-open.com%2Fnews%2FuploadImg%2F20160513%2F20160513105701_693.png" style="width:100%; height:100%;"/>
      </div>
      <div style="width:100%; height:38px; padding:6px 15px 0 52px; box-sizing:border-box;">
        <div id="miniViewInfoAndOperation">
          <div id="miniViewInfo">
            <p class="text-hidden" style="text-align:center; font-size:16px;">Be Somewhere</p>
            <p class="text-hidden" style="font-size:14px;">JesBrianJesBrianJesBrianJesBrianJesBrianJesBrian</p>
          </div>
          <div id="miniViewOperation">
              <i class="mh-if double-arrow-left" style="margin-left:32px; float:left; font-size:19px; -webkit-app-region:no-drag;"></i>
              <i class="mh-if play" style="font-size:32px; -webkit-app-region:no-drag;"></i>
              <i class="mh-if double-arrow-right" style="margin-right:23px; float:right; font-size:19px; -webkit-app-region:no-drag;"></i>
          </div>
        </div>
        <div style="width:38%; height:100%; float:right; text-align:right; line-height:36px;">
          <i style="margin-right:5px; font-size:18px;" class="mh-if non-colloection"></i>
          <i style="margin-right:5px; font-size:18px;" class="mh-if lyrics"></i>
          <i style="margin-right:5px; font-size:18px;" class="mh-if volume-on"></i>
          <i style="margin-right:5px; font-size:18px;" class="mh-if music-list"></i>
        </div>
      </div>
      <div style="width:100%; height:14px; padding:4px 15px 0 50px; box-sizing:border-box;">
        <div style="width:100%; height:3px; position:relative; background:#555; border-radius:3px;">
            <div style="width:68%; height:100%; top:0; left:0; position:absolute; border-radius:3px; background:#38daf0;"></div>
        </div>
      </div>
      <i style="top:0; right:0; position:absolute;">&times;</i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MiniView',

    methods: {
      changeViewModel () {
        this.ipcRenderer.send('show-main-view')
      }
    }
  }
</script>

<style scoped>
  #miniViewInfoAndOperation {
    width:60%; height:100%; float:left;
  }
  #miniViewInfoAndOperation > #miniViewInfo {
    width:100%; height:100%;
  }
  #miniViewInfoAndOperation:hover > #miniViewInfo {
    display:none;
  }
  #miniViewInfoAndOperation > #miniViewOperation {
    width:100%; height:100%; display:none; text-align:center; line-height:33px;
  }
  #miniViewInfoAndOperation:hover > #miniViewOperation {
    display:block;
  }
</style>