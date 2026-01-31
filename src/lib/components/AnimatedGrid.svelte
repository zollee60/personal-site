<script lang="ts">
	import { onMount } from 'svelte';

	let cells: { id: number; active: boolean }[] = $state([]);
	let cellWidth = 60;
	let cellHeight = 40;
	let cols = 0;
	let rows = 0;
	let skewAngle = -12;
	let padding = 300; // Extra padding to cover skewed corners

	onMount(() => {
		// Calculate grid dimensions with extra padding for skew
		cols = Math.ceil((window.innerWidth + padding * 2) / cellWidth) + 2;
		rows = Math.ceil((window.innerHeight + padding * 2) / cellHeight) + 2;

		// Initialize cells
		cells = Array.from({ length: cols * rows }, (_, i) => ({
			id: i,
			active: false
		}));

		// Animate random cells - slower rate
		const interval = setInterval(() => {
			const numToAnimate = Math.floor(Math.random() * 2) + 1;

			for (let i = 0; i < numToAnimate; i++) {
				const randomIndex = Math.floor(Math.random() * cells.length);
				cells[randomIndex] = { ...cells[randomIndex], active: true };

				// Longer fade out for smooth animation
				setTimeout(
					() => {
						cells[randomIndex] = { ...cells[randomIndex], active: false };
					},
					2000 + Math.random() * 2000
				);
			}
		}, 500);

		const handleResize = () => {
			cols = Math.ceil((window.innerWidth + padding * 2) / cellWidth) + 2;
			rows = Math.ceil((window.innerHeight + padding * 2) / cellHeight) + 2;
			cells = Array.from({ length: cols * rows }, (_, i) => ({
				id: i,
				active: false
			}));
		};

		window.addEventListener('resize', handleResize);

		return () => {
			clearInterval(interval);
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<div
	class="pointer-events-none absolute overflow-hidden"
	style="
		top: -{padding}px;
		left: -{padding}px;
		right: -{padding}px;
		bottom: -{padding}px;
		transform: skewX({skewAngle}deg);
	"
>
	<!-- Grid container -->
	<div
		class="absolute inset-0"
		style="
			background-image: 
				linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
				linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
			background-size: {cellWidth}px {cellHeight}px;
		"
	></div>

	<!-- Animated cells with smooth fade -->
	{#each cells as cell, i}
		{@const x = (i % cols) * cellWidth}
		{@const y = Math.floor(i / cols) * cellHeight}
		<div
			class="absolute"
			style="
				left: {x}px;
				top: {y}px;
				width: {cellWidth - 1}px;
				height: {cellHeight - 1}px;
				background: rgba(255, 255, 255, 0.08);
				opacity: {cell.active ? 1 : 0};
				transition: opacity 2s ease-in-out;
			"
		></div>
	{/each}
</div>

