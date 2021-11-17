<template>
  <h1>Мои сохраненные собачки</h1>
    <div class="dog" v-for="dogURL in $store.state.dog.dogList">
      <img class="dog__image" :src="dogURL" alt="dog">
      <button class="btn__delete">Удалить</button>
      <button class="btn__download">Скачать</button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1{
  text-align: center;
  margin-bottom: 10px;
}

.dog{
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  border: 2px solid teal;
  border-radius: 25px;
  width: 100%;
  margin-bottom: 15px;

}
.dog__image{
  margin-bottom: 20px;
  width: 100%;
  border-radius: 25px;
}
.btn__delete{
  margin-bottom: 5px;


}
</style>