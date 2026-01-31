<script lang="ts">
	import { Section, Timeline, Tag } from '$lib/components';
	import { cvData } from '$lib/data/cv';

	const HCAPTCHA_SITE_KEY = 'd0a640d2-1b8e-42aa-beb0-38a8f6843ffa';

	let emailRevealed = $state(false);
	let showCaptcha = $state(false);
	let captchaLoaded = $state(false);

	function handleRevealEmail() {
		showCaptcha = true;
		if (!captchaLoaded) {
			const script = document.createElement('script');
			script.src = 'https://js.hcaptcha.com/1/api.js';
			script.async = true;
			script.defer = true;
			script.onload = () => {
				captchaLoaded = true;
			};
			document.head.appendChild(script);
		}
	}

	function onCaptchaSuccess() {
		emailRevealed = true;
		showCaptcha = false;
	}

	// Make callback available globally for hCaptcha
	if (typeof window !== 'undefined') {
		(window as unknown as Record<string, () => void>).onCaptchaSuccess = onCaptchaSuccess;
	}
</script>

<svelte:head>
	<title>CV - {cvData.name}</title>
	<meta name="description" content="CV and resume of {cvData.name}, {cvData.title}." />
</svelte:head>

<div class="bg-light text-dark">
	<!-- Header -->
	<section class="bg-dark py-12 text-light md:py-16">
		<div class="mx-auto max-w-5xl px-4">
			<div class="text-center">
				<h1 class="font-mono text-3xl font-bold uppercase tracking-tight md:text-4xl lg:text-5xl">
					{cvData.name}
				</h1>
				<p class="mt-2 font-mono text-lg text-accent-green md:text-xl">{cvData.title}</p>
				<p class="mt-1 font-mono text-sm text-light/60">📍 {cvData.location}</p>
			</div>

			<!-- Contact Links -->
			<div class="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6">
				<!-- Email with captcha protection -->
				{#if emailRevealed}
					<a
						href="mailto:{cvData.email}"
						class="flex items-center gap-2 font-mono text-sm text-light/70 transition-colors hover:text-accent-green"
					>
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						{cvData.email}
					</a>
				{:else}
					<button
						onclick={handleRevealEmail}
						class="flex items-center gap-2 font-mono text-sm text-light/70 transition-colors hover:text-accent-green"
					>
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						<span class="underline decoration-dotted">Click to reveal email</span>
					</button>
				{/if}
				<a
					href="https://linkedin.com/in/{cvData.linkedin}"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 font-mono text-sm text-light/70 transition-colors hover:text-accent-green"
				>
					<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
						/>
					</svg>
					/{cvData.linkedin}
				</a>
				<a
					href="https://github.com/{cvData.github}"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 font-mono text-sm text-light/70 transition-colors hover:text-accent-green"
				>
					<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
					/{cvData.github}
				</a>
			</div>

			<!-- hCaptcha Modal -->
			{#if showCaptcha}
				<div class="fixed inset-0 z-50 flex items-center justify-center bg-dark/80 backdrop-blur-sm">
					<div class="rounded-lg border border-dark-border bg-dark-lighter p-6">
						<h3 class="mb-4 font-mono text-lg font-bold text-light">Verify you're human</h3>
						<div
							class="h-captcha"
							data-sitekey={HCAPTCHA_SITE_KEY}
							data-callback="onCaptchaSuccess"
							data-theme="dark"
						></div>
						<button
							onclick={() => (showCaptcha = false)}
							class="mt-4 font-mono text-sm text-muted hover:text-light"
						>
							Cancel
						</button>
					</div>
				</div>
			{/if}
		</div>
	</section>

	<!-- Profile -->
	<Section title="Profile" variant="light">
		<p class="max-w-3xl font-mono text-base leading-relaxed text-dark/80">
			{cvData.profile}
		</p>
	</Section>

	<!-- Work Experience -->
	<Section title="Work Experience" variant="light" class="border-t border-dark/10">
		<Timeline items={cvData.experience} variant="light" />
	</Section>

	<!-- Tech Stack -->
	<Section title="Tech Stack" variant="light" class="border-t border-dark/10">
		<div class="flex flex-wrap gap-2">
			{#each cvData.techStack as tech}
				<Tag label={tech} variant="green" />
			{/each}
		</div>
	</Section>

	<!-- Education & Academy -->
	<Section title="Education" variant="light" class="border-t border-dark/10">
		<div class="grid gap-8 md:grid-cols-2">
			<!-- Education -->
			<div>
				<h3 class="mb-4 font-mono text-sm font-bold uppercase tracking-wide text-dark/60">
					Academic Education
				</h3>
				<div class="space-y-4">
					{#each cvData.education as edu}
						<div class="border-l-2 border-dark/20 pl-4">
							<span class="font-mono text-xs font-bold text-accent-green">{edu.period}</span>
							{#if edu.note}
								<span class="ml-2 rounded bg-accent-amber/20 px-2 py-0.5 font-mono text-xs text-accent-amber">
									{edu.note}
								</span>
							{/if}
							<h4 class="mt-1 font-mono text-sm font-bold uppercase text-dark">{edu.title}</h4>
							<p class="font-mono text-xs text-dark/60">{edu.institution}</p>
						</div>
					{/each}
				</div>
			</div>

			<!-- Academy -->
			<div>
				<h3 class="mb-4 font-mono text-sm font-bold uppercase tracking-wide text-dark/60">
					Additional Training
				</h3>
				<div class="space-y-4">
					{#each cvData.academy as item}
						<div class="border-l-2 border-dark/20 pl-4">
							<span class="font-mono text-xs font-bold text-accent-green">{item.period}</span>
							<h4 class="mt-1 font-mono text-sm font-bold uppercase text-dark">{item.title}</h4>
							<p class="font-mono text-xs text-dark/60">{item.institution}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</Section>

	<!-- Languages -->
	<Section title="Languages" variant="light" class="border-t border-dark/10">
		<div class="flex flex-wrap gap-4">
			{#each cvData.languages as lang}
				<div class="rounded border border-dark/20 bg-white px-4 py-3">
					<span class="font-mono text-sm font-bold text-dark">{lang.name}</span>
					<span class="ml-2 font-mono text-sm text-dark/60">({lang.level})</span>
				</div>
			{/each}
		</div>
	</Section>

	<!-- Download Button -->
	<div class="py-8 text-center print:hidden">
		<a
			href="/cv_en.html"
			download="Toth_Mark_Zoltan_CV.html"
			class="inline-flex items-center gap-2 rounded border border-dark/20 bg-white px-6 py-3 font-mono text-sm font-medium text-dark transition-colors hover:border-accent-green hover:text-accent-green"
		>
			<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
				/>
			</svg>
			Download CV
		</a>
	</div>
</div>
