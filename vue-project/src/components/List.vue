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
import { bus } from '../main';

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
      bus.$emit('message', this.message);
      this.message = '';
    }
  }
}
</script>
