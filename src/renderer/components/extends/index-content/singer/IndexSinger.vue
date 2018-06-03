<template>
  <div>
    <div style="width:92%; margin:-16px auto 28px; padding:0 0 10px 18px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF;">
      <div style="width:100%; line-height:2.38em; font-size:14px;">
        <p>
          <span>语种:</span>
          <span style="border-right:1px solid #444;">
            <span class="" style="margin:0 8px 0 6px; padding:4px 6px 3px 6px; box-sizing:border-box; color:#AAA; text-shadow:2px 2px 2px #000;">全部</span>
          </span>
          <span style="border-right:1px solid #444;">
            <span class="cube-bg box-show" style="margin:0 8px 0 6px; padding:4px 6px 3px 6px; box-sizing:border-box; color:#20DBFC; text-shadow:2px 2px 2px #000;">华语</span>
          </span>
          <span style="border-right:1px solid #444;">
            <span class="" style="margin:0 8px 0 6px; padding:4px 6px 3px 6px; box-sizing:border-box; color:#AAA; text-shadow:2px 2px 2px #000;">欧美</span>
          </span>
          <span style="border-right:1px solid #444;">
            <span class="" style="margin:0 8px 0 6px; padding:4px 6px 3px 6px; box-sizing:border-box; color:#AAA; text-shadow:2px 2px 2px #000;">日本</span>
          </span>
          <span style="border-right:1px solid #444;">
            <span class="" style="margin:0 8px 0 6px; padding:4px 6px 3px 6px; box-sizing:border-box; color:#AAA; text-shadow:2px 2px 2px #000;">韩国</span>
          </span>
          <span style="border-right:1px solid #444;">
            <span class="" style="margin:0 8px 0 6px; padding:4px 6px 3px 6px; box-sizing:border-box; color:#AAA; text-shadow:2px 2px 2px #000;">其他</span>
          </span>
        </p>
        <p>
          <span>分类:</span>
          <span style="border-right:1px solid #444;">
            <span class="cube-bg box-show" style="margin:0 8px 0 6px; padding:4px 6px 3px 6px; box-sizing:border-box; color:#20DBFC; text-shadow:2px 2px 2px #000;">全部</span>
          </span>
          <span style="border-right:1px solid #444;">
            <span class="" style="margin:0 8px 0 6px; padding:4px 6px 3px 6px; box-sizing:border-box; color:#AAA; text-shadow:2px 2px 2px #000;">男歌手</span>
          </span>
          <span style="border-right:1px solid #444;">
            <span class="" style="margin:0 8px 0 6px; padding:4px 6px 3px 6px; box-sizing:border-box; color:#AAA; text-shadow:2px 2px 2px #000;">女歌手</span>
          </span>
          <span style="border-right:1px solid #444;">
            <span class="" style="margin:0 8px 0 6px; padding:4px 6px 3px 6px; box-sizing:border-box; color:#AAA; text-shadow:2px 2px 2px #000;">乐队组合</span>
          </span>
        </p>
        <p>
          <span>筛选:</span>
          <span style="border-right:1px solid #444;">
            <span class="cube-bg box-show" style="margin:0 8px 0 6px; padding:4px 6px 3px 6px; box-sizing:border-box; color:#00d8ff; text-shadow:2px 2px 2px #000;">热门</span>
          </span>
          <span v-for="n in 20" style="border-right:1px solid #444;">
            <span class="" style="margin:0 8px 0 6px; padding:4px 6px 3px 6px; box-sizing:border-box; color:#AAA; text-shadow:2px 2px 2px #000;">{{ String.fromCharCode(64 + n) }}</span>
          </span>
          <span style="margin-left:38px;">
            <span v-for="n in 6" style="border-right:1px solid #444;">
              <span class="" style="margin:0 8px 0 6px; padding:4px 6px 3px 6px; box-sizing:border-box; color:#AAA; text-shadow:2px 2px 2px #000;">{{ String.fromCharCode(84 + n) }}</span>
            </span>
          </span>
        </p>
      </div>
    </div>

    <div style="width:92%; margin:0 auto; text-align:center;">
      <singer-group />
    </div>
  </div>
</template>

<script>
import SingerGroup from '../../singer/SingerGroup.vue'

export default {
  name: 'IndexSinger',

  components: {
    SingerGroup
  }
}
</script>

<style scoped>

</style>