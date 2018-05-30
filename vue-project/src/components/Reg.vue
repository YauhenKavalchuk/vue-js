<template>
  <form method="post">
    <h2>Registration form</h2>
    <p>
      <label for="name">Your name:</label>
      <input type="text" id="name" value="">
    </p>
    <p>
      <label for="password">Your password:</label>
      <input type="text" id="password" value="">
    </p>
    <p>
      <label for="mail">Your email:</label>
      <input type="text" id="mail" value="">
    </p>
    <button type="button" name="button">Register</button>
  </form>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style>

</style>
