<template>
  <div class="footer">
    <div class="footer_content">© 2017-2021</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
  display: flex;
  align-items: center;
  height: 40px;
  width:100%;
  background: teal;
}

.footer_content {
  margin: 0 auto;
  color: snow;

  font-family: 'Roboto';
  font-weight: 300;
}

@media (max-width: 425px) {

  .footer_content{
    font-size: 12px;
  }
}
</style>