<template>
	<div class="glass-bg box-show ban-select" style="width:100%; height:46px; bottom:0; left:0; position:fixed; border-radius:0;  color:#AAA; text-align:center; line-height:44px;">
		<div style="width:188px; height:100%; float:left; text-align:center;">
			<i class="mh-if double-arrow-left" style="margin:1px 0 0 33px; float:left; font-size:22px;"></i>
			<i class="mh-if play" style="display:inline-block; font-size:35px;"></i>
			<i class="mh-if double-arrow-right" style="margin:1px 28px 0 0; float:right; font-size:22px;"></i>
		</div>
		<div style="width:600px; height:100%; float:left;">
			<div style="width:53px; height:100%; float:left;">00:00</div>
			<div style="display:inline-block;">
				<div class="progress-bar box-show" style="width:488px; height:10px; position:relative; background:#080808; border-radius:6px;">
					<div style="width:80%; height:6px; top:2.4px; left:0; position:absolute; background:#181818; border-radius:6px;"></div>
					<div style="width:60%; height:100%; top:0; left:0; position:absolute; background:linear-gradient(to top, #007EF0, #00D8FF, #00D8FF, #5EEBFF); border-radius:6px;">
						<a class="pointer cube-bg box-show"></a>
					</div>
				</div>
			</div>
			<div style="width:53px; height:100%; float:right;">99:99</div>
		</div>
		<div style="width:180px; height:100%; margin:0 0 0 12px; float:left;">
			<i @click="changeVolumeStatus" :class="volumeStatus ? 'volume-on' : 'volume-off'" class="mh-if" style="font-size:24px;"></i>
			<div :class="{'ban-change': !volumeStatus}" class="volume-bar box-show">
				<div style="width:60%; height:88%; margin-top:1px; position:relative; background:linear-gradient(to top, #007EF0, #00D8FF, #00D8FF, #5EEBFF); border-radius:5px;">
					<a class="pointer cube-bg box-show" style="top:-5px;"></a>
				</div>
			</div>
		</div>
		<div>
			<i class="mh-if loop" style="margin:5px; font-size:23px;"></i>
			<i class="mh-if lyrics" style="margin:5px; font-size:24px;"></i>
			<i class="mh-if menu" style="margin:0 32px 0 5px; position:relative; z-index:2; font-size:23px;"><span>12</span></i>
		</div>
	</div>
</template>

<script>
export default {
  name: 'MusicPlayer',

  data () {
    return {
      volumeStatus: true
    }
  },

  methods: {
    changeVolumeStatus () {
      this.volumeStatus = !this.volumeStatus
    }
  }
}
</script>

<style scoped>

  .mh-if {
    color:#999;
    text-shadow: 0 0 6px #000;
  }
  .mh-if:hover {
    cursor:pointer;
    color: #20dbfc;
    text-shadow: 0 0 3px #444, 0 0 18px #000;
    opacity:1!important;
  }
  .mh-if.menu > span {
    width:38px; height:17px; top:3.2px; left:20px; padding:0 3px; position:absolute; z-index:-1; box-sizing:border-box; border-radius:0 10px 10px 0;
    box-shadow:0.3px 0.3px 2.5px -0.6px #AAA, inset 0 0 6px #000, inset 0 2px 2px #000, inset 3px 0 2px #000, inset -2px 0 2px #000;
    text-align:center; font-size:12.5px; line-height:17px; color:#888; text-shadow:2px 2px 6px #000;
  }
  .mh-if.menu:hover > span {
    color:#DDD;
    box-shadow: 0 0 6px #666, inset 0 0 6px #000, inset 0 2px 2px #000, inset 3px 0 2px #000, inset -2px 0 2px #000;
  }

  .pointer {
    width:18px; height:18px; top:-4px; right:-4px; position:absolute; border-radius:9px;
  }
  .pointer:hover {
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727, 0 0 8px #2af1fc;
  }
  .volume-bar {
    width:138px; height:10px; margin:17px 0 0; float:right; background:#080808; border-radius:6px; cursor:pointer;
  }
  .volume-bar.ban-change {
    opacity:0.3;
    cursor:not-allowed
  }
</style>