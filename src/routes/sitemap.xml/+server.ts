import type { RequestHandler } from '@sveltejs/kit';

export const prerender = true;

const SITE = 'https://humansconnect.ai';

const pages: Array<{ loc: string; changefreq?: string; priority?: number; lastmod?: string }> = [
  { loc: SITE + '/', changefreq: 'weekly', priority: 1.0 }
];

function generateXml(urls: typeof pages) {
  const now = new Date().toISOString();
  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls.map((u) => {
      const lastmod = u.lastmod ?? now;
      return `\n  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    ${u.changefreq ? `<changefreq>${u.changefreq}</changefreq>` : ''}\n    ${u.priority != null ? `<priority>${u.priority.toFixed(1)}</priority>` : ''}\n  </url>`;
    }).join('') +
    `\n</urlset>\n`;
}

export const GET: RequestHandler = () => {
  const body = generateXml(pages);
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
};

