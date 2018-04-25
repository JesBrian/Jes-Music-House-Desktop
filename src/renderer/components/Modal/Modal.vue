<template>
  <div v-if="$store.state.Modal.modalType !== ''" style="width:100%; height:100%; top:0; left:0; padding:58px 3px 48px 230px; position:fixed; box-sizing:border-box; z-index:999;">
    <div style="width:100%; height:100%; position:relative;">
      <component :is="$store.state.Modal.modalType" class="cube-bg box-show" style="top:50%; left:50%; position:absolute; transform:translate(-50%, -50%); z-index:10;">
        <div @click="closeModal" class="super-btn-out" style="width:24px; height:24px; top:-4px; right:-3px; position:absolute;">
          <i class="super-btn-in" style="width:19px; height:19px; top:51%; line-height:19.5px; text-align:center; font-size:23px;">×</i>
        </div>
      </component>
      <div @click="closeModal" style="width:100%; height:100%; top:0; left:0; position:absolute; background:rgba(0,0,0,0.68); z-index:5;"></div>
    </div>
  </div>
</template>

<script>
import NewAlbum from './type/NewAlbum.vue'
import Share from './type/Share.vue'
import Warning from './type/Warning.vue'
import AddAlbum from './type/AddAlbum.vue'

export default {
  name: 'Modal',

  components: {NewAlbum, Share, Warning, AddAlbum},

  methods: {
    closeModal () {
      this.$store.commit('CHANGE_MODAL_TYEP')
    }
  }
}
</script>

<style scoped>

</style>