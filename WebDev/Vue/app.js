// const VueApp = {
//     data() {
//       return {
//         name: '╾━╤デ╦︻ 0onE ︻デ┳═ー',
//         code: 'Delta-7529'
//       }
//     }
//   }
  
// Vue.createApp(VueApp).mount('#vue-app')


new Vue({
  el: '#vue-app'
  , data: {
      name: 'Zero1 ╾━╤デ╦︻',
      code: 'Delta-7529'
  }
  , methods: {
      status: function(access){
        return 'Agent ' + this.code + ' ' + access;
      }
  } 
});
