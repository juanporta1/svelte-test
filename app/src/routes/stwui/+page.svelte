<script>
	import axios from 'axios';
	import { Accordion, Button } from 'svelte-5-ui-lib';
	import { readable } from 'svelte/store';
	let count = $state([]);
	let count2 = [];
	export const getUsers = readable(null, (set) => {
		set(() => {
			console.log('getUsers');
		});
	});
</script>

<div class="flex h-screen w-screen items-center justify-center">
	<Button shadow color="indigo" class="border-0" onclick={() => count.push(0)}>{count}</Button>
	<Button shadow color="indigo" class="border-0" onclick={() => count2.push(0)}>{count2}</Button>
</div>
