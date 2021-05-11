<template>
    <v-container>
          
        <v-list>
            <v-list-item
                v-for="(message, index) in messages"
                :key="index"
            >
                <v-row>
                    <v-col sm=11>
                        <v-list-item  @click='showMessage(message)'>
                            {{ message.from }}さんからメッセージが届いています
                        </v-list-item>
                    </v-col>
                    <v-col sm=1>    
                        <v-btn @click="deleteMessage(message)" icon>
                             <v-icon>
                                mdi-delete
                            </v-icon>   
                        </v-btn>
                    </v-col>
                </v-row>
            </v-list-item>
        </v-list>
    </v-container>    
</template>

<script>
import axios from '@/api/index'

  export default {
    data: () => ({
      search:'',
      messages: {},
      recieved: {},
    }),

    mounted() {
    axios()
      .get('/searches',
       {
        headers: {
           'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
          },
       }
      )
      .then(response => (
          console.log(response.data),
          this.messages = response.data
          ))
        
    },
  
 
    methods: {
        deleteMessage(message) {
            axios().delete(`/messages/${message.id}`,
            {
                headers: {
                'access-token': localStorage.getItem('access-token'),
                uid: localStorage.getItem('uid'),
                client: localStorage.getItem('client'),
                },
            }
            )
        },
        showMessage(message) {
            this.$router.push({name: 'Message', params: {content: message}})
        }
    },
  }
</script>