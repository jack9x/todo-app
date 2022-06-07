<template>
  <div>
    <h1>ToDo App</h1>
    <p :class="{ 'success-alert': success }" v-if="success">{{ success }}</p>
    <form
      @submit.prevent="!oldTodo ? addTodo() : updateTodo(oldTodo)"
      :class="{ 'disabled-here': error }"
    >
      <label>New ToDo </label>
      <input v-model="newTodo" />
      <button>{{ !oldTodo ? "Add ToDo" : "Update ToDo" }}</button>
    </form>
    <h2>ToDo List</h2>
    <ul>
      <li
        v-for="(todo, index) in todos"
        :key="index"
        :class="{ 'mark-done-progress': todo.done }"
      >
        <input
          type="checkbox"
          :id="`todo-${todo.id}`"
          :value="todo.id"
          v-model="todoDones"
          @change="checkDone($event, todo)"
        />
        <span :class="{ 'done-progress': todo.done }">{{ todo.content }}</span>
        <button
          @click="editTodo(todo)"
          class="todo-btn item-todo-done"
          v-if="!todo.done"
        >
          Edit
        </button>
        <button @click="deleteTodo(todo.id)" class="todo-btn item-todo-remove">
          Remove
        </button>
      </li>
    </ul>
    <h4 v-if="todos.length === 0">Empty list.</h4>
    <p :class="{ 'error-msg': error }" v-if="error">{{ error.message }}</p>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "TodoView",
  setup() {
    const store = useStore();
    store.dispatch("fetchAllTodos");
    const todos = computed(() => store.state.todos); // tinh toan lai gia tri khi su dung vuex (state thay doi khi dispatch fetchAllTodos)
    const error = computed(() => store.state.error);
    const success = computed(() => store.state.success);
    const oldTodo = computed(() => store.state.oldTodo);
    const newTodo = ref("");
    const todoDones = ref(
      computed(() => {
        const data = store.state.todos.filter((item) => item.done === true); // get all todos with done is true
        return data ? data.map((i) => i.id) : []; // if data has value then only get array with value is ID
      })
    );

    const addTodo = () => {
      if (newTodo.value) {
        store.dispatch("addNewTodo", newTodo.value);
      }
      newTodo.value = "";
    };

    const editTodo = (todo) => {
      newTodo.value = todo.content;
      if (newTodo.value) {
        store.dispatch("editTodo", todo);
      }
    };
    const updateTodo = (todo) => {
      const dataReq = {
        todo: todo,
        content: newTodo.value,
      };
      store.dispatch("updateTodo", dataReq);
      newTodo.value = "";
    };
    const deleteTodo = (id) => {
      if (confirm("Are you sure remove this todo?")) {
        store.dispatch("removeTodo", id);
      }
    };

    const checkDone = (e, todo) => {
      // const arrayFilters = todoDones.value.filter(
      //   (item) => parseInt(item) === parseInt(e.target.value)
      // ); // return array with value == value
      // console.log(arrayFilters, todo);
      todo.done = e.target.checked ? true : false;
      store.dispatch("doneTodo", todo);
    };
    return {
      oldTodo,
      newTodo,
      todoDones,
      todos,
      error,
      success,
      addTodo,
      editTodo,
      updateTodo,
      deleteTodo,
      checkDone,
    };
  },
};
</script>
