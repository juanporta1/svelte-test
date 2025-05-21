<script>
	export let label = '';
	export let callback = () => {};
	export let bgColor = 'bg-blue-500';
	export let bgColorHover = 'hover:bg-blue-700';
</script>

<button
	class={`rounded-4xl min-w-1/3 p-4 ${bgColor} text-white ${bgColorHover} transition  duration-300 hover:cursor-pointer`}
	on:click={callback}
>
	{label}
</button>
