var app = new Vue({
  el: '#app',
  data: {
    header: 'Quicker Tipper',
    total: '',
    notZero: false,
    tipRange: [],
    totalPlusTip: []
  },
  watch: {
    total: function () {
      //show/hide $ sign
      if(this.total != '') {
        this.notZero = true;
      } else this.notZero = false;

      //scale tip amount by percent
      this.tipRange = [];
      this.totalPlusTip = [];

      var scale = .1;
      var tipScaler = 0;
      var tipAndTotal = 0;

      for(var i = 0; i < 4; i++) {
        //Update tip amount and add to tipRange array
        tipScaler = (this.total * scale.toFixed(2));
        this.tipRange.push(tipScaler.toFixed(2));

        //Update total plus tip and add to totalPlusTip array
        tipAndTotal = Number.parseFloat(this.tipRange[i]) + Number.parseFloat(this.total)
        this.totalPlusTip.push(tipAndTotal.toFixed(2));

        scale += .05;
      };
      //Update the tip section
    }
  }


})
