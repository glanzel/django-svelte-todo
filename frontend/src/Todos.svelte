<script>
  import { onMount } from "svelte";
	import Todo from './Todo.svelte'

  export let todos = [];

</script>

<div class="todo-list" id="todo-list">
    {#each todos as todo}
      <Todo {todo} on:reload/>
    {/each}
</div>

<style>
.todo-list {
  margin: 10px 0;
  min-width:500px;
  text-align: left;
}
</style>
    