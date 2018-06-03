<template>
  <div id="app">
    <List :people="people"/>
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
      people: ['Max', 'Jack', 'Leo']
    }
  }
}
</script>
