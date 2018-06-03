<template>
  <div style="margin-bottom:28px; padding:0 16px 18px; box-sizing:border-box;">
    <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3180475765,1545941947&fm=58&bpow=450&bpoh=600" class="cube-bg box-show" style="width:100%; height:142px; padding:5px;"/>
    <p @click="test" class="text-hidden" style="max-width:100%; float:left; display:inline-block; line-height:1.5em;">Jason Chan</p>
  </div>
</template>

<script>
export default {
  name: 'SingerItem',

  methods: {
    test () {
      console.log(888)
    }
  }
}
</script>

<style scoped>

</style>