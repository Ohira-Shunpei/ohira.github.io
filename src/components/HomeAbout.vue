<template>
  <section class="home-about">
    <div class="section__title">
      <div class="section__title-text">メッセージ送信</div>
    </div>
    <v-container>
      <v-row class="home-about__contents">
        <v-col md="5" class="home-about__contents-img">
          <img src="../assets/img/family1.png" alt="" class="img-fluid">
        </v-col>
        <v-col md="5" class="home-about__contents-text">
          <p>家族にメッセージを残しましょう</p>
          
        </v-col>
      </v-row>
      <AppButton :button-text="buttonText" :url="url"/>
    </v-container>
  </section>
</template>

<script>
import AppButton from './AppButton.vue'

export default {
    data() {
        return {
            buttonText: 'メッセージを書く',
            url: '/send'
        }
    },
    components: {
        AppButton
    }
}
</script>

<style lang="scss" scoped>
.section__title {
  padding-top: 120px;
  text-align: center;
 
  &-text {
    font-weight: 700;
    font-size: 40px;
    color: #e65f78;
  }
}

.home-about__contents {
  margin-top: 20px;
  justify-content: center;
 
  &-img {
    text-align: center;
  }
 
  &-text {
    word-wrap: break-word;
  }
}
</style>