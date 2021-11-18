<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn{
  margin: 15px 0 15px 0;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 2px solid teal;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  cursor: pointer;
}
.btn:active{
  background: teal;
  color: beige;
  border: 2px solid teal;
}

</style>