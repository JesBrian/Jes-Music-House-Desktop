<template>
  <div>
    <div style="width:100%; min-height:268px; margin-top:28px">
      <div style="width:32%; float:left; text-align:center;">
        <img class="box-show" v-lazy="'http://p4.music.126.net/fNps5V_Auva93TgjLURyEw==/7960464187263772.jpg?param=200y200'" style="padding:8px;"/>
      </div>
      <div style="width:65%; margin-top:3px; display:inline-block; position:relative; color:#999;">
        <p style="font-size:23px; color:#EEE;">史克威尔艾尼克斯 · 游戏音乐编年史 ♪</p>
        <div style="height:32px; margin-top:18px; display:inline-block; line-height:32px;">
          <router-link to="/user" style="margin-right:12px; float:left;">
            <img class="box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:26px; border-radius:50%;"/>
          </router-link>
          <router-link to="/user" style="margin-right:38px; font-size:20px;">JesBrian</router-link>

          <span style="font-size:13.5px;">2018-09-23 创建</span>

          <div style="top:0; right:0; position:absolute; text-align:right; line-height:1.2em; color:#AAA; font-size:13.5px;">
            歌曲数<br/>106
          </div>
        </div>

        <div style="margin:18px 0;">
          <div class="super-btn-out" style="width:72px; height:29px; margin:10px 18px 0 0;">
            <span class="super-btn-in mh-if play" style="width:64px; height:20px; line-height:21px;"> 播放</span>
          </div>
          <div class="super-btn-out" style="width:72px; height:29px; margin:10px 18px 0 0;">
            <span class="super-btn-in mh-if play" style="width:64px; height:20px; line-height:21px;"> 列表</span>
          </div>
          <div @click="showModal('AddAlbum')" class="super-btn-out" style="width:72px; height:29px; margin:10px 18px 0 0;">
            <span class="super-btn-in mh-if collection-music" style="width:64px; height:20px; line-height:21px;"> 收藏</span>
          </div>
          <div class="super-btn-out" style="width:72px; height:29px; margin:10px 18px 0 0;">
            <span class="super-btn-in mh-if download" style="width:64px; height:20px; line-height:21px;"> 下载</span>
          </div>
          <div @click="showModal('Share')" class="super-btn-out" style="width:72px; height:29px; margin:10px 18px 0 0;">
            <span class="super-btn-in mh-if share" style="width:64px; height:20px; line-height:21px;"> 分享</span>
          </div>
        </div>

        <div style="font-size:14px;">
          <p style="margin-bottom:8px;">
            <span style="color:#DDD;">标签：</span>
            <router-link to="/" style="color:#00d8ff;">666</router-link>
            <i style="margin:0 3px; color:#FFF;">/</i>
            <router-link to="/" style="color:#00d8ff;">888</router-link>
            <i style="margin:0 3px; color:#FFF;">/</i>
            <router-link to="/" style="color:#00d8ff;">999</router-link>
          </p>
          <p style="word-break:break-all; line-height:1.2em;">
            <span style="color:#DDD;">简介：</span>
            wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayList'
}
</script>

<style scoped>

</style>