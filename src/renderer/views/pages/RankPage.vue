<template>

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
</template>

<script>
export default {
  name: 'RankPage',

  components: {}
}
</script>

<style scoped>

</style>