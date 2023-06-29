Vue.createApp({
    data() {
        return {
            firstName: 'John',
            name: "Doe"
        }
    }
}).mount('#app')
Vue.createApp({
    data() {
        return {
            firstName: 'Jane',
            name: "Doe"
        }
    }
}).mount('#app1')