<template>
  <v-container>
    <v-card pa-5 color="pretoEscuro">
      <v-card-title>
        <h2 class="pretoClaro--text">Produtos</h2>
        <v-spacer />
        <v-btn v-if="getLogado" color="blue" class="pretoClaro--text"
          ><v-icon>mdi-plus</v-icon></v-btn
        >
      </v-card-title>
      <v-simple-table
        dark
        class="pretoClaro--text"
        style="background-color: #4a4a4a"
      >
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nome</th>
              <th class="text-left">Categoria</th>
              <th v-if="getLogado" class="text-right">Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in produtos" :key="item.id">
              <td class="pretoClaro--text">
                {{ item.name }}
              </td>

              <td class="pretoClaro--text">
                {{ item.category.name }}
              </td>
              <td v-if="getLogado" class="pretoClaro--text">
                <v-icon @click="editarProduto(item)"
                  >mdi-file-edit-outline</v-icon
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      produtos: null
    };
  },

  computed: {
    ...mapGetters(["getProdutos", "getLogado"])
  },

  created() {
    this.$store.dispatch("consultarProdutos").then(() => {
      this.produtos = this.getProdutos;
    });
  }
};
</script>
>
