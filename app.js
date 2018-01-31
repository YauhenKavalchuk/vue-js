new Vue({
  el: "#app",
  data: {
    counter: 0
  },
  methods: {
    substract: function(e) {
      e.stopPropagation();
      this.counter--;
    }
  }
})
