<template>
  <h1>Мои сохраненные собачки</h1>
  <transition-group name="dog-list">
    <div class="dog" v-for="dogURL in dogList" :key="$store.state.dog.dogList.id">
      <img class="dog__image" :src="dogURL.URL" alt="dog">
      <my-button @click="delDog(dogURL.id)" class="btn__delete">Удалить</my-button>
    </div>
  </transition-group>
</template>

<script>
import {mapMutations, mapState} from "vuex";
import MyButton from "@/components/UI/MyButton";

export default {
  components: {MyButton},
  methods: {
    ...mapMutations({
      delDog: 'dog/delDog'
    }),
  },
  computed: {
    ...mapState({
      dogURL: state => state.dog.dogURL,
      dogList: state => state.dog.dogList,
    })
  }

}
</script>

<style scoped>
h1{
  text-align: center;
  margin-bottom: 10px;
  font-family: 'Roboto';
  font-weight: 300; ;
  color: black;
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
  width: 100%;
  border-radius: 25px 25px 0 0;
}
.btn__delete{
  margin: 0 0 5px 0;
  border-radius: 0 0 25px 25px;
}


.dog-list-item {
  display: inline-block;
  margin-right: 10px;
}
.dog-list-enter-active,
.dog-list-leave-active {
  transition: all 0.4s ease;
}
.dog-list-enter-from,
.dog-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
</style>