<template>
  <div>
    <h1>
      Authorisation
    </h1>
    <button @click="GithubOnClick">
      Github
    </button>
  </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";

@Options({
  components: {
    Authorisation,
  },
  methods: {
    GithubOnClick(){
      let clientid = process.env.VUE_APP_GITHUBCLIENTID;

      if (clientid == null){
          throw new Error("client id is null or undefined")
      }
      window.location.href ="https://github.com/login/oauth/authorize?client_id=" + clientid
    }
  }

})

export default class Authorisation extends Vue{
}
</script>

<style scoped>

</style>