var app = new Vue({
  el: '#app',
  data: {
    header: 'Match Game',
    clickedBox: [],
    boxGrid: [1,2,3,4,5,6,7,8,9,10,11,12],
    letterList: ['a1', 'b2', 'c3', 'd4', 'e5', 'f6,' ,'g7', 'h8']
  },
  methods: {
    test: function (event) {
      console.log(event.target)
      if(event.target.classList[0] === 'box')
      event.target.classList.add('clicked')
    }
  }
})
