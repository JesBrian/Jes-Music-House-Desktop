<template>
	<div style="background:#181818;">
    <div style="width:100%; height:38px; margin:0 auto 10px; padding-top:32px; box-shadow:0 3px 8px -3px #00d8ff; text-align:center; border-bottom:1px solid #00d8ff; line-height:27px; font-weight:700;">
      <div @click="changeSearchType('song')" :class="{'active' : searchType === 'song'}" class="super-btn-out">
        <span class="super-btn-in mh-if music-list"> 单曲</span>
      </div>
      <div @click="changeSearchType('album')" :class="{'active' : searchType === 'album'}" class="super-btn-out">
        <span class="super-btn-in mh-if music-albu"> 歌单</span>
      </div>
      <div @click="changeSearchType('singer')" :class="{'active' : searchType === 'singer'}" class="super-btn-out">
        <span class="super-btn-in mh-if singer"> 歌手</span>
      </div>
      <div @click="changeSearchType('user')" :class="{'active' : searchType === 'user'}" class="super-btn-out">
        <span class="super-btn-in mh-if datum"> 用户</span>
      </div>
    </div>
    <div style="width:100%; margin:0 auto; padding-bottom:18px; text-align:right;">
      <span style="margin-right:38px; color:#CCC; font-size:14px;">
        搜索 " <span style="color:#00d8ff; text-decoration:underline;">心碎</span> "，共找到 <span style="color:#00d8ff;">2222</span> 首单曲
      </span>
      <div style="width:100%; margin-top:6px;">
        <ul>
          <li v-for="n in 18" class="box-shadow">
            <div style="height:48px;"></div>
          </li>
        </ul>
      </div>

      <pagination />
    </div>
	</div>
</template>

<script>
import Pagination from '../../components/base/Pagination/Pagination.vue'

export default {
  name: 'Search',

  components: {Pagination},

  data () {
    return {
      searchType: 'song'
    }
  },

  watch: {
    searchType () {
      console.log(this.searchType)
    }
  },

  mounted () {
    console.log(this.$route.params.key)
  },

  methods: {
    changeSearchType (type = 'song') {
      this.searchType = type
    }
  }
}
</script>

<style scoped>
  .super-btn-out {
    width:88px; height:32px; margin:0 18px; display:inline-block;
  }
  .super-btn-out > .super-btn-in {
    width:79px; height:23px; line-height:23.8px;
  }
  .super-btn-out.active > .super-btn-in {
    line-height:23.2px;
  }
</style>