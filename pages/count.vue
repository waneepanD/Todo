<template>
  <div>
    <p>Count is {{counter}}</p>
    <button @click="increment">Increase</button>
    <button @click="decrement">decrease</button>
  </div>
</template>

<script>
export default {
  computed:{
    counter() {
      return this.$store.state.count.counter
    }
  },
methods: {
  increment(){
    this.$store.commit('count/increment')
  },
  decrement(){
    this.$store.commit('count/decrement')
  }
},
}
</script>
