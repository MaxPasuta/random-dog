<template>
  <div class="navbar">
    <div>
      <img class="navbar__logo" src="https://img2.freepng.ru/20180616/seh/kisspng-dog-logo-snout-veterinarian-canidae-cachorro-5b251ea1368d19.7731991515291593292235.jpg" alt="dog_logo">
    </div>
    <div @click="$router.push('/')" class="title">Случайный пес</div>
    <div class="navbar__btn">
      <button class="btn" style="border-radius: 25px 0 0 25px" @click="$router.push('/')" >Поиск собак</button>
      <button class="btn" style="border-radius: 0 25px 25px 0" @click="$router.push('/save')">Избранное</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.title{
  font-family: 'Roboto',serif;
  font-weight: 400; ;
  cursor: pointer;
  color: azure;
}
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
  background: none;
  margin-right: 15px;
}
.navbar__logo{
  width: 40px;
  margin-right: 10px;
  border-radius: 25px;
}
.btn{
  font-family: 'Roboto';
  font-weight: 400; ;
  margin: 15px 0 15px 0;
  padding: 10px 15px;
  background: none;
  color: azure;
  border: 1px solid azure;
  cursor: pointer;
}
.btn:active{
  background: azure;
  color: teal;
  border: 2px solid azure;
}


@media (max-width: 425px) {

  .title{
    display: none;
  }

  .btn{
    font-size: 12px;
  }
}

</style>