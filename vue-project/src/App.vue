<template>
  <div id="app">
    <h2>Outer title</h2>
    <List/>
  </div>
</template>

<script>
import List from './components/List'

export default {
  components: {
    List
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  h2 {
    color: red;
  }
</style>
