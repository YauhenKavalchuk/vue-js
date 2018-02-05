new Vue({
  el: "#app-one",
  data: {
    title: 'Title'
  },
  computed: {

  },
  methods: {
    changeTitle: function() {
      //this.title = this.$refs.input.value;
      console.log(this.$refs);
    }
  }
});
