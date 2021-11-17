<template>
  <div class="navbar">
    <div>Случайный пес</div>
    <div class="navbar__btn">
      <button class="btn_search" @click="$router.push('/')" >Поиск собак</button>
      <button @click="$router.push('/save')">Сохраенные собаки</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar{
  height: 50px;
  background-color:teal;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btn{
  margin-left: auto;
}
.btn_search{
  margin-right: 10px;
}
</style>