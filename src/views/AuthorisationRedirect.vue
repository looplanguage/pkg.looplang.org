<template>
  <div>
    <h1>
      {{Status}}
    </h1>
  </div>
</template>

<script lang="ts">

import {Options ,Vue} from "vue-class-component";

@Options({
  components: {
    AuthorisationRedirect,
  },
  props:{
    github: {
      type: String,
      required: true,
      default: null
    }
  },
  Status: ""

})


export default class AuthorisationRedirect extends Vue{
  github = "";
  Status = "Redirecting...";

  async created(){
    await new Promise(resolve => setTimeout(resolve, 500))
    this.Status = "Authenticating...";
    await new Promise(resolve => setTimeout(resolve, 500))
    if (this.github != ""){
      fetch("https://localhost:5001/login/github/" + this.github)
          .then(res => {
            console.log(res)
          })
    }

    await this.$router.push('/auth')
  }
}
</script>

<style scoped>

</style>