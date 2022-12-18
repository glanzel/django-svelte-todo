<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
	import Todolist from './Todolist.svelte'
</script>

<main>
  <h4>Vite und Svelte</h4>

  <div class="card">
		<img src="/assets/vite.svg"/>
  </div>
  
  <div class="card">
    <Todolist />
  </div>
  

</main>

<style>
  .read-the-docs {
    color: #888;
  }
</style>
