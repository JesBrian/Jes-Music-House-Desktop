<template>
  <div style="background:#262626;">
    <!-- 主页菜单 -->
    <div style="width:92%; height:38px; margin:18px auto 28px; padding:0 68px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; text-align:center;">
      <div style="width:100%; height:28px; padding-top:10px; line-height:24px; color:#BBB; font-size:18px; font-weight:700; text-shadow:1px 1px 0.5px #000;">
        <span @click="changeIndexContent('index')" :class="{'active': this.type === 'index'}" class="index-menu-cell">个性推荐</span>
        <span @click="changeIndexContent('album')" :class="{'active': this.type === 'album'}" class="index-menu-cell">歌单</span>
        <span @click="changeIndexContent('rank')" :class="{'active': this.type === 'rank'}" class="index-menu-cell">排行榜</span>
        <span @click="changeIndexContent('singer')" :class="{'active': this.type === 'singer'}" class="index-menu-cell">歌手</span>
        <span @click="changeIndexContent('disc')" :class="{'active': this.type === 'disc'}" class="index-menu-cell">新碟上架</span>
      </div>
    </div>

    <!-- 内容 -->
    <div style="width:92%; margin:0 auto;">
      <!-- 幻灯片 -->
      <div style="width:80%; height:288px; margin:0 auto 28px;">
        <slide-box />
      </div>

      <div>
        <div style="width:93%; height:53px; margin:0 auto 28px; padding:0 43px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:68px; text-shadow:1px 1px 0.5px #000;">
          <i class="mh-if music-box" style="margin-right:8px; font-size:23px; color:#00d8ff;"></i><span style="font-size:23px; font-weight:700; color:#CCC;">推荐歌单</span>
          <router-link to="/album" class="read-more">更多 <i class="mh-if double-arrow-right"></i></router-link>
        </div>
        <ul style="width:93%; margin:0 auto;">
          <li v-for="n in 8" style="width:25%; height:208px; margin:0; padding:0; position:relative; display:inline-block;">
            <router-link to="/play-list" class="cube-bg box-show" style="width:138px; height:138px; margin:0 0 8px 23px; padding:2px; position:relative; display:inline-block;">
              <img v-lazy="'http://p1.music.126.net/7goVc5XONBxnSS5FiGtV9A==/18999560928548815.jpg?param=140y140'" style="width:100%; height:100%;"/>
              <div class="glass-bg" style="width:140px; height:30px; left:-2px; bottom:-1px; padding:0 8px; position:absolute; border-radius:0; opacity:0.9; line-height:28px; font-size:14px; color:#999;">
                <i class="mh-if headphone" style="margin:1.5px 3px 0 0; float:left;"></i>5656
              </div>
            </router-link>
            <i class="mh-if play"></i>
            <p class="text-hidden" style="width:138px; margin-left:23px; color:#DDD;">
              <router-link to="/play-list" style="color:#DDD;">c4s成8识vg删除yr54</router-link>
            </p>
            <p class="text-hidden" style="width:138px; margin-left:23px; line-height:2em; color:#888; font-size:13.3px;">
              <span style="float:left; margin:-1px 8px 0 0;">by</span><router-link to="singer" style="color:#AAA;">JesBrian</router-link>
            </p>
          </li>
        </ul>
      </div>

      <div>
        <div style="width:93%; height:53px; margin:0 auto 28px; padding:0 43px 0 23px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:68px; text-shadow:1px 1px 0.5px #000;">
          <i class="mh-if music-albu" style="margin-right:8px; font-size:23px; color:#00d8ff;"></i><span style="font-size:23px; font-weight:700; color:#CCC;">新碟上架</span>
          <router-link to="/disc" class="read-more">更多 <i class="mh-if double-arrow-right"></i></router-link>
        </div>
        <div class="glass-bg box-show" style="width:93%; height:138px; margin:0 auto 18px; position:relative;">
          <a class="p-n-btn prev-btn ban-select" style="width:23px; height:43px; top:48%; left:13px; position:absolute; display:inline-block; transform:translate(0,-50%);"></a>
          <a class="p-n-btn nex。t-btn ban-select" style="width:23px; height:43px; top:48%; right:13px; position:absolute; display:inline-block; transform:translate(0,-50%);"></a>
          <div style="width:100%; height:100%; padding:8px 43px; box-sizing:border-box;">
            <ul style="width:100%; height:100%;">
              <li v-for="n in 5" style="width:20%; height:100%; float:left;">
                <div class="new-disc-cell" style="width:100%; height:100%; position:relative; text-align:center;">
                  <router-link to="play-list" style="margin:6px 0 0 6px; position:relative; display:inline-block;">
                    <img v-lazy="'http://p3.music.126.net/w_GpzV7fky3gOgIf4-gC4Q==/109951163241853988.jpg?param=130y130'" style="width:65px; height:65px; top:5px; left:5px; position:absolute;"/>
                    <img v-lazy="require('../../../../static/images/default/disc.png')" style="width:88px; height:75px;"/>
                  </router-link>
                  <i class="mh-if play"></i>
                  <p class="text-hidden" style="margin-left:26px; text-align:left;">
                    <router-link to="play-list" style="font-size:14.5px;">cx城市规划s市规划s</router-link>
                  </p>
                  <router-link to="singer" style="font-size:12.5px;">JesBrian</router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style="height:588px;">
        <div style="width:93%; height:53px; margin:0 auto 28px; padding:0 43px 0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:68px; text-shadow:1px 1px 0.5px #000;">
          <i class="mh-if exponential" style="margin-right:8px; font-size:23px; color:#00d8ff;"></i><span style="font-size:23px; font-weight:700; color:#CCC;">排行榜</span>
          <router-link to="/rank" class="read-more">更多 <i class="mh-if double-arrow-right"></i></router-link>
        </div>
        <div style="width:93%; margin:0 auto;">
          <div class="" style="width:33%; height:100%; float:left; box-sizing:border-box; border:1px solid #111;">
            <div class="glass-bg" style="width:100%; height:114px; border-radius:0;">
              <router-link to="rank">
                <img class="box-show" v-lazy="'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'" style="width:80px; height:80px; margin:16px 10px 0 16px; padding:3px; float:left;"/>
              </router-link>
              <p style="width:100%; line-height:3.3em; font-size:18px;"><router-link to="rank" style="color:#BBB;">XXXX飙升榜单</router-link></p>
              <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
                <span class="super-btn-in mh-if play" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
              </div>
              <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
                <span class="super-btn-in mh-if collection-music" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
              </div>
              <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
                <span class="super-btn-in mh-if share" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
              </div>
            </div>
            <ul style="width:100%; line-height:32px;">
              <li v-for="n in 10" class="rank-cell" style="width:100%; height:32px; padding:0 12px 0 18px; box-sizing:border-box; border-bottom:1px solid #111;">
                {{ n }}
              </li>
              <li class="rank-cell" style="width:100%; height:32px;">
                <router-link to="rank" class="read-more" style="margin:0 23px; line-height:32px;">查看全部 <i class="mh-if double-arrow-right"></i></router-link>
              </li>
            </ul>
          </div>
          <div style="width:34%; height:100%; float:left; box-sizing:border-box; border-top:1px solid #111; border-bottom:1px solid #111;">
            <div class="glass-bg" style="width:100%; height:114px; border-radius:0;">
              <router-link to="rank">
                <img class="box-show" v-lazy="'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'" style="width:80px; height:80px; margin:16px 10px 0 16px; padding:3px; float:left;"/>
              </router-link>
              <p style="width:100%; line-height:3.3em; font-size:18px;"><router-link to="rank" style="color:#BBB;">XXXX飙升榜单</router-link></p>
              <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
                <span class="super-btn-in mh-if play" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
              </div>
              <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
                <span class="super-btn-in mh-if collection-music" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
              </div>
              <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
                <span class="super-btn-in mh-if share" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
              </div>
            </div>
            <ul style="width:100%; line-height:32px;">
              <li v-for="n in 10" class="rank-cell" style="width:100%; height:32px; padding:0 12px 0 18px; box-sizing:border-box; border-bottom:1px solid #111;">
                {{ n }}
              </li>
              <li class="rank-cell" style="width:100%; height:32px;">
                <router-link to="rank" class="read-more" style="margin:0 23px; line-height:32px;">查看全部 <i class="mh-if double-arrow-right"></i></router-link>
              </li>
            </ul>
          </div>
          <div style="width:33%; height:100%; float:left; box-sizing:border-box; border:1px solid #111;">
            <div class="glass-bg" style="width:100%; height:114px; border-radius:0;">
              <router-link to="rank">
                <img class="box-show" v-lazy="'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'" style="width:80px; height:80px; margin:16px 10px 0 16px; padding:3px; float:left;"/>
              </router-link>
              <p style="width:100%; line-height:3.3em; font-size:18px;"><router-link to="rank" style="color:#BBB;">XXXX飙升榜单</router-link></p>
              <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
                <span class="super-btn-in mh-if play" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
              </div>
              <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
                <span class="super-btn-in mh-if collection-music" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
              </div>
              <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
                <span class="super-btn-in mh-if share" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
              </div>
            </div>
            <ul style="width:100%; line-height:32px;">
              <li v-for="n in 10" class="rank-cell" style="width:100%; height:32px; padding:0 12px 0 18px; box-sizing:border-box; border-bottom:1px solid #111;">
                {{ n }}
              </li>
              <li class="rank-cell" style="width:100%; height:32px;">
                <router-link to="rank" class="read-more" style="margin:0 23px; line-height:32px;">查看全部 <i class="mh-if double-arrow-right"></i></router-link>
              </li>
            </ul>
          </div>
        </div>
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
    margin-top:33px; float:right; font-size:13px; color:#BBB; line-height:1em;
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
  li:hover>.mh-if {
    display:inline-block;
  }
  li:hover>.mh-if:hover {
    color:#20dbfc;
  }


  li.rank-cell:nth-child(even) {
    background:#1D1D1D;
  }
  li.rank-cell:nth-child(odd) {
    background:#181818;
  }
</style>