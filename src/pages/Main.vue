<template>
  <div>
    <div class="container">
      <img class="image__dog" :src="dogURL" alt="dog">
      <div class="btn_bar">
        <button @click="fetchDog()">Следующая</button>
        <button @click="addDog(dogURL)">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script>

import {mapState,mapMutations, mapActions} from 'vuex'
export default {
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
   })


  },
  mounted() {
    this.fetchDog();
  }
}
</script>

<style scoped>

h1,h3{
  text-align: center;

}
.container{
  margin: 15px 5px 5px 5px;
  width: 768px;
  border: 2px solid teal;
  border-radius: 25px;
}
.image__dog{
  padding: 10px;
  width: 100%;
  height: 80vh;
  border-radius: 25px;
}
.btn_bar{
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>
