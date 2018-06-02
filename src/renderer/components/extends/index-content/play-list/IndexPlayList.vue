<template>
  <div>

    <div style="height:48px; margin-bottom:28px; padding:0 68px; box-sizing:border-box;">
      <span style="float:left; font-size:28px; font-weight:700;">全部</span>
      <div style="width:128px; height:36px; margin:-6px 28px 0; position:relative; display:inline-block;">
        <div @click="changeShowAlbumTypeContent" class="super-btn-out" style="width:100%; height:100%;">
          <span class="super-btn-in" style="width:118px; height:27px; line-height:27px;">选择分类 <i class="mh-if double-arrow-down"></i></span>
        </div>

        <div v-if="showAlbumTypeContent" class="glass-bg box-show" style="width:688px; top:42px; left:-100%; position:absolute; z-index:9; line-height:1em;">
          <i @click="changeShowAlbumTypeContent" style="top:3px; right:4px; position:absolute; font-size:25px; color:#BBB; cursor:pointer;">×</i>
          <div style="width:100%; box-shadow:0 3px 3px -4px #FFF;">
            <div @click="chooseAlbumType" class="super-btn-out" style="width:86px; height:30px; margin:10px 28px;">
              <span class="super-btn-in" style="width:76px; height:22px; top:48.5%; padding-left:1.5px; line-height:22px; letter-spacing:1.2px;">全部风格</span>
            </div>
          </div>
          <div style="width:128px; height:288px; display:inline-block; background:lightskyblue;"></div>
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