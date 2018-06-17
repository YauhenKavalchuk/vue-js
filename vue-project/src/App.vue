<template>
  <div id="app">
    <Header></Header>
    <List :people="people" @message="displayMessage"/>
  </div>
</template>

<script>
import List from './components/List';
import Header from './components/Header';

export default {
  components: {
    List,
    Header,
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
