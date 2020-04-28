<template>
  <div v-if="!$store.state.logado" class="login">
    <v-layout justify-center align-center>
      <v-card
        class="mx-auto"
        style="background-color: #121212"
        width="600"
        height="500"
        elevation="0"
      >
        <v-card
          style="background-color: #121212"
          class="mx-auto mt-5"
          width="500"
          height="400"
          raised
          elevation="0"
        >
          <v-card-title class="justify-center">
            <h1 class="display-2 pretoClaro--text font-weight-bold">
              Zepplin
            </h1>
          </v-card-title>
          <v-list-item three-line>
            <v-list-item-content>
              <v-form ref="formLogin">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      placeholder="email@dominio.com.br"
                      :rules="[regras.req]"
                      dark
                      append-outer-icon="mdi-account"
                      color="pretoClaro"
                      v-model="login.email"
                      label="E-mail"
                      clearable
                      @change="bloquearLogar"
                    ></v-text-field> </v-col
                ></v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      placeholder="*******"
                      :rules="[regras.req, regras.pwmin]"
                      dark
                      append-outer-icon="mdi-lock"
                      color="pretoClaro"
                      type="password"
                      v-model="login.senha"
                      label="Senha"
                      clearable
                      @change="bloquearLogar"
                    ></v-text-field> </v-col
                ></v-row>
              </v-form>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn
              class="elevation0"
              :loading="loadingEntrar"
              :disabled="blockLogar"
              @click="logar"
              block
              color="botaoClaro"
              >Entrar</v-btn
            >
          </v-card-actions>
          <v-card-actions class="my-n4">
            <v-btn
              class="body-2 font-weight-light pretoClaro--text mx-auto"
              dark
              text
              @click="criarAlerta('função em desenvolvimento', 'red')"
            >
              esqueci minha senha
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn
              class="title font-weight-light pretoClaro--text my-8 mx-auto"
              dark
              text
              @click="criarAlerta('função em desenvolvimento', 'red')"
            >
              logar com QR Code
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    login: {
      email: "",
      senha: ""
    },
    regras: {
      req: texto => !!texto || "Campo obrigatório",
      pwmin: pass => (pass && pass.length >= 6) || "mínimo 6 caracteres"
    },
    blockLogar: true,
    loadingEntrar: false
  }),

  methods: {
    bloquearLogar() {
      this.$refs.formLogin.validate()
        ? (this.blockLogar = false)
        : (this.blockLogar = true);
    },

    async logar() {
      this.loadingEntrar = true;
      await this.$store.dispatch("actionLogar", this.login).then(resp => {
        console.log("resposta login", resp);
        this.loadingEntrar = false;
      });
    },

    criarAlerta(texto, cor) {
      const dados = {
        texto: texto,
        cor: cor
      };
      this.$store.dispatch("actionChamarAlerta", dados);
    }
  }
};
</script>

<style>
.login {
  display: flex;
  height: 100%;
  background-color: rgb(38, 38, 46) !important;
}
</style>
