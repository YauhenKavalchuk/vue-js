<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
import { bus } from '../main';

export default {
  data() {
    return {
      title: 'Header title',
    }
  },
  created() {
    bus.$on('message', data => {
      this.title = data;
    })
  }
}
</script>

<style scoped>
  header {
    border-bottom: 1px solid #000;
    margin-bottom: 10px;
  }
</style>
