<template>
  <div v-if="$store.state.dog.dogList.length>0" class="container">
    <dogList></dogList>
  </div>
  <h1 v-else>Нет сохраненных собачек 😢</h1>
</template>

<script>

import dogList from "@/components/dogList";
export default {

  components: {
      dogList
    }
}

</script>

<style scoped>

h1{
  text-align: center;
}
.container{
  margin: 20px;
  width: 768px;

}

</style>
