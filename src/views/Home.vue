<!-- ページの記述 -->
<template>
  <section class="home">
    <!-- <Flash/> -->
    <HomeAbout/>
  </section>
</template>

<script>
import HomeAbout from '../components/HomeAbout.vue'
// import Flash from '../components/Flash.vue'

export default {
  components: {
    HomeAbout,
    // Flash
  },
  mounted: {
   // Vueインスタンスに変化があったら発動する
    updated() {

      // setTimeoutで30ms後にshowをfalseにする
      // setTimeout(() => {
      //    this.$store.commit('setMessage', {
      //     status: false,
      //     messasge: ''
      //   })}
      //   ,30
      // )
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
}
</style>