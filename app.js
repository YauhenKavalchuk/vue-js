var one = new Vue({
  el: "#app-one",
  data: {
    title: 'Title one'
  },
  computed: {
    greet: function() {
      return 'Hello from Vue one!'
    }
  },
  methods: {

  }
});

var two = new Vue({
  el: "#app-two",
  data: {
    title: 'Title two'
  },
  computed: {
    greet: function() {
      return 'Hello from Vue two!'
    }
  },
  methods: {
    changeTitleOne: function() {
      one.title = 'Changed from Vue two!'
    }
  }
});

two.title = "Changed from outside!"
