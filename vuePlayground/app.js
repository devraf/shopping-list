var app = new Vue({
  el: '#app',
  data: {
    name: 'Raf',
    age: 28,
    image: 'http://clker.com/cliparts/3/m/v/Y/E/V/small-red-apple-md.png',
    value: '',
    currentHeartMaximumRate: '',
    currentHeartRateReserve: ''
  },
  methods: {
    random: function () {
      return Math.random();
    },
    alert: function () {
      return alert("Hello");
    },
    updateKeyValue: function (event) {
      this.value = event.target.value;
      return this.value
    }
  }
})
