new Vue({
  el: "#app",
  data: {
    a: 0,
    b: 0,
    age: 20
  },
  methods: {

  },
  computed: {
    addToA: function() {
      console.log('addToA');
      return this.a + this.age;
    },
    addToB: function() {
      console.log('addToB');
      return this.b + this.age;
    }
  }
})
