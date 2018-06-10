<template>
  <div id="app">
    <List :people="people" @message="displayMessage"/>
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
  },
  methods: {
    displayMessage: function(message) {
      this.people.push(message)
    }
  }
}
</script>
