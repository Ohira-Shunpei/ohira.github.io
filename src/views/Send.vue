<template>
  <v-container fluid fill-height class="about">

    <v-row>
    <AppBackgroundHolder :head="head"/>
    </v-row>
      <v-row>
        <v-combobox
          v-model='select'
          item-text='name'
          item-value="id"
          :items="adress"
          label="宛先"
          
          >
        </v-combobox>
      </v-row>
   
      <v-row>
        <v-text-field
          v-model.number="time"
          label="何分後"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          v-model="title"
          label="タイトル"
        ></v-text-field>
      </v-row>

      <v-row>
          <v-container fluid>
            <v-textarea
              v-model='body'
              counter
              label="メッセージ"
              height="300"
              :value="value"
            ></v-textarea>
          </v-container>
      </v-row>
   
      <v-row>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text v-on:click="setPeople">送信する</v-btn>
        <!-- <span v-if="suceess">送信成功</span> -->
      </v-card-actions> 
      <!-- /送信ボタン -->
      </v-row>

      <v-row>
        {{message}}
      </v-row>
  </v-container>
</template>


<script>
import AppBackgroundHolder from '../components/AppBackgroundHolder.vue'
import axios from '@/api/index'
import { mapState } from 'vuex'


export default {
  data () {
    return {
      head: 'メッセージ送信',
      // rules: [v => v.length <= 25 || 'Max 25 characters'],
      value: 'Hello',
      item_minutes: [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5'
      ],
      date: '2018-03-02',
      adress: [],
      select: [],
      to: [],
      body: [],
      time: [],
      title: [],
      message: {},
      user: ''
    }
  },
  components: {
    AppBackgroundHolder,
  },
  computed: {
    ...mapState(['user_token']),
  },
  mounted() {
    axios()
      .get('/users',{
        headers: {
           'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
          },
      },
      console.log(this.user_token)
      )
      .then(response => (this.adress = response.data , console.log(response)))
  },
  methods: {
      setPeople(){
      this.message.to = this.select.name
      this.adress.forEach(person => {
      if (person.email == localStorage.getItem("uid")) {
        this.message.from = person.name
      }
    });
      this.message.title = this.title
      this.message.body = this.body
      this.message.time = this.time
      console.log(this.message)
      axios().post('/messages', this.message, {
        headers: {
           'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
          },
      }
      )
      this.$store.commit('setMessage', {
          status: true,
          message: 'メッセージを送信しました'
        })
      
      this.$router.push({name: 'Home'})
      return this.message
    },
  },
}
</script>