<template>
  <div>

    <div style="margin-bottom:28px; padding:0 68px; box-sizing:border-box;">
      <span style="float:left; font-size:28px; font-weight:700;">全部</span>
      <div style="width:128px; height:36px; margin:-6px 28px 0; position:relative; display:inline-block;">
        <div @click="changeShowPlayListCategoryContent" class="super-btn-out" style="width:100%; height:100%;">
          <span class="super-btn-in" style="width:118px; height:25px; top:48%; line-height:27px;">选择分类 <i class="mh-if double-arrow-down"></i></span>
        </div>

        <div v-if="showPlayListCategoryContent" class="glass-bg box-show" style="width:840px; top:42px; left:-100%; position:absolute; z-index:9; line-height:1.68em;">
          <i @click="changeShowPlayListCategoryContent" class="mh-if close" style="top:4px; right:8px; position:absolute; font-size:18px; color:#BBB; cursor:pointer;"></i>
          <div style="width:100%; box-shadow:0 3px 3px -4px #FFF;">
            <div @click="changePlayListCategory" class="super-btn-out" style="width:86px; height:30px; margin:8px 28px 2px;">
              <span class="super-btn-in" style="width:76px; height:22px; top:48.5%; padding-left:1.5px; line-height:22px; letter-spacing:1.2px;">全部风格</span>
            </div>
          </div>
          <div style="overflow:hidden;">
            <div style="width:12%; margin:0 0 -500px; padding:18px 0 500px;  float:left; border-right:1px solid #444; text-align:center;">
              <i class="mh-if earth" style="margin:0 -3px 0 18px; float:left; font-size:23px;"></i>语种
            </div>
            <div style="width:87%; padding:18px 8px 0 23px; display:inline-block; box-sizing:border-box;">
              <span @click="changePlayListCategory" class="play-list-category">华语</span>
              <span @click="changePlayListCategory" class="play-list-category active">欧美</span>
              <span @click="changePlayListCategory" class="play-list-category">日语</span>
              <span @click="changePlayListCategory" class="play-list-category">韩语</span>
              <span @click="changePlayListCategory" class="play-list-category">粤语</span>
              <span @click="changePlayListCategory" class="play-list-category">小语种</span>
            </div>
          </div>
          <div style="overflow:hidden;">
            <div style="width:12%; margin:0 0 -500px; padding:18px 0 500px;  float:left; border-right:1px solid #444; text-align:center;">
              <i class="mh-if instrument" style="margin:0 -3px 0 18px; float:left; font-size:23px;"></i>风格
            </div>
            <div style="width:87%; padding:18px 8px 0 23px; display:inline-block; box-sizing:border-box;">
              <span @click="changePlayListCategory" class="play-list-category">流行</span>
              <span @click="changePlayListCategory" class="play-list-category">摇滚</span>
              <span @click="changePlayListCategory" class="play-list-category">民谣</span>
              <span @click="changePlayListCategory" class="play-list-category">电子</span>
              <span @click="changePlayListCategory" class="play-list-category">舞曲</span>
              <span @click="changePlayListCategory" class="play-list-category">说唱</span>
              <span @click="changePlayListCategory" class="play-list-category">轻音乐</span>
              <span @click="changePlayListCategory" class="play-list-category">爵士</span>
              <span @click="changePlayListCategory" class="play-list-category">乡村</span>
              <span @click="changePlayListCategory" class="play-list-category">R&B/Soul</span>
              <span @click="changePlayListCategory" class="play-list-category">古典</span>
              <span @click="changePlayListCategory" class="play-list-category">民族</span>
              <span @click="changePlayListCategory" class="play-list-category">英伦</span>
              <span @click="changePlayListCategory" class="play-list-category">金属</span>
              <span @click="changePlayListCategory" class="play-list-category">朋克</span>
              <span @click="changePlayListCategory" class="play-list-category">蓝调</span>
              <span @click="changePlayListCategory" class="play-list-category">雷鬼</span>
              <span @click="changePlayListCategory" class="play-list-category active">世界音乐</span>
              <span @click="changePlayListCategory" class="play-list-category">拉丁</span>
              <span @click="changePlayListCategory" class="play-list-category">另类/独立</span>
              <span @click="changePlayListCategory" class="play-list-category">New Age</span>
              <span @click="changePlayListCategory" class="play-list-category">古风</span>
              <span @click="changePlayListCategory" class="play-list-category">后摇</span>
              <span @click="changePlayListCategory" class="play-list-category">Bossa Nova</span>
            </div>
          </div>
          <div style="overflow:hidden;">
            <div style="width:12%; margin:0 0 -500px; padding:18px 0 500px;  float:left; border-right:1px solid #444; text-align:center;">
              <i class="mh-if cofee" style="margin:0 -3px 0 18px; float:left; font-size:23px;"></i>场景
            </div>
            <div style="width:87%; padding:18px 8px 0 23px; display:inline-block; box-sizing:border-box;">
              <span @click="changePlayListCategory" class="play-list-category">清晨</span>
              <span @click="changePlayListCategory" class="play-list-category">夜晚</span>
              <span @click="changePlayListCategory" class="play-list-category">学习</span>
              <span @click="changePlayListCategory" class="play-list-category">工作</span>
              <span @click="changePlayListCategory" class="play-list-category">午休</span>
              <span @click="changePlayListCategory" class="play-list-category">下午茶</span>
              <span @click="changePlayListCategory" class="play-list-category">地铁</span>
              <span @click="changePlayListCategory" class="play-list-category">驾车</span>
              <span @click="changePlayListCategory" class="play-list-category">运动</span>
              <span @click="changePlayListCategory" class="play-list-category">旅行</span>
              <span @click="changePlayListCategory" class="play-list-category">散步</span>
              <span @click="changePlayListCategory" class="play-list-category">酒吧</span>
            </div>
          </div>
          <div style="overflow:hidden;">
            <div style="width:12%; margin:0 0 -500px; padding:18px 0 500px;  float:left; border-right:1px solid #444; text-align:center;">
              <i class="mh-if exciting" style="margin:0 -3px 0 18px; float:left; font-size:23px;"></i>情感
            </div>
            <div style="width:87%; padding:18px 8px 0 23px; display:inline-block; box-sizing:border-box;">
              <span @click="changePlayListCategory" class="play-list-category">怀旧</span>
              <span @click="changePlayListCategory" class="play-list-category">清新</span>
              <span @click="changePlayListCategory" class="play-list-category">浪漫</span>
              <span @click="changePlayListCategory" class="play-list-category">性感</span>
              <span @click="changePlayListCategory" class="play-list-category">伤感</span>
              <span @click="changePlayListCategory" class="play-list-category">治愈</span>
              <span @click="changePlayListCategory" class="play-list-category">放松</span>
              <span @click="changePlayListCategory" class="play-list-category">孤独</span>
              <span @click="changePlayListCategory" class="play-list-category">感动</span>
              <span @click="changePlayListCategory" class="play-list-category">兴奋</span>
              <span @click="changePlayListCategory" class="play-list-category">快乐</span>
              <span @click="changePlayListCategory" class="play-list-category">安静</span>
              <span @click="changePlayListCategory" class="play-list-category">思念</span>
            </div>
          </div>
          <div style="padding-bottom:16px; overflow:hidden;">
            <div style="width:12%; margin:0 0 -500px; padding:18px 0 500px;  float:left; border-right:1px solid #444; text-align:center;">
              <i class="mh-if theme" style="margin:0 -3px 0 18px; float:left; font-size:23px;"></i>主题
            </div>
            <div style="width:87%; padding:18px 8px 0 23px; display:inline-block; box-sizing:border-box;">
              <span @click="changePlayListCategory" class="play-list-category">影视原声</span>
              <span @click="changePlayListCategory" class="play-list-category">ACG</span>
              <span @click="changePlayListCategory" class="play-list-category">儿童</span>
              <span @click="changePlayListCategory" class="play-list-category">校园</span>
              <span @click="changePlayListCategory" class="play-list-category">游戏</span>
              <span @click="changePlayListCategory" class="play-list-category">70后</span>
              <span @click="changePlayListCategory" class="play-list-category">80后</span>
              <span @click="changePlayListCategory" class="play-list-category">90后</span>
              <span @click="changePlayListCategory" class="play-list-category">网络歌曲</span>
              <span @click="changePlayListCategory" class="play-list-category">KTV</span>
              <span @click="changePlayListCategory" class="play-list-category">经典</span>
              <span @click="changePlayListCategory" class="play-list-category">翻唱</span>
              <span @click="changePlayListCategory" class="play-list-category">吉他</span>
              <span @click="changePlayListCategory" class="play-list-category">钢琴</span>
              <span @click="changePlayListCategory" class="play-list-category active">器乐</span>
              <span @click="changePlayListCategory" class="play-list-category">榜单</span>
              <span @click="changePlayListCategory" class="play-list-category">00后</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div>
      <album-group />
    </div>
  </div>
