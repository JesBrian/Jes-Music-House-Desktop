<template>
  <div style="color:#999; padding:13px 0 16px 68px; position:relative;">
    <router-link class="box-show" to="/user" style="width:40px; height:38px; top:16px; left:16px; padding:3px; position:absolute;">
      <img v-lazy="'http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80'" style="width:100%; height:100%;"/>
    </router-link>

    <div style="width:100%;">
      <p style="word-break:break-all; line-height:1.28em; color:#CDD;">
        <router-link to="/user" style="float:left; color:#00d8ff;">JesBrian</router-link>：rdctfvygrdchjrdctfvygubhjrdctfvygrdchjrdctfvygubhj
      </p>

      <p style="margin-top:10px; text-align:right; font-size:13px;">
        <span style="float:left; font-size:15px;">2018-09-30 12:12</span>

        <span style="padding:0 13px; border-right:1px solid #383838;">
          <span @click="changeLike" style="cursor:pointer;"><i class="mh-if add-collection" style="margin-right:3px;"></i>123132</span>
        </span>
        <span style="padding:0 13px; border-right:1px solid #383838;">
          <span @click="showModal('Share')" style="cursor:pointer;">分享</span>
        </span>
        <span style="padding:0 13px;">
          <span @click="replyComment" style="cursor:pointer;">回复</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentCell',

  methods: {
    changeLike () {
      console.log(666)
    },

    showModal (type = '') {
      this.$store.commit('CHANGE_MODAL_TYPE', type)
    },

    replyComment () {
      console.log(888)
    }
  }
}
</script>

<style scoped>

</style>