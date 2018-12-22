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
      if(this.total != '') {
        this.notZero = true;
        console.log(this.total);
      } else this.notZero = false;

      var scale = .1;
      var tipScaler = 0;
      for(var i = 0; i < 4; i++) {
        tipScaler = this.total * scale;
        this.tipRange.push(tipScaler);
        scale += .05;
        console.log(this.tipRange);
      }
    }
  }


})
