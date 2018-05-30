<template>
  <div id="app">
    <h1>{{title}}</h1>
    <List></List>
  </div>
</template>

<script>
import List from './components/List';

export default {
  components: {
    List
  },
  data() {
    return {
      title: 'My application'
    }
  }
}
</script>

<style>

</style>
