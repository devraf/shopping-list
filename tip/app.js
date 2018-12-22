var app = new Vue({
  el: '#app',
  data: {
    header: 'Tipper',
    total: '',
    notZero: false,
    tipRange: []
  },
  watch: {
    total: function () {
      //show/hide $ sign
      if(this.total != '') {
        this.notZero = true;
        console.log(this.total);
      } else this.notZero = false;

      //scale tip amount by percent
      this.tipRange = [];
      var scale = .1;
      var tipScaler = 0;
      for(var i = 0; i < 4; i++) {
        tipScaler = (this.total * scale.toFixed(2));
        this.tipRange.push(tipScaler.toFixed(2));
        scale += .05;
      };
      //Update the tip section
    }
  }


})
