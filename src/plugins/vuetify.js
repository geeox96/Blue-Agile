import Vue from "vue";
import Vuetify from "vuetify/lib";
import pt from "vuetify/es5/locale/pt";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { pt },
    current: "pt"
  },
  theme: {
    themes: {
      light: {
        text: "#ffffff",
        primary: "#424242",
        secondary: "#757575",
        accent: "#500e80",
        error: "#82264f",
        pretoClaro: "#dcdcdc",
        pretoEscuro: "#4a4a4a",
        botaoClaro: "#b8b8b8"
      }
    }
  }
});
