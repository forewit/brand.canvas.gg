const ComponentB = {
    template: `
    <button>ComponentB</button>`
}

const ComponentA = {
    components: {
        'component-b': ComponentB
    },
    data() {
        return {
            count: 0
        }
    },
    props: ['name'],
    template: `
    <button class="test" @click="count++">
      {{ name }}{{ count }}
    </button>
    <component-b></component-b>`
}



// Create a Vue application
const app = Vue.createApp({
    components: {
        'component-a': ComponentA
    }
}).mount('#app')