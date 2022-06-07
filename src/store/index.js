import { createStore } from "vuex";
const axios = require("axios");
export default createStore({
  state: {
    oldTodo: null,
    todos: [],
    error: null,
    success: null,
  },
  getters: {},
  mutations: {
    SET_TODOS(state, todosPayload) {
      state.todos = todosPayload;
    },
    ADD_TODO(state, newTodoPayload) {
      state.todos.push(newTodoPayload);
      // success alert
      state.success = "Todo added successfully!!!";
    },
    DELETE_TODO(state, idToRemove) {
      const res = state.todos.filter((item) => item.id !== idToRemove);
      state.todos = res;
      // success alert
      state.success = "Todo removed successfully!!!";
    },
    DONE_TODO(state, todoPayload) {
      const res = [
        ...state.todos.filter((item) => item.id !== todoPayload.id),
        { ...todoPayload },
      ]; // result return todoPayload in end.
      // Sort min -> max by id
      state.todos = res.sort((a, b) => a.id - b.id);
      console.log(state.todos);
      // success alert
      state.success = "Todo marked is done successfully!!!";
    },
    EDIT_TODO(state, todoPayload) {
      state.oldTodo = todoPayload;
    },
    UPDATE_TODO(state, todoPayload) {
      const res = [
        ...state.todos.filter((item) => item.id !== todoPayload.id),
        { ...todoPayload },
      ]; // result return todoPayload in end.
      // Sort min -> max by id
      state.todos = res.sort((a, b) => a.id - b.id);
      console.log(state.todos);
      // reset all change
      state.oldTodo = null;
      // success alert
      state.success = "Todo updated successfully!!!";
    },
    SET_ERROR(state, errorPayload) {
      state.error = errorPayload;
    },
  },
  actions: {
    async fetchAllTodos({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/todos");
        commit("SET_TODOS", response.data);
      } catch (err) {
        commit("SET_ERROR", err);
        console.log(err);
      }
    },

    async addNewTodo({ commit }, newTodo) {
      try {
        const dataRequest = {
          done: false,
          content: newTodo,
        };
        const response = await axios.post(
          "http://localhost:3000/todos",
          dataRequest
        );
        commit("ADD_TODO", response.data); // response.data : object with value is {done:false, content: newTodo}
      } catch (err) {
        commit("SET_ERROR", err);
        console.log(err);
      }
    },

    async editTodo({ commit }, todo) {
      try {
        commit("EDIT_TODO", todo);
      } catch (err) {
        commit("SET_ERROR", err);
        console.log(err);
      }
    },

    async updateTodo({ commit }, req) {
      try {
        const oldTodo = req.todo;
        const response = await axios.put(
          "http://localhost:3000/todos/" + oldTodo.id,
          {
            done: oldTodo.done,
            content: req.content,
          }
        );
        commit("UPDATE_TODO", response.data);
      } catch (err) {
        commit("SET_ERROR", err);
        console.log(err);
      }
    },

    async removeTodo({ commit }, id) {
      try {
        await axios.delete("http://localhost:3000/todos/" + id);
        commit("DELETE_TODO", id);
      } catch (err) {
        commit("SET_ERROR", err);
        console.log(err);
      }
    },

    async doneTodo({ commit }, todo) {
      try {
        const response = await axios.put(
          "http://localhost:3000/todos/" + todo.id,
          {
            done: todo.done,
            content: todo.content,
          }
        );
        commit("DONE_TODO", response.data);
      } catch (err) {
        commit("SET_ERROR", err);
        console.log(err);
      }
    },
  },
  modules: {},
});
