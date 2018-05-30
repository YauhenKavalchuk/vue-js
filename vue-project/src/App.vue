<template>
  <div id="app">
    <button type="button" @click="component='Reg'">Reg</button>
    <button type="button" @click="component='Aut'">Aut</button>
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>
  </div>
</template>

<script>
import List from './components/List';
import Aut from './components/Aut';
import Reg from './components/Reg';

export default {
  components: {
    List,
    Aut,
    Reg
  },
  data() {
    return {
      title: 'My application',
      people: ['Max', 'Jack', 'Leo'],
      component: 'Aut'
    }
  }
}
</script>

<style>
  form {
    border: 1px solid #000;
    display: inline-block;
    padding: 20px;
  }
  label {
    display: block;
  }
</style>