</template>

<script>
  import AlbumGroup from '../../album/AlbumGroup.vue'

  export default {
    name: 'IndexPlayList',

    components: {
      AlbumGroup
    },

    data () {
      return {
        nowPlayListCategory: 'all',
        showPlayListCategoryContent: false
      }
    },

    methods: {
      changeShowPlayListCategoryContent () {
        this.showPlayListCategoryContent = !this.showPlayListCategoryContent
      },

      changePlayListCategory () {
        this.changeShowPlayListCategoryContent()
      }
    }
  }
</script>

<style scoped>

  .play-list-category {
    margin-right:18px;
    display:inline-block;
    position:relative;
    cursor:pointer;
  }
  .play-list-category.active {
    color:#20dbfc; text-shadow:2px 2px 2px #000;
  }
  .play-list-category.active::after {
    content:'';
    width:100%;
    height:88%;
    top:50%;
    left:50%;
    padding:0 6px;
    position:absolute;
    display:block;
    transform:translate(-50%, -50%);
    border:1px solid #000;
    border-radius:3px;
    background-image:linear-gradient(#444444, #373738, #222);
    box-shadow:inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 4px 4px rgba(0, 0, 0, 0.5), inset 0 0 0 1px #272727;
    z-index:-1;
  }
  
</style>