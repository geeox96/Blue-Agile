<template>
  <v-snackbar
    v-model="$store.state.snackbar.ativo"
    right
    :timeout="3000"
    :color="$store.state.snackbar.cor"
    >{{ $store.state.snackbar.texto }}</v-snackbar
  >
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {
    "$store.state.snackbar.ativo"() {
      this.fecharSnackbar();
    }
  },
  methods: {
    fecharSnackbar() {
      setTimeout(() => {
        this.$store.dispatch("actionFecharAlerta");
      }, 3000);
    }
  }
};
</script>
