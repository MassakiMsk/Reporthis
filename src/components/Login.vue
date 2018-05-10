<template>
    <div>
        <b-container fluid>
            <b-row>
                <div class="b-col col md='4'"></div>
                <div class="b-col col md='4'">
                    <h1>ReporThis</h1>
                    <div class="login-form">
                        <form class="center">
                            <i class="fas fa-envelope" style="padding-right: 5px"></i>
                            <label for="" class="">EMAIL</label>
                            <input type="email" v-model='usuario.email' class="btn-block input-form" placeholder="Digite seu email">
                            <i class="fas fa-unlock" style="padding-right: 5px"></i>
                            <label for="" class="">SENHA</label>
                            <input type="password" v-model='usuario.senha' class="btn-block input-form" placeholder="Digite sua senha">
                        </form>
                        <form class="foot">
                            <button type="submit" class=" btn-block  btn-login no-border" @click="entrar()">Entrar</button>
                        </form>
                        <form class="center">
                            <button type="button" class="btn-normal no-border" @click="cadastrar()">CADASTRAR-SE</button>
                            <label class="bold-font margin-">-</label>
                            <button type="submit" class="btn-normal no-border" @click="trocarSenha()">ESQUECI MINHA SENHA</button>
                        </form>
                    </div>
                </div>
                <div class="b-col col md='4'"></div>
            </b-row>
        </b-container>


        <!-- Modal Component -->
        </b-button>
        <b-modal ref="myModalRef" hide-footer title="Cadastro">
            <div class="d-block">
                <i class="fas fa-user " style="padding-right: 5px"></i>
                    <label for="" class="">NOME</label>
                    <input type="text" v-model='usuario.nome' class="btn-block input-form " placeholder="Digite seu nome">
                    <i class="fas fa-envelope" style="padding-right: 5px"></i>
                    <label for="" class="">EMAIL</label>
                    <input type="email" v-model='usuario.email' class="btn-block input-form " placeholder="Digite seu email">
                    <i class="fas fa-unlock" style="padding-right: 5px"></i>
                    <label for="" class="">SENHA</label>
                    <input type="password" v-model='usuario.senha' class="btn-block input-form " placeholder="Digite uma senha ">
                    <i class="fas fa-lock" style="padding-right: 5px"></i>
                    <label for="" class="">CONFIMAR SENHA</label>
                    <input type="password" v-model='usuario.confimarSenha' class="btn-block input-form " placeholder="Confime sua senha">
            </div>
            <button type="button" class="btn-normal no-border" @click="cancelarCadastro()">Cancelar</button>
            <button type="button" class="btn-register btn-normal no-border" @click="salvar()">Registrar</button>
        </b-modal>

    </div>

</template>

<script>
    export default {
    name: "Login",
    data() {
        return {
        titulo: "Cadastro",
        usuario: {
            nome: "",
            email: "",
            senha: "",
            confimarSenha: ""
        }
        };
    },
    methods: {
        entrar() {
        alert("mail: " + this.usuario.email + " - pass: " + this.usuario.senha);
        },
        cadastrar() {
        this.$refs.myModalRef.show()
        },
        cancelarCadastro() {
        this.$refs.myModalRef.hide()
        },
        trocarSenha() {
        alert("trocar senha");
        },
        salvar() {
        alert("Sucesso ao se cadastrar!");
        }
    }
    };
</script>

<style>
    body {
    background-color: #2f3136 !important;
    }

    .login-form {
    background-color: #202225;
    font-family: "Signika";
    color: #b4b5b6;
    font-size: 13px;
    }
    .login-form .center {
    padding-right: 40px;
    padding-left: 40px;
    padding-top: 30px;
    padding-bottom: 30px;
    }
    .login-form .foot {
    padding-right: 90px;
    padding-left: 90px;
    }

    .input-form {
    color: #b4b5b6;
    background-color: #484b51;
    padding: 5px 10px 5px;
    border-radius: 8px;
    border-width: 0px;
    margin-bottom: 10px;
    }

    h1 {
    font-family: "Signika";
    font-weight: bold;
    margin-bottom: 35px;
    margin-top: 100px;
    text-align: center;
    color: #dab272;
    }
    .no-border {
    border-width: 0px;
    }

    .btn-login {
    font-weight: bold;
    font-family: "Signika";
    text-transform: uppercase;
    color: #b4b5b6;
    font-size: 15px;
    border-radius: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #2f3136;
    }
    .btn-login:hover {
    background: #dab272;
    color: #f8f9f6;
    }

    .btn-normal {
    font-weight: bold;
    font-family: "Signika";
    text-transform: uppercase;
    color: #b4b5b6;
    font-size: 13px;
    background: transparent;
    padding: 0px 0px;
    }
    .btn-normal:hover {
    color: #f8f9f6;
    }
    .bold-font {
    font-weight: bold;
    }
    .normal-font {
    font-weight: normal;
    }
    .margin- {
    margin-left: 5px;
    margin-right: 5px;
    }

    ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #7e8084;
    font-family: "Signika";
    }

    :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #7e8084;
    font-family: "Signika";
    }

    ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #7e8084;
    font-family: "Signika";
    }

    :-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #7e8084;
    font-family: "Signika";
    }

    .modal-body {
    background-color: #2f3136;
    height: auto;
    color: #b4b5b6;
    font-size: 13px;
    padding-right: 40px;
    padding-left: 40px;
    padding-bottom: 30px;
    padding-top: 30px;
    }
    .modal-content {
    font-family: "Signika";
    box-shadow: 0 0px 0px;
    border-width: 0px;
    border-style: solid;
    border-color: #2f3136;
    border-radius: 0px;
    margin-top: 120px;
    }
    .modal-header {
    background: #202225;
    border-width: 0px;
    border-style: solid;
    border-color: #202225;
    }

    .modal-footer {
    background-color: #2f3136;
    padding-right: 40px;
    padding-bottom: 30px;
    padding-left: 40px;
    }
    h2 {
    font-family: "Signika";
    font-weight: bold;
    text-align: center;
    color: #f8f9f6;
    }
    .btn-x {
    float: right;
    padding: 0px;
    color: #b4b5b6;
    background: transparent;
    }
    .btn-x:hover {
    color: #f8f9f6;
    }
    .btn-register {
    color: #f8f9f6;
    background: #46c68b;
    padding: 8px 15px;
    margin-left: 10px;
    border-radius: 5px;
    }
    .btn-register:hover {
    background: #3ca374;
    }
</style>