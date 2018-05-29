<template>
  <div>

    <div style="width:100%; height:38px; margin:0 auto; padding-top:18px; box-shadow:0 3px 8px -3px #00d8ff; text-align:center; border-bottom:1px solid #00d8ff; line-height:27px; font-weight:700;">
      <div @click="changeType('singer')" :class="{'active' : type === 'singer'}" class="super-btn-out">
        <span class="super-btn-in mh-if singer"> 歌手</span>
      </div>
      <div @click="changeType('user')" :class="{'active' : type === 'user'}" class="super-btn-out">
        <span class="super-btn-in mh-if datum"> 用户</span>
      </div>
    </div>

    <div>
      <ul>
        <li>
          <div></div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CollectionPage',

  data () {
    return {
      type: 'singer'
    }
  },

  methods: {
    changeType (type = 'user') {
      this.type = type
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