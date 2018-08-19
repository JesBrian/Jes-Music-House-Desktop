<template>
  <div class="glass-bg box-show" style="width:840px; top:42px; left:-100%; position:absolute; z-index:9; line-height:1.68em;">
    <i class="mh-if close" style="top:4px; right:8px; position:absolute; font-size:18px; color:#BBB; cursor:pointer;"></i>
    <div style="width:100%; box-shadow:0 3px 3px -4px #FFF;">
      <div @click="changePlayListStyle" class="super-btn-out" style="width:86px; height:30px; margin:8px 28px 2px;">
        <span class="super-btn-in" style="width:76px; height:22px; top:48.5%; padding-left:1.5px; line-height:22px; letter-spacing:1.2px;">全部风格</span>
      </div>
    </div>
    <div v-for="styleItem in styleList" class="style-list-content">
      <div style="width:12%; margin:0 0 -500px; padding:18px 0 500px;  float:left; border-right:1px solid #444; text-align:center;">
        <i class="mh-if earth" style="margin:0 -3px 0 18px; float:left; font-size:23px;"></i>{{ styleItem.name }}
      </div>
      <div style="width:87%; padding:18px 8px 0 23px; display:inline-block; box-sizing:border-box;">
        <span v-for="styleCellItem in styleItem['cell']" @click="changePlayListStyle" class="play-list-style">{{ styleCellItem.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IndexPlayListStyle',

    data () {
      return {
        styleList: []
      }
    },

    created () {
      this.$http.post('getAllStyle').then((response) => {
        // console.log(response)
        let result = response.data
        if (result.state === '200') {
          this.styleList = result.data
        }
        console.log(this.styleList)
      }).catch((error) => {
        console.log(error)
      })
    },

    methods: {
      changePlayListStyle () {
        // this.changeShowPlayListStyleContent()
      }
    }
  }
</script>

<style scoped>
  .style-list-content {
    overflow:hidden;
  }
  .style-list-content:last-child {
    padding-bottom:15px;
  }


  .play-list-style {
    margin-right:18px;
    display:inline-block;
    position:relative;
    cursor:pointer;
  }
  .play-list-style.active {
    color:#20dbfc; text-shadow:2px 2px 2px #000;
  }
  .play-list-style.active::after {
    content:'';
    width:100%;
    height:88%;
    top:50%;
    left:50%;
    padding:0 6px;
    position:absolute;
    display:block;
    transform:translate(-50%, -50%);
    border:1px solid #000;
    border-radius:3px;
    background-image:linear-gradient(#444444, #373738, #222);
    box-shadow:inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 4px 4px rgba(0, 0, 0, 0.5), inset 0 0 0 1px #272727;
    z-index:-1;
  }
</style>