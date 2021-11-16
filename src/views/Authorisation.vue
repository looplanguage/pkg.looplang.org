<template>
  <div>
    <h1>
      Authorisation
    </h1>
    {{test}}
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
      window.location.href ="https://github.com/login/oauth/authorize?client_id=" + "4752c94a8fec0fe202a6"// TODO change clientID to environment variable
    }
  }

})

export default class Authorisation extends Vue{
}
</script>

<style scoped>

</style>