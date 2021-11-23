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
    AuthorisationRedirect

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

  async created() : Promise<void>{
    this.Status = "Authenticating...";
    if (this.github != "") {
      await fetch("https://localhost:5001/login/github/" + this.github)
          .then(res => {
            if (res.status == 200){
              res.json()
              .then(data => {
                console.log(data)
                //TODO Store the JWTToken in a Cookie
                this.$router.push('/')

              }).catch(err => console.log(err))
              return;
              }
            }).catch(err => console.log(err))
          }
    await this.$router.push('/auth')
  }
}
</script>

<style scoped>

</style>