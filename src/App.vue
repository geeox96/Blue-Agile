<template>
  <v-app style="background-color: #121212">
    <snack-bar />
    <v-app-bar app color="pressato elevation-0" dark>
      <div class="d-flex align-center"></div>
      <v-btn @click="navegar('Categorias')" color="pretoClaro" text
        >Categorias</v-btn
      >
      <v-btn @click="navegar('Produtos')" color="pretoClaro" text
        >Produtos</v-btn
      >
    </v-app-bar>
    <v-content><router-view /></v-content>
  </v-app>
</template>

<script>
import SnackBar from "@/components/snackbar";
export default {
  components: {
    SnackBar
  },

  data: () => ({}),

  methods: {
    navegar(local) {
      this.$router.push({ name: local }).catch(err => console.warn(err));
    }
  }
};
</script>
