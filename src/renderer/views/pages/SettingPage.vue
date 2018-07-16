<template>
	<div style="width:100%; height:100%; padding:0 3%; box-sizing:border-box; background:#181818;">
    <div style="width:100%; height:53px; margin:0 auto 28px; padding:0 38px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:68px; text-shadow:1px 1px 0.5px #000;">
      <span style="font-size:23px; font-weight:700; color:#CCC;">编辑个人信息</span>
    </div>

    <!-- 基本信息 -->
    <div style="width:62%; display:inline-block;">

      <table style="width:88%; margin:0 auto;">
        <tr>
          <td style="padding-bottom:18px; text-align:center;">昵称</td>
          <td>
            <input v-model="nickname" type="text" class="cube-bg box-show" style="width:100%; padding:8px; background:#383838; font-size:15px;"/>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom:18px; text-align:center;">介绍</td>
          <td>
            <textarea v-model="description" class="cube-bg box-show" style="width:100%; height:128px; padding:8px; background:#383838; font-size:15px;"></textarea>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom:18px; text-align:center;">性别</td>
          <td>
            <input v-model="sex" type="text" name="name" class="cube-bg box-show" style="width:100%; padding:8px; background:#383838; font-size:15px;"/>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom:18px; text-align:center;">生日</td>
          <td>
            <input v-model="birth" type="text" name="name" class="cube-bg box-show" style="width:100%; padding:8px; background:#383838; font-size:15px;"/>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom:18px; text-align:center;">地区</td>
          <td>
            <input v-model="area" type="text" name="name" class="cube-bg box-show" style="width:100%; padding:8px; background:#383838; font-size:15px;"/>
          </td>
        </tr>
      </table>

      <!-- 保存按钮区域 -->
      <div style="margin-top:28px; text-align:center;">
        <div class="super-btn-out" style="width:108px; height:32px; margin:0 18px;">
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
        nickname: '',
        description: '',
        sex: '',
        birth: '',
        area: '',

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
      }
    }
  }
</script>

<style scoped>

</style>