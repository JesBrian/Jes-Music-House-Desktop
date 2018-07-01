<template>
  <div>

    <div style="width:100%; margin:18px auto 0; text-align:center;">
      <div @click="changeType('singer')" :class="{'active' : type === 'singer'}" class="super-btn-out">
        <span class="super-btn-in mh-if singer"> 歌手</span>
      </div>
      <div @click="changeType('user')" :class="{'active' : type === 'user'}" class="super-btn-out">
        <span class="super-btn-in mh-if datum"> 用户</span>
      </div>
    </div>

    <div style="width:100%; height:48px; box-shadow:0 3px 8px -3px #00d8ff; border-bottom:1px solid #00d8ff;">
      <label class="super-btn-out active" style="width:268px; height:32px; margin-top:12px; float:right; position:relative; border:none; border-radius:16px;">
        <input type="text" class="super-btn-in" placeholder="搜索" style="width:258px; height:76%; top:50%; padding:0 12px; box-sizing:border-box; border-radius:12px; text-align:left; font-size:17px;"/>
        <i class="mh-if search" style="top:8px; right:14px; position:absolute;"></i>
      </label>
    </div>

    <div style="margin:0;">
      <component :is="`${type}Group`" />
      <pagination />
    </div>

  </div>
</template>

<script>
  import SingerGroup from '../../components/extends/search/singer/SingerGroup.vue'
  import UserGroup from '../../components/extends/search/user/UserGroup.vue'
  import Pagination from '../../components/base/pagination/Pagination.vue'

  import { changePage } from '../../assets/js/commom.js'

  export default {
    name: 'FollowPage',

    components: {
      UserGroup, SingerGroup, Pagination
    },

    data () {
      return {
        type: 'singer'
      }
    },

    watch: {
      $route () {
        if (this.type !== this.$route.params['type']) {
          this.type = this.$route.params['type']
        }
      }
    },

    methods: {
      changeType (type = 'user') {
        this.type = type
        changePage(`/follow/${type}`, this)
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