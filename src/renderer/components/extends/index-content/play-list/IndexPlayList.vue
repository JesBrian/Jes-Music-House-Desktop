<template>
  <div>

    <div style="margin-bottom:28px; padding:0 68px; box-sizing:border-box;">
      <span style="float:left; font-size:28px; font-weight:700;">全部</span>
      <div style="width:128px; height:36px; margin:-6px 28px 0; position:relative; display:inline-block;">
        <div @click="changeShowPlayListCategoryContent" class="super-btn-out" style="width:100%; height:100%;">
          <span class="super-btn-in" style="width:118px; height:25px; top:48%; line-height:27px;">选择分类 <i class="mh-if double-arrow-down"></i></span>
        </div>

        <index-play-list-style v-if="showPlayListCategoryContent" />

      </div>
    </div>

    <div>
      <album-group />
    </div>
  </div>
</template>

<script>
  import IndexPlayListStyle from '../../style/IndexPlayListStyle.vue'
  import AlbumGroup from '../../album/AlbumGroup.vue'

  export default {
    name: 'IndexPlayList',

    components: {
      IndexPlayListStyle,
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
      }
    }
  }
</script>

<style scoped>
</style>