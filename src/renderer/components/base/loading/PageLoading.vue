<template>
  <!-- 加载等待loading组件 -->
  <div class="loader">
    <div class="loading-1"></div>
    <div class="loading-2">{{ label }}</div>
  </div>
</template>

<script>
  export default {
    name: 'PageLoading',

    props: {
      label: {
        type: [String, Number],
        default: 'Loading ...'
      }
    }
  }
</script>

<style scoped>
  .loader {
    width: 208px; top:48%; left:50%; position:absolute; transform:translate(-50%,-50%);
  }

  .loader .loading-1 {
    width:100%; height:10px; position:relative;
    border:1px solid #2893ff; border-radius:10px;
    animation:turn 4s linear 1.75s infinite;
  }

  .loader .loading-1:before {
    content:""; width:0; height:100%; position:absolute; display:block;
    border-radius:10px; background:linear-gradient(to right, #64E0FF, #2893ff); box-shadow:3px 0 10px 0 #69d2e7;
    animation:load 2s linear infinite;
  }

  .loader .loading-2 {
    width:100%; top:10px; margin-top:8px; position:absolute;
    color:#2dbeff; font-size:22px; text-align:center;
    animation: bounce 2s linear infinite;
  }

  @keyframes load {
    0% { width:0; }
    87.5%, 100% { width:100%; }
  }

  @keyframes turn {
    0% { transform:rotateY(0deg); }
    6.25%, 50% { transform:rotateY(180deg); }
    56.25%, 100% { transform:rotateY(360deg); }
  }

  @keyframes bounce {
    0%, 100% { top:10px; }
    12.5% { top:30px; }
  }
</style>
