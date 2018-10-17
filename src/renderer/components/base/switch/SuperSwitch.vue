<template>
  <label :class="size">
    <input v-model="switchState" @change="switchChangeEvent" class="box-show" :class="['mui-switch', shape]"
           :data-open="switchOpen" :data-close="switchClose" type="checkbox">
  </label>
</template>

<script>
  export default {
    name: 'SuperSwitch',

    props: {
      size: {
        type: String,
        default: ''
      },
      shape: {
        type: String,
        default: 'square'
      },
      switchState: {
        type: Boolean,
        default: false
      },
      switchOpen: {
        type: String,
        default: '开'
      },
      switchClose: {
        type: String,
        default: '关'
      }
    },

    model: {
      prop: 'switchState', // 父组件 v-model 传的值, props 需有同名
      event: 'switchChange' // 修改父组件的值事件, ps：$emit('事件名', 要修改父组件 v-model 的值)
    },

    data: function () {
      return {}
    },

    computed: {},

    methods: {
      switchChangeEvent: function () {
        this.$emit('switchChange', this.switchState)
      }
    }

  }
</script>

<style scoped>
  input {
    outline: none!important;
    outline-width: 0;
  }
  label {
    display: inline-block;
    position: relative;
  }
  label.large {
    transform: scale(1.2, 1.2);
  }
  label.small {
    transform: scale(0.8, 0.8);
  }
  .mui-switch {
    width: 58px;
    height: 28px;
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid #111;
    background-image: linear-gradient(#444444, #373738);
    box-shadow:inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
    background-clip: content-box;
    -webkit-appearance: none;
    user-select: none;
    outline: none;
    transition: border cubic-bezier(0, 0, 0, 1) 0.4s, box-shadow cubic-bezier(0, 0, 0, 1) 0.4s;
  }
  .mui-switch.circle {
    border-radius: 20px;
  }
  .mui-switch.square {
    border-radius: 4px;
  }
  .mui-switch::before {
    content: '';
    width: 22px;
    height: 22px;
    top: 2px;
    left: 3px;
    position: absolute;
    background: #686868;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    transition: left 0.28s;
    z-index: 9;
  }
  .mui-switch.circle::before {
    border-radius: 50%;
  }
  .mui-switch.square::before {
    border-radius: 3px;
  }
  .mui-switch::after {
    content: attr(data-close);
    width: 32px;
    height: 26px;
    top: 0;
    right: 0;
    text-align: center;
    position: absolute;
    word-break: break-all;
    line-height: 26px;
    overflow: hidden;
  }
  .mui-switch:checked::after {
    content: attr(data-open);
    left: 0;
  }
  .mui-switch:checked {
    box-shadow:#39E1FC 0 0 0 16px inset;
    transition: box-shadow ease 0.4s;
  }
  .mui-switch:checked::before {
    left:32px;
  }

</style>
