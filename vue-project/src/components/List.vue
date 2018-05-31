<template>
  <div>
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
  data() {
    return {
      people: ['Max', 'Jack', 'Leo']
    }
  }
}
</script>

<style scoped>
  h2 {
    color: green;
  }
</style>
