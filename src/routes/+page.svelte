<script lang="ts">
	import { APP_METADATA, Urls, FILE_PATHS, MetaProperties, MetaContent, SchemaTypes, SCHEMA_DATA, FEATURES, HERO_CONTENT, SEO_KEYWORDS } from '$lib/constants';

	let email = '';
</script>

<svelte:head>
	<title>{APP_METADATA.TITLE}</title>
	<meta name="description" content={APP_METADATA.SHORT_DESCRIPTION} />
	<meta name="keywords" content={SEO_KEYWORDS} />
	<meta name="viewport" content={MetaContent.VIEWPORT} />
	<meta name="robots" content={MetaContent.ROBOTS_INDEX_FOLLOW} />
	<link rel="canonical" href={Urls.SITE} />
	
	<!-- Open Graph / Facebook -->
	<meta property={MetaProperties.OG_TYPE} content={MetaContent.OG_TYPE_WEBSITE} />
	<meta property={MetaProperties.OG_URL} content={Urls.SITE} />
	<meta property={MetaProperties.OG_TITLE} content={APP_METADATA.TITLE} />
	<meta property={MetaProperties.OG_DESCRIPTION} content={APP_METADATA.DESCRIPTION} />
	<meta property={MetaProperties.OG_IMAGE} content={Urls.FAVICON_PNG} />
	<meta property={MetaProperties.OG_SITE_NAME} content={APP_METADATA.NAME} />
	
	<!-- Twitter -->
	<meta property={MetaProperties.TWITTER_CARD} content={MetaContent.TWITTER_CARD_LARGE} />
	<meta property={MetaProperties.TWITTER_URL} content={Urls.SITE} />
	<meta property={MetaProperties.TWITTER_TITLE} content={APP_METADATA.TITLE} />
	<meta property={MetaProperties.TWITTER_DESCRIPTION} content={APP_METADATA.DESCRIPTION} />
	<meta property={MetaProperties.TWITTER_IMAGE} content={Urls.FAVICON_PNG} />
	
	<!-- Additional SEO -->
	<meta name="author" content={APP_METADATA.AUTHOR} />
	<meta name="theme-color" content={MetaContent.THEME_COLOR} />
	<link rel="icon" href={FILE_PATHS.FAVICON_PNG} />
	<link rel="apple-touch-icon" href={FILE_PATHS.FAVICON_PNG} />
	
	<!-- Fonts -->
	<link rel="preconnect" href={Urls.FONTS_PRECONNECT}>
	<link rel="preconnect" href={Urls.FONTS_STATIC_PRECONNECT} crossorigin>
	<link href={Urls.INTER_FONT} rel="stylesheet">
	
	<!-- JSON-LD Structured Data -->
	<script type="application/ld+json">
		{
			[SchemaTypes.CONTEXT]: Urls.SCHEMA_CONTEXT,
			[SchemaTypes.TYPE]: SchemaTypes.SOFTWARE_APPLICATION,
			"name": APP_METADATA.NAME,
			"description": APP_METADATA.DESCRIPTION,
			"url": Urls.SITE,
			"applicationCategory": SCHEMA_DATA.APPLICATION_CATEGORY,
			"operatingSystem": SCHEMA_DATA.OPERATING_SYSTEM,
			"offers": {
				[SchemaTypes.TYPE]: SchemaTypes.OFFER,
				"price": SCHEMA_DATA.PRICE,
				"priceCurrency": SCHEMA_DATA.PRICE_CURRENCY
			},
			"creator": {
				[SchemaTypes.TYPE]: SchemaTypes.ORGANIZATION,
				"name": APP_METADATA.NAME
			}
		}
	</script>
</svelte:head>

<div class="min-h-screen xl:h-screen bg-neutral-50 flex flex-col font-['Inter']">
	<!-- Header -->
	<header class="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-12 py-6 sm:py-8">
		<div class="max-w-7xl mx-auto flex justify-between items-center">
			<div class="flex items-center gap-3 sm:gap-4">
				<div class="w-0.5 sm:w-1 h-6 sm:h-8 bg-neutral-900"></div>
				<h1 class="text-lg sm:text-xl font-medium text-neutral-900 tracking-wide">{HERO_CONTENT.BRAND_NAME}</h1>
			</div>
			<div class="flex items-center gap-2">
				<div class="w-1.5 h-1.5 bg-neutral-400 rounded-full"></div>
				<div class="text-xs text-neutral-500 font-mono uppercase tracking-wider">
					{APP_METADATA.STATUS_TEXT}
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
					<h2 class="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-light text-neutral-900 leading-tight tracking-tight">
						{HERO_CONTENT.HEADING_LINE_1}<br>
						<span class="font-normal text-neutral-700">{HERO_CONTENT.HEADING_LINE_2}</span>
					</h2>
					
					<p class="text-base sm:text-lg text-neutral-600 font-light max-w-md mx-auto lg:mx-0">
						{HERO_CONTENT.SUBHEADING}
					</p>
				</div>
				
				<div class="flex items-center gap-3 justify-center lg:justify-start">
					<div class="w-2 h-2 bg-neutral-400 rounded-full"></div>
					<div class="text-neutral-500 text-sm tracking-wide font-light">
						{APP_METADATA.LAUNCH_TEXT}
					</div>
				</div>
			</div>

			<!-- Features -->
			<div class="space-y-8 sm:space-y-12 flex flex-col items-center xl:items-start">
				<div class="space-y-6 sm:space-y-8 max-w-md xl:max-w-none xl:grid xl:grid-cols-2 xl:gap-x-8 xl:gap-y-8 xl:space-y-0">
					<div class="border-l-2 border-neutral-200 pl-4 sm:pl-6">
						<h3 class="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-neutral-900">{FEATURES.INTELLIGENT_MATCHING.title}</h3>
						<div class="text-neutral-600 text-sm leading-relaxed">{FEATURES.INTELLIGENT_MATCHING.description}</div>
					</div>
					
					<div class="border-l-2 border-neutral-200 pl-4 sm:pl-6">
						<h3 class="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-neutral-900">{FEATURES.PRIVACY_FOCUSED.title}</h3>
						<div class="text-neutral-600 text-sm leading-relaxed">{FEATURES.PRIVACY_FOCUSED.description}</div>
					</div>
					
					<div class="border-l-2 border-neutral-200 pl-4 sm:pl-6">
						<h3 class="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-neutral-900">{FEATURES.AUTHENTIC_CONNECTIONS.title}</h3>
						<div class="text-neutral-600 text-sm leading-relaxed">{FEATURES.AUTHENTIC_CONNECTIONS.description}</div>
					</div>
					
					<div class="border-l-2 border-neutral-200 pl-4 sm:pl-6">
						<h3 class="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-neutral-900">{FEATURES.UNIVERSAL_PLATFORM.title}</h3>
						<div class="text-neutral-600 text-sm leading-relaxed">{FEATURES.UNIVERSAL_PLATFORM.description}</div>
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
				<div>{APP_METADATA.COPYRIGHT}</div>
				<div class="font-mono text-xs">{APP_METADATA.VERSION}</div>
			</div>
		</div>
	</footer>
</div>
