new Vue({
  el: "#app",
  data: {

  },
  config: {
    keyCodes: {
      f2: 113
    }
  },
  methods: {
    changeName: function() {
      console.log('Name is changed!');
    }
  }
})
