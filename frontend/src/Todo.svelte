<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();    
  export let todo;

  let deleteTodo = async (id) => {
    await fetch(location.origin+'/api/todos/' + id, {
        method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
    dispatch("reload", {todos:"reload"})
  }

  let updateTodo = async (id) => {
    await fetch(location.origin+'/api/todos/' + id + '/', {
        method: 'PATCH',
        body: JSON.stringify({"status": todo.status, "id": id}),
        headers: { "Content-Type": 'application/json'},
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
    dispatch("reload", {todos:"reload"})
  }


</script>
<div class="todo-item">
    <div class="checker"><span class="">
        <form on:submit={() => updateTodo(todo.id)}>
            <input type="checkbox" bind:checked={todo.status} on:change={() => updateTodo(todo.id)}>
            <input type="hidden" name="id" value="{todo.id}">
        </form>
    </span></div>
    <span>{todo.name}</span>
    <a href="javascript:void(0);"  on:click={() => deleteTodo(todo.id)} class="float-right remove-todo-item"><i class="icon-close"></i></a>
</div>

<style>
.todo-item {
  padding: 15px;
  margin: 5px 0;
  border-radius: 0;
  background: #f7f7f7;
}
div.checker{
  display: inline-block;
  vertical-align: middle;
  width: 19px;
  height: 19px;
}
.remove-todo-item {
  background-color: red;
  display: block;
  width: 10px;
  height: 10px;
  float: right;
}
</style>
