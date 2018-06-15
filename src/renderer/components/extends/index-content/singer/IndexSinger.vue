<template>
  <div>
    <div style="width:92%; margin:-16px auto 28px; padding:0 0 10px 15px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; overflow:visible;">
      <div style="width:100%; line-height:1.68em; font-size:14px;">
        <div>
          <span>{{ languageArr.name }}：</span>
          <span v-for="item in languageArr.data" class="search-type-item">
            <span :class="language === item.value ? 'active': ''" @click="changeSearchType('language', item.value)" class="search-type-item-content">{{ item.name }}</span>
          </span>
        </div>
        <div>
          <span>{{ categoryArr.name }}：</span>
          <span v-for="item in categoryArr.data" class="search-type-item">
            <span :class="category === item.value ? 'active': ''" @click="changeSearchType('category', item.value)" class="search-type-item-content">{{ item.name }}</span>
          </span>
        </div>
        <div>
          <span>{{ filterArr.name }}：</span>
          <span v-for="item in filterArr.data" class="search-type-item">
            <span :class="filter === item.value ? 'active': ''" @click="changeSearchType('filter', item.value)" class="search-type-item-content">{{ item.name }}</span>
          </span>
        </div>
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
    },

    data () {
      return {
        language: 'all',
        category: 'all',
        filter: 'hot',

        languageArr: {
          name: '语种',
          data: [
            { name: '全部', value: 'all' }, { name: '华语', value: 'chinese' }, { name: '欧美', value: 'west' }, { name: '日本', value: 'japan' }, { name: 'korea', value: 'korea' }, { name: '其他', value: 'value' }
          ]
        },

        categoryArr: {
          name: '分类',
          data: [
            { name: '全部', value: 'all' }, { name: '男歌手', value: 'male' }, { name: '女歌手', value: 'female' }, { name: '乐队', value: 'band' }
          ]
        },

        filterArr: {
          name: '筛选',
          data: [
            {name: '热门', value: 'hot'}, {name: 'A', value: 'A'}, {name: 'B', value: 'B'}, {name: 'C', value: 'C'}, {name: 'D', value: 'D'}, {name: 'E', value: 'E'}, {name: 'F', value: 'F'}, {name: 'G', value: 'G'}, {name: 'H', value: 'H'}, {name: 'I', value: 'I'}, {name: 'J', value: 'J'}, {name: 'K', value: 'K'}, {name: 'L', value: 'L'}, {name: 'M', value: 'M'}, {name: 'N', value: 'N'}, {name: 'O', value: 'O'}, {name: 'P', value: 'P'}, {name: 'Q', value: 'Q'}, {name: 'R', value: 'R'}, {name: 'S', value: 'S'}, {name: 'T', value: 'T'}, {name: 'U', value: 'U'}, {name: 'V', value: 'V'}, {name: 'W', value: 'W'}, {name: 'X', value: 'X'}, {name: 'Y', value: 'Y'}, {name: 'Z', value: 'Z'}
          ]
        }
      }
    },

    methods: {
      changeSearchType (type, value) {
        this[type] = value
      }
    }
  }
</script>

<style scoped>
  .search-type-item {
    border-right:1px solid #444; box-sizing:border-box;
  }
  .search-type-item-content {
    margin:4px 8px; padding:0 6px; display:inline-block; color:#AAA; text-shadow:2px 2px 2px #000; cursor:pointer;
  }
  .search-type-item-content:hover {
    color:#DDD;
  }
  .search-type-item-content.active {
    color: #20dbfc;
    border-radius: 3px;
    border:1px solid #111;
    background-image: linear-gradient(#444444, #373738, #222);
    box-shadow:inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 2px 3px 6px rgba(0, 0, 0, 0.5), -1px 3px 6px rgba(0, 0, 0, 0.5), inset 0 0 0 1px #272727;
  }
</style>