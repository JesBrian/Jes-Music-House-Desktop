<template>
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

      <album-group />
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
                  <img v-lazy="require('../../../../../../static/images/default/disc.png')" style="width:88px; height:75px;"/>
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
</template>

<script>
import SlideBox from '../../../base/SlideBox/SlideBox.vue'
import AlbumGroup from '../../Album/AlbumGroup.vue'

export default {
  name: 'IndexRecommend',

  components: {
    AlbumGroup, SlideBox
  }
}
</script>

<style scoped>

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


  li.rank-cell:nth-child(even) {
    background:#1D1D1D;
  }
  li.rank-cell:nth-child(odd) {
    background:#181818;
  }
</style>