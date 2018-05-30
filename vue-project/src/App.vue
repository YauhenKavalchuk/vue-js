<template>
  <div id="app">
    <Slot>
      <h2 slot="title">{{slotTitle}}</h2>
      <p slot="text">Test text for slot component</p>
    </Slot>
  </div>
</template>

<script>
import Slot from './components/Slot'

export default {
  components: {
    Slot
  },
  data() {
    return {
      slotTitle: 'Test title for slot component'
    }
  }
}
</script>

<style>

</style>
