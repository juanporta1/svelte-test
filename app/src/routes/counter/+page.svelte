<script>
	import Button from '../../components/button/Button.svelte';
	let count = 0;
	function increment() {
		count++;
	}

	function reset() {
		count = 0;
	}

	function decrement() {
		count--;
	}

	$: color = count === 0 ? 'text-yellow-700' : count > 0 ? 'text-green-700' : 'text-red-700';
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center">
	<span class={`mb-10 text-5xl ${color}`}>{count}</span>
	<div class="flex w-96 flex-row items-center justify-center gap-4">
		<Button
			label="Incrementar"
			bgColor="bg-green-700"
			bgColorHover="hover:bg-green-900"
			callback={increment}
		/>
		<Button
			label="Resetear"
			bgColor="bg-yellow-700"
			bgColorHover="hover:bg-yellow-900"
			callback={reset}
		/>
		<Button
			label="Restar"
			bgColor="bg-red-700"
			bgColorHover="hover:bg-red-900"
			callback={decrement}
		/>
	</div>
</div>
