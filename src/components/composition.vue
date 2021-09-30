<template>
  <div>{{count}}</div>
  <button @click="increment(10)">Mutation Counter</button>
  <button @click="incrementAction(20)">Action Counter</button>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { INCREMENT } from "../stores/mutationTypes";

export default {
  setup() {
    const store = useStore();

    return {
      // access a state in computed function
      count: computed(() => store.state.count),

      // access a getter in computed function
      double: computed(() => store.getters.double),

       increment: (value) => store.commit(INCREMENT,value),

      // access an action
      incrementAction: (value) => store.dispatch('incrementAction',value)
    };
  },
};
</script>

<style>
</style>