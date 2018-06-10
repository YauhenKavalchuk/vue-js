<template>
  <div>
    <input type="text" v-model="message" @keyup.enter="saveMessage">
    <h2>Inner title</h2>
    <ul>
      <li v-for="person in people">
        {{person}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    people: {
      type: Array,
      required: false,
      default: [],
    }
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    saveMessage: function() {
      //console.log(this.message)
      this.$emit('message', this.message);
    }
  }
}
</script>
