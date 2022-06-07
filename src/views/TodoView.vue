<template>
  <div class="todos-wrapper">
    <Todo />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";

export default {
  name: "TodoView",
  components: {
    Todo,
  },
};
</script>
<style>
.todos-wrapper h1 {
  font-weight: 700;
  font-size: 28px;
  text-align: center;
}
.todos-wrapper h4 {
  font-weight: 700;
  text-align: center;
}
.todos-wrapper form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.todos-wrapper form.disabled-here {
  pointer-events: none;
}
.todos-wrapper form label {
  font-size: 14px;
  font-weight: 700;
}
.todos-wrapper form input {
  background-color: transparent;
  border: 2px solid hsla(0, 0%, 100%, 0.35);
  color: inherit;
}
.todos-wrapper form button,
.todos-wrapper form input {
  height: 48px;
  box-shadow: none;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 6px;
  font-size: 18px;
  margin-top: 6px;
  margin-bottom: 12px;
}
.todos-wrapper button {
  cursor: pointer;
  background-color: #a0a4d9;
  border: 1px solid #a0a4d9;
  color: #1f2023;
  font-weight: 700;
  outline: none;
  border-radius: 6px;
}
.todo-btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.todos-wrapper .item-todo-remove {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.todos-wrapper .item-todo-done {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.todos-wrapper .item-todo-remove:hover,
.todos-wrapper .item-todo-done:hover {
  background-color: #101111;
  border-color: #101111;
}
.todos-wrapper h2 {
  font-size: 22px;
  border-bottom: 2px solid hsla(0, 0%, 100%, 0.35);
  padding-bottom: 6px;
}
.todos-wrapper ul {
  padding: 10px;
}
.todos-wrapper ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid hsla(0, 0%, 100%, 0.35);
  padding: 12px 24px;
  border-radius: 6px;
  margin: 0;
  margin-bottom: 12px;
}

.todos-wrapper ul li:hover {
  cursor: pointer;
  background-color: #4e8688;
}
.todos-wrapper ul li.mark-done-progress {
  background-color: #4e8688;
}
.todos-wrapper ul li span.done-progress {
  text-decoration: line-through;
}
.todos-wrapper .error-msg {
  color: #ea7c7c;
  font-size: 18px;
  text-align: center;
}
.success-alert {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
  padding: 15px;

  border: 1px solid transparent;
  border-radius: 4px;
  /* */
  -webkit-animation: seconds 1s forwards;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-delay: 5s;
  animation: seconds 1s forwards;
  animation-iteration-count: 1;
  animation-delay: 5s;
  position: relative;
}
/* hide after 5 seconds */
@-webkit-keyframes seconds {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    left: -9999px;
  }
}
@keyframes seconds {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    left: -9999px;
  }
}
</style>
