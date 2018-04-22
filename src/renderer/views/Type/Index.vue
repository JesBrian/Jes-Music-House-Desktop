<template>
  <div>
    <!-- 主页菜单 -->
    <div style="width:92%; height:38px; margin:0 auto 28px; padding:0 68px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; text-align:center;">
      <div style="width:100%; height:28px; padding-top:10px; line-height:24px; color:#BBB; font-size:18px; font-weight:700;">
        <span @click="changeIndexContent('index')" :class="{'active': this.type === 'index'}" class="index-menu-cell">个性推荐</span>
        <span @click="changeIndexContent('album')" :class="{'active': this.type === 'album'}" class="index-menu-cell">歌单</span>
        <span @click="changeIndexContent('rank')" :class="{'active': this.type === 'rank'}" class="index-menu-cell">排行榜</span>
        <span @click="changeIndexContent('singer')" :class="{'active': this.type === 'singer'}" class="index-menu-cell">歌手</span>
        <span @click="changeIndexContent('newMusic')" :class="{'active': this.type === 'newMusic'}" class="index-menu-cell">最新音乐</span>
      </div>
    </div>

    <!-- 内容 -->
    <div style="width:92%; height:666px; margin:0 auto;">
      <!-- 幻灯片 -->
      <div style="width:80%; height:288px; margin:0 auto;">
        <slide-box />
      </div>

      <div style="margin-top:28px;">
        <div style="width:93%; height:53px; margin:0 auto 28px; padding:0 43px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:68px;">
          <span style="float:left; font-size:23px; font-weight:700;">推荐歌单</span>
          <router-link to="/album" class="read-more">更多 <i class="mh-if double-arrow-right"></i></router-link>
        </div>
        <ul style="width:93%; margin:0 auto;">
          <li v-for="n in 8" style="width:25%; height:208px; margin:0; padding:0; position:relative; display:inline-block;">
            <router-link to="/playList" class="cube-bg box-show" style="width:138px; height:138px; margin:0 0 8px 23px; padding:2px; position:relative; display:inline-block;">
              <img v-lazy="'http://p1.music.126.net/7goVc5XONBxnSS5FiGtV9A==/18999560928548815.jpg?param=140y140'" style="width:100%; height:100%;"/>
              <div class="glass-bg" style="width:140px; height:30px; left:-2px; bottom:-1px; padding:0 8px; position:absolute; border-radius:0; opacity:0.9; line-height:28px; font-size:14px; color:#999;">
                <i class="mh-if headphone" style="margin:1.5px 3px 0 0; float:left;"></i>5656
              </div>
            </router-link>
            <i class="mh-if play"></i>
            <p class="text-hidden" style="width:138px; margin-left:23px; color:#DDD;">
              <router-link to="/playList" style="color:#DDD;">c4s成8识vg删除yr54</router-link>
            </p>
            <p class="text-hidden" style="width:138px; margin-left:23px; line-height:2em; color:#888; font-size:13.3px;">
              <span style="float:left; margin:-1px 8px 0 0;">by</span><router-link to="singer" style="color:#AAA;">JesBrian</router-link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SlideBox from '../../components/SlideBox/SlideBox.vue'

export default {
  name: 'Index',

  components: {SlideBox},

  data () {
    return {
      type: 'index'
    }
  },

  methods: {
    changeIndexContent (type = 'index') {
      this.type = type
    }
  }
}
</script>

<style scoped>
	.index-menu-cell {
		margin:0 15px; padding:0 12px 6px 10px; cursor:pointer;
	}
	.index-menu-cell:hover {
		color:#EEE;
	}
	.index-menu-cell.active {
		border-bottom:2px solid #20dbfc; color:#20dbfc
	}


  .read-more {
    margin-top:33px; float:right; font-size:13px; color:#888; line-height:1em;
  }
  .read-more:hover {
    color:#EEE;
    text-decoration:underline;
  }
  .read-more > .mh-if {
    font-size:12.5px;
  }
  .read-more:hover > .mh-if {
    color: #20dbfc;
  }



  li > .mh-if {
    top:116px; left:138px; position:absolute; display:none;
  }
  li:hover>.mh-if, .new-disc-cell:hover>i.mh-if {
    display:inline-block;
  }
  li:hover>.mh-if:hover, .new-disc-cell>i.mh-if:hover {
    color:#20dbfc;
  }
</style>