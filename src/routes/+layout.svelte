<script lang="ts">
	import '../app.css';
	import { Header, Footer } from '$lib/components';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-dark font-mono text-light">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
