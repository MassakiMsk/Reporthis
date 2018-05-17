<template>
    <div>
        <b-container fluid>
          <b-row style="height: 50px">
            <b-col md="2" class = "um">Menu</b-col>
            <b-col md="1"></b-col>
            <b-col md="6" class = "um">barra</b-col>
            <b-col md="1" class = "um">botao</b-col>
          </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  name: "Menu2",
  data() {
    return {};
  },
  methods: {
  }
};
</script>

<style>
  .um{
    border: solid;
    border-width: 3px;
    border-color: red;
  }
</style>
