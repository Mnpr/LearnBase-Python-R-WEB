var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        hideTodo = () => {
            this.show = false
        }
    }

  })

