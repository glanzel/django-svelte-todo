<script>
    import { onMount } from "svelte";
    import Todos from './Todos.svelte'
    let full_hostname = location.origin;
    let name
    let todos = []
    let result = null
    async function doPost () {
		const res = await fetch(full_hostname+'/api/todos/?format=json', {
			method: 'POST',
			body: JSON.stringify({name}),
            headers: { "Content-Type": 'application/json'},
		})
		const json = await res.json()
		result = JSON.stringify(json)
        getTodos()
	}
    
    let getTodos = async () => {
    await fetch(full_hostname+'/api/todos/?format=json')
      .then(r => r.json())
      .then(data => {
        todos = data;
      });
    }
    onMount(getTodos)

</script>

<div class="container">
    <div class="card-body">
        <form action="javascript:void(0);" on:submit={doPost}>
            <input bind:value={name} name="name" class="form-control add-task" placeholder="New Task..." />
        </form>
        
        <ul class="nav nav-pills todo-nav">
            <li role="presentation" class="nav-item all-task active"><a href=# class="nav-link">All</a></li>
            <li role="presentation" class="nav-item active-task"><a href=# class="nav-link">Active</a></li>
            <li role="presentation" class="nav-item completed-task"><a href=# class="nav-link">Completed</a></li>
        </ul>
	    <Todos {todos} on:reload={getTodos}/>
    </div>
</div>

<style>
    .form-control {
        width: 100%;
        height: calc(1.5em + .75rem + 2px);
        padding: .375rem .75rem;
        font-size: 1rem;
        color: #495057;
        border: 1px solid #ced4da;
        border-radius: .25rem;
    }

    .nav {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
    }
    .nav-link {
        display: block;
        padding: .5rem 1rem;
        text-decoration: none;
    }
</style>
