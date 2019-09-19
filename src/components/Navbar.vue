<template>
      <div class="container-my mx-auto">
        <div class="row d-flex justify-content-between align-items-center p-3">
          
          <router-link to="/">
            <img class="logo grow" src="../assets/img/logo.svg">
          </router-link>
          
        </div>
      </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  props: {
      showDownloadButton: null,
      showRedeemButton: null,
      showGoBackButton: null,
    },
});
</script>