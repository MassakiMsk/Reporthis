<template>
    <div>
        <div class="">
            <div class="navbar navbar-default">
                <!-- Brand and toggle get grouped for better mobile display -->
                <!-- Collect the nav links, forms, and other content for toggling -->
                    <b-container fluid>
                        <b-row>
                            <b-col md='2' class="navbar-header">
                                <i class="fas fa-bars"></i>
                                <a class="navbar-brand" href="#">ReporThis</a>
                            </b-col>
                            <b-col md='8'>
                                <input type="text" class="btn-block input-search" placeholder="Pesquisar">
                            </b-col>
                            <b-col md='2'>
                                <button class="btn-block btn-search" type="submit"><i class="fas fa-search"></i></button>
                            </b-col>
                        </b-row>
                    </b-container>
                    <!-- /.navbar-collapse -->
                <!-- /.container-fluid -->
            </div>
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
                <a href="#">Inicio</a>
                <a href="#"></a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
                <span class= "btn-block"style="font-size:30px;cursor:pointer" @click="openNav()">&#9776; open</span>
            </div>
            
        </div>
    </div>

</template>

<script>
export default {
  name: "Menu",
  data() {
    return {};
  },
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "40px";
    }
  }
};
</script>

<style>
body {
  background: #36393e;
}

.navbar-default {
  background: #202225;
  border-radius: 0px;
  border-width: 0px;
  font-family: "Signika";
  margin-bottom: 0px;
}
.navbar-toggle {
  border-radius: 0px;
  border-width: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 2px;
  padding-left: 0px;
}
.navbar-default .navbar-toggle:focus,
.navbar-default .navbar-toggle {
  background: transparent;
  color: #b4b5b6;
}
.navbar-default .navbar-toggle:hover {
  background: transparent;
  color: #f8f9f6;
}
.navbar-default .navbar-brand {
  color: #dab272;
  font-weight: bolder;
  margin-right: 2px;
}
.navbar-default .navbar-brand:focus,
.navbar-default .navbar-brand:hover {
  color: #dab272;
}

.input-search {
  color: #b4b5b6;
  background-color: #484b51;
  padding: 5px 10px 5px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  border-width: 0px;
  font-size: 15px;
  margin-bottom: 8px;
  margin-top: 8px;
}
.col-xs-10 {
  padding-left: 2px;
  padding-right: 2px;
}
.col-xs-2 {
  padding-right: 2px;
  padding-left: 2px;
}
.btn-search {
  color: #b4b5b6;
  border-width: 0px;
  background-color: #484b51;
  padding: 5px 10px 5px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-width: 0px;
  font-size: 15px;
  margin-bottom: 8px;
  margin-top: 8px;
}
.btn-search:hover {
  color: #f8f9f6;
  background: #dab272;
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
.navbar-collapse {
  padding-left: 0px;
  padding-right: 0px;
  margin: 0px 0px 0px 0px;
}
.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-width: 0px;
  border-style: solid;
  box-shadow: 0px 0px 0px 0px;
}

body {
  font-family: "Signika";
}

.sidenav {
  height: 100vh;
  width: 40px;
  position: relative;
  z-index: 0;
  left: 0;
  background-color: #2f3136;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  font-size: 15px;
  color: #b4b5b6;
  display: block;
  transition: 0.3s;
  text-transform: uppercase;
  font-weight: bold;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
