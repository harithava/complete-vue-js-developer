const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            name: "Doe"
        }
    }
}).mount('#app')


setTimeout(() => {
    vm.firstName = 'Bob';
}, 2000)

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Jane',
//             name: "Doe"
//         }
//     }
// }).mount('#app1')