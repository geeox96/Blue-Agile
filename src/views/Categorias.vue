<template>
  <v-container>
    <v-card pa-5 color="pretoEscuro">
      <v-card-title>
        <h2 class="pretoClaro--text">Categorias</h2>
      </v-card-title>
      <v-simple-table
        dark
        class="pretoClaro--text"
        style="background-color: #4a4a4a"
      >
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Categoria</th>
              <th class="text-left">Condição</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in categories" :key="item.id">
              <td class="pretoClaro--text" v-if="item.status === 'active'">
                {{ item.name }}
              </td>
              <td class="grey--text" v-else>
                {{ item.name }}
              </td>

              <td class="pretoClaro--text" v-if="item.status === 'active'">
                Ativo
              </td>
              <td class="grey--text" v-else>Inativo</td>
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
      categories: null
    };
  },

  computed: {
    ...mapGetters(["getCategorias"])
  },

  created() {
    this.$store.dispatch("consultarCategorias").then(() => {
      this.categories = this.getCategorias;
    });
  }
};
</script>
>
