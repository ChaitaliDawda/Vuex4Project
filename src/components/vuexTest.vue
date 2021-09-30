<template>
  <div>Local counter: {{ counter }}</div>
  <button @click="counterIncrement(0)">Local Counter</button>

  <div>Store counter: {{ count }}</div>
  <div>ModuleA counter: {{ aCount }}</div>
  <div>ModuleB counter: {{ bCount }}</div>
  <button @click="counterIncrement(1, 5)">Store Counter</button>

  <div>Store array:</div>
  <ol>
    <li v-for="(ol, index) in todos" :key="ol.id">
      {{ index }} - {{ ol.text }}
      <br />
    </li>
  </ol>

  <br />
  <h2>Getters example</h2>
  <div>{{ doneTodos }}</div>
  <div>{{ doneTodosCount }}</div>

  <br />
  <h2>Getter with arguments</h2>
  <div>{{ getTodoById(2) }}</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { INCREMENT, INCREMENTA, INCREMENTB } from "../stores/mutationTypes";

export default {
  data() {
    return {
      counter: 14,
    };
  },
  methods: {
    counterIncrement(value, item = 0) {
      if (value == 0) {
        return this.counter++;
      } else {
        if (item > 0) {
          this.add(item);
          this.addAction(10);

          this.addModuleA();
          this.addModuleB();
          // this.$store.dispatch('incrementAction',10)

          //this.$store.commit(add, item);
        } else {
          this.add();
          //  this.$store.commit(add);
        }
      }
    },
    getTodoById(id) {
      return this.$store.getters.getTodoById(id);
    },
    ...mapMutations({
      add: INCREMENT,
      addModuleA: "moduleA/" + INCREMENTA,
      addModuleB: INCREMENTB,
    }),
    ...mapActions({
      addAction: "incrementAction",
    }),
  },
  computed: {
    // ...mapState(["count", "todos"]),
    // ...mapState("moduleA/", {
    //   aCount: (state) => state.count,
    // }),

    ...mapState({
      count: "count",
      todos: "todos",
      aCount: (state) => state.moduleA.count,
      bCount: (state) => state.moduleB.count,
    }),
    ...mapGetters(["doneTodos", "doneTodosCount"]),
    doneTodosCount() {
      return this.$store.getters.doneTodosCount;
    },
  },
};
</script>

<style>
</style>