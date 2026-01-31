<script lang="ts">
	let { class: className = '' } = $props();
	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/cv', label: 'CV' },
		{ href: '/blog', label: 'Blog' }
	];
</script>

<header
	class="sticky top-0 z-50 border-b border-dark-border bg-dark/95 font-mono backdrop-blur-sm {className}"
>
	<nav class="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
		<a href="/" class="text-xl font-bold text-light transition-colors hover:text-accent-green">
			TMZ<span class="text-accent-green">.</span>
		</a>

		<!-- Desktop Navigation -->
		<ul class="hidden items-center gap-8 md:flex">
			{#each navLinks as link}
				<li>
					<a
						href={link.href}
						class="text-sm font-medium uppercase tracking-wide text-muted transition-colors hover:text-accent-green"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Mobile Menu Button -->
		<button
			class="text-light md:hidden"
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			aria-label="Toggle menu"
		>
			{#if mobileMenuOpen}
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			{:else}
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			{/if}
		</button>
	</nav>

	<!-- Mobile Navigation -->
	{#if mobileMenuOpen}
		<div class="border-t border-dark-border bg-dark px-4 py-4 md:hidden">
			<ul class="flex flex-col gap-4">
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							class="block text-sm font-medium uppercase tracking-wide text-muted transition-colors hover:text-accent-green"
							onclick={() => (mobileMenuOpen = false)}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</header>
