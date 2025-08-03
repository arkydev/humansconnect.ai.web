<script lang="ts">
	let email = '';
</script>

<svelte:head>
	<title>Humans Connect AI</title>
	<meta name="description" content="Connect with like-minded people through intelligent matching and shared interests." />
	<link rel="icon" href="/favicon.png" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
</svelte:head>

<div class="min-h-screen xl:h-screen bg-neutral-50 flex flex-col font-['Inter']">
	<!-- Header -->
	<header class="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-12 py-6 sm:py-8">
		<div class="max-w-7xl mx-auto flex justify-between items-center">
			<div class="flex items-center gap-3 sm:gap-4">
				<div class="w-0.5 sm:w-1 h-6 sm:h-8 bg-neutral-900"></div>
				<div class="text-lg sm:text-xl font-medium text-neutral-900 tracking-wide">Humans</div>
			</div>
			<div class="flex items-center gap-2">
				<div class="w-1.5 h-1.5 bg-neutral-400 rounded-full"></div>
				<div class="text-xs text-neutral-500 font-mono uppercase tracking-wider">
					Private Beta
				</div>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<main class="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-12 py-4 sm:py-8">
		<div class="max-w-7xl mx-auto xl:grid xl:grid-cols-2 xl:gap-24 xl:h-full xl:items-center space-y-12 sm:space-y-16 xl:space-y-0">
			
			<!-- Hero -->
			<div class="space-y-6 sm:space-y-8 text-center lg:text-left">
				<div class="space-y-4 sm:space-y-6">
					<h1 class="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-light text-neutral-900 leading-tight tracking-tight">
						Connect with<br>
						<span class="font-normal text-neutral-700">Like-minded People</span>
					</h1>
					
					<p class="text-base sm:text-lg text-neutral-600 font-light max-w-md mx-auto lg:mx-0">
						Discover meaningful connections through intelligent matching and shared interests.
					</p>
				</div>
				
				<div class="flex items-center gap-3 justify-center lg:justify-start">
					<div class="w-2 h-2 bg-neutral-400 rounded-full"></div>
					<div class="text-neutral-500 text-sm tracking-wide font-light">
						Launching Q4 2025
					</div>
				</div>
			</div>

			<!-- Features -->
			<div class="space-y-8 sm:space-y-12 flex flex-col items-center xl:items-start">
				<div class="space-y-6 sm:space-y-8 max-w-md xl:max-w-none xl:grid xl:grid-cols-2 xl:gap-x-8 xl:gap-y-8 xl:space-y-0">
					<div class="border-l-2 border-neutral-200 pl-4 sm:pl-6">
						<div class="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-neutral-900">Smart Matching</div>
						<div class="text-neutral-600 text-sm leading-relaxed">AI finds people you'll actually connect with</div>
					</div>
					
					<div class="border-l-2 border-neutral-200 pl-4 sm:pl-6">
						<div class="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-neutral-900">Privacy Focused</div>
						<div class="text-neutral-600 text-sm leading-relaxed">Your data stays private and secure</div>
					</div>
					
					<div class="border-l-2 border-neutral-200 pl-4 sm:pl-6">
						<div class="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-neutral-900">Real Connections</div>
						<div class="text-neutral-600 text-sm leading-relaxed">Move beyond small talk to meaningful relationships</div>
					</div>
					
					<div class="border-l-2 border-neutral-200 pl-4 sm:pl-6">
						<div class="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-neutral-900">Universal Platform</div>
						<div class="text-neutral-600 text-sm leading-relaxed">Romance, business, creative, athletic — connections across all life domains</div>
					</div>
				</div>
			</div>
		</div>
	</main>

	<!-- Footer -->
	<footer class="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-12 py-6 sm:py-8">
		<div class="max-w-7xl mx-auto">
			<div class="h-px bg-neutral-200 mb-6 sm:mb-8"></div>
			<div class="flex justify-between items-center text-sm text-neutral-400">
				<div>© 2025</div>
				<div class="font-mono text-xs">v0.1</div>
			</div>
		</div>
	</footer>
</div>
