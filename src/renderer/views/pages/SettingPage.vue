<template>
	<div style="width:100%; height:100%; padding:0 3%; box-sizing:border-box; background:#181818;">
    <div style="width:100%; height:53px; margin:0 auto 28px; padding:0 38px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:68px; text-shadow:1px 1px 0.5px #000;">
      <span style="font-size:23px; font-weight:700; color:#CCC;">编辑个人信息</span>
    </div>

    <!-- 基本信息 -->
    <div style="width:62%; display:inline-block;">

      <div style="width:88%; margin:0 auto;">
        <div style="width:12%; padding-bottom:18px; float:left; text-align:center;">昵称</div>
        <div style="width:88%; display:inline-block;">
          <input v-model="username" type="text" class="cube-bg box-show" style="width:100%; padding:8px; background:#383838; font-size:15px;"/>
        </div>
        <div style="width:12%; padding-bottom:18px; float:left; text-align:center;">性别</div>
        <div style="width:88%; display:inline-block;">
          <input v-model="sex" type="text" name="name" class="cube-bg box-show" style="width:100%; padding:8px; background:#383838; font-size:15px;"/>
        </div>
        <div style="width:12%; padding-bottom:18px; float:left; text-align:center;">生日</div>
        <div style="width:88%; display:inline-block;">
          <input v-model="birth" type="text" name="name" class="cube-bg box-show" style="width:100%; padding:8px; background:#383838; font-size:15px;"/>
        </div>
        <div style="width:12%; padding-bottom:18px; float:left; text-align:center;">地区</div>
        <div style="width:88%; display:inline-block;">
          <input v-model="address" type="text" name="name" class="cube-bg box-show" style="width:100%; padding:8px; background:#383838; font-size:15px;"/>
        </div>
        <div style="width:12%; padding-bottom:18px; float:left; text-align:center;">邮箱</div>
        <div style="width:88%; display:inline-block;">
          <input v-model="mail" type="text" name="name" class="cube-bg box-show" style="width:100%; padding:8px; background:#383838; font-size:15px;"/>
        </div>
        <div style="width:12%; padding-bottom:18px; float:left; text-align:center;">介绍</div>
        <div style="width:88%; display:inline-block;">
          <textarea v-model="description" class="cube-bg box-show" style="width:100%; height:108px; padding:8px; background:#383838; font-size:15px; resize:none;"></textarea>
        </div>
      </div>

      <!-- 保存按钮区域 -->
      <div style="margin-top:28px; text-align:center;">
        <div @click="updateUserInfo" class="super-btn-out" style="width:108px; height:32px; margin:0 18px;">
          <span class="super-btn-in mh-if makesure" style="width:98px; height:22px; line-height:23px;"> 确认保存</span>
        </div>
        <div class="super-btn-out" style="width:108px; height:32px; margin:0 18px;">
          <span class="super-btn-in mh-if cancel" style="width:98px; height:22px; line-height:23px;"> 取消返回</span>
        </div>
      </div>
    </div>

    <!-- 修改头像 -->
    <div style="width:38%; float:right; text-align:center;">
      <img @click="toggleShow" :src="imgDataUrl" class="glass-bg box-show" style="width:138px; height:138px; margin:0 auto; padding:5px; display:block;"/>
      <div @click="toggleShow" class="super-btn-out" style="width:128px; height:32px; margin-top:12px;">
        <span class="super-btn-in mh-if datum" style="width:118px; height:22px; line-height:22px;">&nbsp;&nbsp;修改头像</span>
      </div>
    </div>

    <upload-img v-if="show" v-model="show" field="img" @crop-success="cropSuccess" @crop-upload-success="cropUploadSuccess" @crop-upload-fail="cropUploadFail" :width="300" :height="300" url="/upload" :params="params" :headers="headers" img-format="png"></upload-img>
	</div>
</template>

<script>
  import UploadImg from '../../components/extends/uploadImg/UploadImg.vue'

  export default {
    name: 'SettingPage',

    components: {
      UploadImg
    },

    data () {
      return {
        username: '',
        sex: '',
        birth: '',
        address: '',
        mail: '',
        description: '',

        show: false,
        params: {
          token: '123456798',
          name: 'avatar'
        },
        headers: {
          smail: '*_~'
        },
        imgDataUrl: 'http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80'
      }
    },

    beforeCreate () {
      if (this.$store.state.User.id === '0') {
        this.$router.push('/')
      }
    },

    beforeMount () {
      console.log(this.$store.state.User.id)

      this.$http.post('getUserBaseInfo', {
        id: this.$store.state.User.id
      }).then((response) => {
        if (response.data.state === '200') {
          let userInfo = response.data.data
          this.username = this.$store.state.User.username
          this.sex = userInfo.sex
          this.birth = userInfo.birth
          this.address = userInfo.address
          this.mail = userInfo.mail
          this.description = userInfo.description
        }
      }).catch((error) => {
        console.error(error)
      })
    },

    methods: {
      toggleShow () {
        this.show = !this.show
      },
      /**
       * crop success
       * [param] imgDataUrl
       * [param] field
       */
      cropSuccess (imgDataUrl, field) {
        console.log('-------- crop success --------')
        this.imgDataUrl = imgDataUrl
      },
      /**
       * upload success
       * [param] jsonData   服务器返回数据，已进行json转码
       * [param] field
       */
      cropUploadSuccess (jsonData, field) {
        console.log('-------- upload success --------')
        console.log(jsonData)
        console.log('field: ' + field)
      },
      /**
       * upload fail
       * [param] status    server api return error status, like 500
       * [param] field
       */
      cropUploadFail (status, field) {
        console.log('-------- upload fail --------')
        console.log(status)
        console.log('field: ' + field)
      },

      updateUserInfo () {
        if (this.username === '') {
          return false
        }

        this.$http.post('updateUserBaseInfo', {
          userId: this.$store.state.User.id,
          username: this.username,
          sex: this.sex,
          birth: this.birth,
          address: this.address,
          description: this.description,
          mail: this.mail
        }).then((response) => {
          console.log(response)
        }).catch((error) => {
          console.error(error)
        })
      }
    }
  }
</script>

<style scoped>
  input, textarea {
    border-radius:4px;
    border:2px solid #111;
    color:#888; letter-spacing:1px;
  }
  input:focus, textarea:focus {
    border-color: #2abae6;
    box-shadow:inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 0 10px -1px #00d8ff, 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
    color:#CCC;
  }
</style>