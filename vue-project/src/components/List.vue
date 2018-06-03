<template>
  <div>
    <h2 @click="show">Inner title</h2>
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

    }
  },
  methods: {
    show: function() {
      console.log(this.people);
    }
  }
}
</script>
