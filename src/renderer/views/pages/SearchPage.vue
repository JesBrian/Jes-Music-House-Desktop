<template>
	<div style="position:relative;">
    <span style="top:-3px; right:28px; position:absolute; color:#CCC; font-size:14px;">
      搜索 " <span style="color:#00d8ff; text-decoration:underline;">{{ $route.params.key }}</span> "，共找到 <span style="color:#00d8ff;">2222</span> 首单曲
    </span>
    <div style="width:100%; height:38px; margin:28px auto 0; padding-top:32px; box-shadow:0 3px 8px -3px #00d8ff; text-align:center; border-bottom:1px solid #00d8ff; line-height:27px; font-weight:700;">
      <div @click="changeSearchType('song')" :class="{'active' : searchType === 'song'}" class="super-btn-out">
        <span class="super-btn-in mh-if music-list"> 单曲</span>
      </div>
      <div @click="changeSearchType('playList')" :class="{'active' : searchType === 'playList'}" class="super-btn-out">
        <span class="super-btn-in mh-if music-albu"> 歌单</span>
      </div>
      <div @click="changeSearchType('singer')" :class="{'active' : searchType === 'singer'}" class="super-btn-out">
        <span class="super-btn-in mh-if singer"> 歌手</span>
      </div>
      <div @click="changeSearchType('user')" :class="{'active' : searchType === 'user'}" class="super-btn-out">
        <span class="super-btn-in mh-if datum"> 用户</span>
      </div>
    </div>

    <div style="width:100%; margin:0 auto; padding:2px 0 18px; text-align:left;">
      <component :is="`${searchType}Group`" />
      <pagination />
    </div>
	</div>
</template>

<script>
  import Pagination from '../../components/base/pagination/Pagination.vue'
  import SingerGroup from '../../components/extends/search/singer/SingerGroup.vue'
  import PlayListGroup from '../../components/extends/search/play-list/PlayListGroup.vue'
  import UserGroup from '../../components/extends/search/user/UserGroup.vue'
  import SongGroup from '../../components/extends/song/SongGroup.vue'

  import { changePage } from '../../assets/js/commom.js'

  export default {
    name: 'SearchPage',

    components: {
      SongGroup, UserGroup, PlayListGroup, SingerGroup, Pagination
    },

    data () {
      return {
        searchType: 'song'
      }
    },

    watch: {
      $route () {
        if (this.searchType !== this.$route.params['type']) {
          this.searchType = this.$route.params['type']
        }
        this.$http.post('searchInfo', {
          key: this.$route.params['key'],
          type: this.searchType
        }).then((response) => {
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })
      }
    },

    mounted () {
      this.$http.post('searchInfo', {
        key: this.$route.params['key'],
        type: 'song'
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    },

    methods: {
      changeSearchType (type = 'song') {
        this.searchType = type
        changePage(`/search/${this.$route.params['key']}/${type}`, this)
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