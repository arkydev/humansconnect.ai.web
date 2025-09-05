<script lang="ts">
    import { APP_METADATA, Urls, FILE_PATHS, MetaProperties, MetaContent, SCHEMA_DATA, FEATURES, HERO_CONTENT, SEO_KEYWORDS, IMAGE_METADATA, SOCIAL_LINKS, PERFORMANCE, ORGANIZATION_DATA } from '$lib/constants';

    let email = '';

    const jsonLd = JSON.stringify([
        {
            "@context": Urls.SCHEMA_CONTEXT,
            "@type": "SoftwareApplication",
            name: APP_METADATA.NAME,
            description: APP_METADATA.DESCRIPTION,
            url: Urls.SITE,
            applicationCategory: SCHEMA_DATA.APPLICATION_CATEGORY,
            operatingSystem: SCHEMA_DATA.OPERATING_SYSTEM,
            releaseNotes: "Private Beta Launch - Q4 2025",
            offers: {
                "@type": "Offer",
                price: SCHEMA_DATA.PRICE,
                priceCurrency: SCHEMA_DATA.PRICE_CURRENCY,
                availability: "https://schema.org/InStock",
                validFrom: "2025-10-01"
            },
            creator: {
                "@type": "Organization",
                name: APP_METADATA.NAME,
                foundingDate: ORGANIZATION_DATA.FOUNDING_DATE,
                address: {
                    "@type": "PostalAddress",
                    addressCountry: ORGANIZATION_DATA.ADDRESS.COUNTRY,
                    addressRegion: ORGANIZATION_DATA.ADDRESS.ADDRESS_REGION
                }
            },
            featureList: [
                "AI-powered matching algorithm",
                "Privacy-focused authentication", 
                "Cross-domain connections",
                "Anonymous interaction options"
            ],
            screenshot: Urls.FAVICON_PNG,
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                ratingCount: "1",
                bestRating: "5",
                worstRating: "1"
            }
        },
        {
            "@context": Urls.SCHEMA_CONTEXT,
            "@type": "Organization",
            name: APP_METADATA.NAME,
            url: Urls.SITE,
            logo: Urls.FAVICON_PNG,
            foundingDate: ORGANIZATION_DATA.FOUNDING_DATE,
            description: APP_METADATA.DESCRIPTION,
            // sameAs: [], // No active social profiles yet
            contactPoint: {
                "@type": "ContactPoint",
                contactType: ORGANIZATION_DATA.CONTACT_TYPE,
                url: Urls.SITE
            }
        },
        {
            "@context": Urls.SCHEMA_CONTEXT,
            "@type": "WebSite",
            name: APP_METADATA.NAME,
            alternateName: HERO_CONTENT.BRAND_NAME,
            url: Urls.SITE,
            description: APP_METADATA.DESCRIPTION,
            publisher: {
                "@type": "Organization",
                name: APP_METADATA.NAME,
                logo: Urls.FAVICON_PNG
            },
            potentialAction: {
                "@type": "SearchAction",
                target: {
                    "@type": "EntryPoint",
                    urlTemplate: Urls.SITE + "?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
            }
        },
        {
            "@context": Urls.SCHEMA_CONTEXT,
            "@type": "WebPage",
            name: APP_METADATA.TITLE,
            description: APP_METADATA.DESCRIPTION,
            url: Urls.SITE,
            isPartOf: {
                "@type": "WebSite",
                name: APP_METADATA.NAME,
                url: Urls.SITE
            },
            primaryImageOfPage: {
                "@type": "ImageObject",
                url: Urls.FAVICON_PNG,
                width: IMAGE_METADATA.FAVICON_WIDTH,
                height: IMAGE_METADATA.FAVICON_HEIGHT,
                caption: IMAGE_METADATA.FAVICON_ALT
            },
            datePublished: "2025-09-05",
            dateModified: "2025-09-05",
            author: {
                "@type": "Organization", 
                name: APP_METADATA.NAME
            }
        }
    ]);
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
    <meta property={MetaProperties.OG_LOCALE} content={MetaContent.LOCALE_EN_US} />
	<meta property={MetaProperties.OG_URL} content={Urls.SITE} />
	<meta property={MetaProperties.OG_TITLE} content={APP_METADATA.TITLE} />
	<meta property={MetaProperties.OG_DESCRIPTION} content={APP_METADATA.DESCRIPTION} />
	<meta property={MetaProperties.OG_IMAGE} content={Urls.FAVICON_PNG} />
	<meta property={MetaProperties.OG_IMAGE_WIDTH} content={IMAGE_METADATA.FAVICON_WIDTH} />
	<meta property={MetaProperties.OG_IMAGE_HEIGHT} content={IMAGE_METADATA.FAVICON_HEIGHT} />
	<meta property={MetaProperties.OG_IMAGE_ALT} content={IMAGE_METADATA.FAVICON_ALT} />
	<meta property={MetaProperties.OG_SITE_NAME} content={APP_METADATA.NAME} />
	
	<!-- Twitter -->
	<meta property={MetaProperties.TWITTER_CARD} content={MetaContent.TWITTER_CARD_LARGE} />
	<meta property={MetaProperties.TWITTER_SITE} content={SOCIAL_LINKS.TWITTER_HANDLE} />
	<meta property={MetaProperties.TWITTER_CREATOR} content={SOCIAL_LINKS.TWITTER_HANDLE} />
	<meta property={MetaProperties.TWITTER_URL} content={Urls.SITE} />
	<meta property={MetaProperties.TWITTER_TITLE} content={APP_METADATA.TITLE} />
	<meta property={MetaProperties.TWITTER_DESCRIPTION} content={APP_METADATA.DESCRIPTION} />
	<meta property={MetaProperties.TWITTER_IMAGE} content={Urls.FAVICON_PNG} />
	
	<!-- Additional SEO -->
	<meta name="author" content={APP_METADATA.AUTHOR} />
	<meta name="theme-color" content={MetaContent.THEME_COLOR} />
	<link rel="manifest" href="/manifest.json" />
	<link rel="icon" href={FILE_PATHS.FAVICON_PNG} />
	<link rel="apple-touch-icon" href={FILE_PATHS.FAVICON_PNG} />
	
	<!-- Performance Optimizations -->
	{#each PERFORMANCE.DNS_PREFETCH as domain}
		<link rel="dns-prefetch" href={domain} />
	{/each}
	<link rel="preload" href={PERFORMANCE.PRELOAD_FONTS} as="style" />
	
	<!-- Fonts -->
	<link rel="preconnect" href={Urls.FONTS_PRECONNECT}>
	<link rel="preconnect" href={Urls.FONTS_STATIC_PRECONNECT} crossorigin>
	<link href={Urls.INTER_FONT} rel="stylesheet">
	
    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">{jsonLd}</script>
</svelte:head>

<div class="min-h-screen xl:h-screen bg-neutral-50 flex flex-col font-['Inter']">
	<!-- Skip Navigation -->
	<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-neutral-900 text-white px-3 py-2 rounded z-50 text-sm">
		Skip to main content
	</a>
	
	<!-- Header -->
	<header class="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-12 py-6 sm:py-8">
		<div class="max-w-7xl mx-auto flex justify-between items-center">
			<div class="flex items-center gap-3 sm:gap-4">
                <div class="w-0.5 sm:w-1 h-6 sm:h-8 bg-neutral-900"></div>
                <div class="text-lg sm:text-xl font-medium text-neutral-900 tracking-wide" aria-label="Humans Connect AI brand">{HERO_CONTENT.BRAND_NAME}</div>
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
	<main id="main-content" class="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-12 py-4 sm:py-8">
		<div class="max-w-7xl mx-auto xl:grid xl:grid-cols-2 xl:gap-24 xl:h-full xl:items-center space-y-12 sm:space-y-16 xl:space-y-0">
			
			<!-- Hero -->
			<section class="space-y-6 sm:space-y-8 text-center xl:text-left" aria-labelledby="hero-heading">
				<div class="space-y-4 sm:space-y-6">
                        <h1 id="hero-heading" class="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-light text-neutral-900 leading-tight tracking-tight">
                            {HERO_CONTENT.HEADING_LINE_1}<br>
                            <span class="font-normal text-neutral-700">{HERO_CONTENT.HEADING_LINE_2}</span>
                        </h1>
					
					<p class="text-base sm:text-lg text-neutral-600 font-light max-w-md mx-auto xl:mx-0">
						{HERO_CONTENT.SUBHEADING}
					</p>
				</div>
				
				<div class="flex items-center gap-3 justify-center xl:justify-start">
					<div class="w-2 h-2 bg-neutral-400 rounded-full"></div>
					<div class="text-neutral-500 text-sm tracking-wide font-light">
						{APP_METADATA.LAUNCH_TEXT}
					</div>
				</div>
			</section>

			<!-- Features -->
			<section class="space-y-8 sm:space-y-12 flex flex-col items-center xl:items-start" aria-labelledby="features-heading">
				<h2 id="features-heading" class="sr-only">Platform Features</h2>
				<div class="space-y-6 sm:space-y-8 max-w-md sm:max-w-none sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 sm:space-y-0 sm:items-start">
					<div class="flex">
						<div class="w-0.5 bg-neutral-200 mr-4 sm:mr-6 flex-shrink-0"></div>
						<div>
							<h3 class="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-neutral-900">{FEATURES.INTELLIGENT_MATCHING.title}</h3>
							<div class="text-neutral-600 text-sm leading-relaxed">{FEATURES.INTELLIGENT_MATCHING.description}</div>
						</div>
					</div>
					
					<div class="flex">
						<div class="w-0.5 bg-neutral-200 mr-4 sm:mr-6 flex-shrink-0"></div>
						<div>
							<h3 class="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-neutral-900">{FEATURES.PRIVACY_FOCUSED.title}</h3>
							<div class="text-neutral-600 text-sm leading-relaxed">{FEATURES.PRIVACY_FOCUSED.description}</div>
						</div>
					</div>
					
					<div class="flex">
						<div class="w-0.5 bg-neutral-200 mr-4 sm:mr-6 flex-shrink-0"></div>
						<div>
							<h3 class="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-neutral-900">{FEATURES.AUTHENTIC_CONNECTIONS.title}</h3>
							<div class="text-neutral-600 text-sm leading-relaxed">{FEATURES.AUTHENTIC_CONNECTIONS.description}</div>
						</div>
					</div>
					
					<div class="flex">
						<div class="w-0.5 bg-neutral-200 mr-4 sm:mr-6 flex-shrink-0"></div>
						<div>
							<h3 class="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-neutral-900">{FEATURES.UNIVERSAL_PLATFORM.title}</h3>
							<div class="text-neutral-600 text-sm leading-relaxed">{FEATURES.UNIVERSAL_PLATFORM.description}</div>
						</div>
					</div>
				</div>
			</section>
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
