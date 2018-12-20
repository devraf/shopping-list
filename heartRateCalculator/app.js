var app = new Vue({
  el: '#app',
  data: {
    header: 'Target Heart Rate Calculator',
    age: '',
    currentRestingHeartRate: '',
    heartRateScale: [],
    currentHeartMaximumRate: '',
    currentHeartRateReserve: ''
  },
  methods: {
    heartRateScaleFiftyToEightyFive: function() {
      console.log('change made');
      this.heartRateScale = [];
      var scaleIncrease = .5;
      var heartRatePercentage = 0;
      for (var i = 0; i < 8; i++) {
        heartRatePercentage = (scaleIncrease * this.currentHeartRateReserve) + this.currentRestingHeartRate;
        scaleIncrease += .05;
        this.heartRateScale.push(heartRatePercentage.toFixed());
      };
    }
  },
  computed: {
    maximumHeartRateCalculation: function() {
      if (this.age === '') {
        this.currentHeartMaximumRate = '';
      } else this.currentHeartMaximumRate = 220 - this.age;
      this.currentHeartRateReserve = this.currentHeartMaximumRate - this.currentRestingHeartRate;
      return this.currentHeartMaximumRate;
    }
  }
})
