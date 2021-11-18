<template>
    <div v-if="!isDogLoading" class="container">
      <img class="image__dog" :src="dogURL" alt="dog">
      <div class="btn_bar">
        <my-button class="btn" style=" border-radius: 0 0 0 25px;" @click="fetchDog()">Следующий</my-button>
        <my-button class="btn" style="border-radius: 0 0 25px 0;" @click="addDog(dogURL)">Добавить в избранное</my-button>
      </div>
    </div>
  <div v-else class="loading">
    <div class=" loading__title animate__animated animate__bounce animate__infinite	infinite">Загрузка</div>
  </div>
  <my-footer></my-footer>
</template>

<script>

import {mapState,mapMutations, mapActions} from 'vuex'
import MyFooter from "@/components/MyFooter";
import MyButton from "@/components/UI/MyButton";
export default {
  components: {MyButton, MyFooter},
  data(){
    return {

    }
  },
  methods: {
    ...mapMutations({
      addDog: 'dog/addDog'
    }),
    ...mapActions({
      fetchDog: 'dog/fetchDog'
    }),

  },
  computed: {
   ...mapState({
     dogURL: state => state.dog.dogURL,
     dogList: state => state.dog.dogList,
     isDogLoading: state => state.dog.isDogLoading,
   })


  },
  mounted() {
    this.fetchDog();
  }
}
</script>

<style scoped>

.container{
  margin: 15px 5px 15px 5px;
  width: 767px;
  border: 2px solid teal;
  border-radius: 25px;

}
.image__dog{
  padding: 10px 10px 0 10px ;
  width: 100%;
  height: 80vh;
  border-radius: 25px 25px 0 0;
}
.btn_bar{
  padding: 0 10px 10px 10px;
}

.btn{
  width: 50%;
  margin: 0;
}
.loading {
  height: 85vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 15px;
}

.loading__title{
  font-family: 'Roboto',sans-serif;
  font-weight: 400;
  color: black;
  font-size: 38px;
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
  .btn{
    font-size: 10px;
  }
}

</style>
