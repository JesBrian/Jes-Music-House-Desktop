<template>
  <div id="page" class="ban-select" style="width:100%; margin:0 auto; padding:38px 0; position:relative; clear:both; text-align:center;">
    <!-- 数据有分页的情况 -->
    <ul id="menu" class="cube-bg box-show" v-show="allPage !== 0">
      <li class="no-select prev" @click="goto(current - 1)"><a class="glass-bg mh-if double-arrow-left" :class="{ban: (current === 1)}"></a></li>
      <li class="no-select" v-for="n in showPage" @click="goto(n)" :key="n">
        <a class="glass-bg" :class="{'active':current === n}">{{ n }}</a>
      </li>
      <li class="no-select next" @click="goto(current + 1)"><a class="glass-bg mh-if double-arrow-right" :class="{ban: (allPage === current)}"></a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',

    props: {
      showItem: {
        type: Number,
        default: 7
      },
      allPage: {
        type: Number,
        default: 12
      }
    },

    data () {
      return {
        current: 1
      }
    },

    computed: {
      showPage () {
        let pages = []
        if (this.current < this.showItem) { // 如果当前的激活的项 小于要显示的条数
          // 总页数和要显示的条数那个大就显示多少条
          let i = Math.min(this.showItem, this.allPage)
          while (i) {
            pages.unshift(i--)
          }
        } else { // 当前页数大于显示页数了
          let middle = this.current - Math.floor(this.showItem / 2) // 从哪里开始
          let i = this.showItem
          if (middle > (this.allPage - this.showItem)) {
            middle = (this.allPage - this.showItem) + 1
          }
          while (i--) {
            pages.push(middle++)
          }
        }
        return pages
      }
    },

    methods: {
      goto: function (index) {
        // 如果 [ 要跳转的页数为当前页数 / 跳转页数 < 1 / 跳转页数 > 总页数 ] 都直接返回
        if (index === this.current || index < 1 || index > this.allPage) return false
        // 否则进行跳转 / 数据更新
        else this.current = index
        this.$emit('changePage', this.current)
      }
    }
  }
</script>

<style scoped>
  #menu {
    padding: 0 38px;
    display: inline-block;
    height: 68px;
    border-radius: 5px;
  }

  #menu >>> li {
    margin: 0 5px;
    display: inline-block;
    position: relative;
    bottom: -9px;
    text-align: center;
    cursor:pointer;
  }

  #menu .prev, #menu .next {
    top: 13px;
  }

  #menu >>> li a {
    width: 42px;
    display: block;
    border-radius: 3px;
    position: relative;
    text-decoration: none;
    height: 27px;
    color: #DDD;
    font-size: 13px;
    line-height: 28px;
    transition: all 0.3s ease;
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 4px 4px rgba(0, 0, 0, 0.5), 0 4px 4px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
  }

  #menu >>> li a.mh-if {
    width: 40px;
    height: 38px;
    font-size: 20px;
    line-height: 38px;
    color: #84AAFF;
  }

  #menu >>> li a.mh-if:hover {
    color: #2dbeff;
  }

  #menu >>> li a:hover {
    background: #080808;
    color: lightgreen;
  }

  #menu >>> li a:active, #menu >>> li a.active {
    background: #000;
    bottom: -1px;
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), inset 0 0 0 1px #272727, 0 2px #111, 0 4px 2px rgba(0, 0, 0, 0.3);
  }

  #menu >>> li a.active {
    color: #2EE7FF;
    text-shadow: 0 0 5px #2ee7ff;
    cursor: not-allowed;
  }

  #menu >>> li a.ban {
    bottom: 0;
    color: #333 !important;
    cursor: not-allowed !important;
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 4px 4px rgba(0, 0, 0, 0.5), 0 4px 4px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
  }
</style>
