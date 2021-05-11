<template>
    <v-card fluid>
       <v-card-title>
           {{message.from}}
       </v-card-title>
       <v-card-title>
           送信時間：10分前
       </v-card-title>
       <v-card-title>
           タイトル : {{message.title}}
       </v-card-title>
       内容
       <v-card-text flat>
            {{message.body}}
       </v-card-text>
    </v-card>
</template>

<script>

export default {
    data() {
    return {
        message: {}
    }
    },
    mounted() {
        this.message = this.$route.params.content
        console.log(this.$route.params.content)
    }
}
</script>