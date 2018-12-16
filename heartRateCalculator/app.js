new Vue({
  el: '#app',
  data: {
    header: 'Heart Rate Calculator',
    newItem: '',
    qty: '',
    items: []
  },
  methods: {
    saveItem: function () {
      if(this.newItem === ''){
        console.log('input field empty')
      } else
      this.items.push(this.newItem);
      this.newItem  = '';
    }
  }
})
