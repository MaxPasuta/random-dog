<template>
  <div v-if="$store.state.dog.dogList.length>0" class="container">
    <dogList></dogList>
  </div>
  <div v-else>
    <h1>Нет сохраненных собачек 😢</h1>
    <div class="empty__array"></div>
  </div>
  <my-footer></my-footer>
</template>

<script>

import dogList from "@/components/dogList";
import MyFooter from "@/components/MyFooter";
export default {

  components: {
      dogList, MyFooter
    }
}

</script>

<style scoped>

h1{
  text-align: center;
  font-family: 'Roboto';
  font-weight: 300; ;
  color: black;
}
.container{
  margin: 20px;
  width: 767px;
}

.empty__array{
  background-color: beige;
  height: 85vh;

}

@media (max-width: 768px) {
  .container{
    margin: 20px;
    width: 424px;
  }
}

@media (max-width: 425px) {
  .container{
    margin: 20px;
    width: 320px;
  }
}
</style>
