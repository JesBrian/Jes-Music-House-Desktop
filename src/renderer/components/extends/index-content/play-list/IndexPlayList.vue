<template>
  <div>

    <div style="height:48px; margin-bottom:28px; padding:0 68px; box-sizing:border-box;">
      <span style="float:left; font-size:28px; font-weight:700;">全部</span>
      <div style="width:128px; height:36px; margin:-6px 28px 0; position:relative; display:inline-block;">
        <div @click="changeShowAlbumTypeContent" class="super-btn-out" style="width:100%; height:100%;">
          <span class="super-btn-in" style="width:118px; height:25px; top:48%; line-height:27px;">选择分类 <i class="mh-if double-arrow-down"></i></span>
        </div>

        <div v-if="showAlbumTypeContent" class="glass-bg box-show" style="width:688px; top:42px; left:-100%; position:absolute; z-index:9; line-height:1em;">
          <i @click="changeShowAlbumTypeContent" class="mh-if close" style="top:4px; right:4px; position:absolute; font-size:18px; color:#BBB; cursor:pointer;"></i>
          <div style="width:100%; box-shadow:0 3px 3px -4px #FFF;">
            <div @click="chooseAlbumType" class="super-btn-out" style="width:86px; height:30px; margin:10px 28px;">
              <span class="super-btn-in" style="width:76px; height:22px; top:48.5%; padding-left:1.5px; line-height:22px; letter-spacing:1.2px;">全部风格</span>
            </div>
          </div>
          <div style="width:16%; height:288px; float:left; background:lightskyblue;">
            语种
            风格
            场景
            情感
            主题
          </div>
          <div style="width:84%; height:288px; display:inline-block; background:#3fffbc;">
            <div>
              华语 欧美 日语 韩语 粤语 小语种
            </div>
            <div>
              流行| 摇滚| 民谣| 电子| 舞曲| 说唱| 轻音乐| 爵士| 乡村| R&B/Soul| 古典| 民族| 英伦| 金属| 朋克| 蓝调| 雷鬼| 世界音乐| 拉丁| 另类/独立| New Age| 古风| 后摇| Bossa Nova|
            </div>
            <div>
              清晨| 夜晚| 学习| 工作| 午休| 下午茶| 地铁| 驾车| 运动| 旅行| 散步| 酒吧|
            </div>
            <div>
              怀旧| 清新| 浪漫| 性感| 伤感| 治愈| 放松| 孤独| 感动| 兴奋| 快乐| 安静| 思念|
            </div>
            <div>
              影视原声| ACG| 儿童| 校园| 游戏| 70后| 80后| 90后| 网络歌曲| KTV| 经典| 翻唱| 吉他| 钢琴| 器乐| 榜单| 00后|
              影视原声| ACG| 儿童| 校园| 游戏| 70后| 80后| 90后| 网络歌曲| KTV| 经典| 翻唱| 吉他| 钢琴| 器乐| 榜单| 00后|
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
        showAlbumTypeContent: false
      }
    },

    methods: {
      changeShowAlbumTypeContent () {
        this.showAlbumTypeContent = !this.showAlbumTypeContent
      },

      chooseAlbumType () {
        this.changeShowAlbumTypeContent()
      }
    }
  }
</script>

<style scoped>

</style>