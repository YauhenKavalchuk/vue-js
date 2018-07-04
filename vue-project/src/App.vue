<template>
  <div id="app">
    <AddBlog></AddBlog>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog';

export default {
  components: {
    AddBlog
  },
  data() {
    return {
    }
  },
  methods: {
    displayMessage: function(message) {
      this.people.push(message)
    }
  }
}
</script>
