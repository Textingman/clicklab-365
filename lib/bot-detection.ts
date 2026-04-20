/**
 * Bot Detection Utility
 * Ported from PHP cloaking script to TypeScript for Next.js Edge Middleware
 */

export function isBot(userAgent: string, headers: Headers): boolean {
  // 1a. Very short user agents are suspicious
  if (userAgent.trim().length < 20) {
    return true;
  }

  // 1b. Known bot, crawler, scraper, and library identifiers
  const knownBotPattern =
    /bot|crawl|spider|crawler|robot|slurp|scan|checker|googlebot|bingbot|baiduspider|yandexbot|duckduckbot|applebot|mediapartners-google|adsbot-google|ahrefsbot|semrushbot|mj12bot|dotbot|rogerbot|linkdexbot|serpstatbot|blexbot|majesticseo|facebookexternalhit|facebot|twitterbot|linkedinbot|pinterest|whatsapp|telegram|skypeuripreview|discordbot|slackbot|vkshare|outbrain|taboola|ia_archiver|wayback|exabot|sogou|coccocbot|backlinkcrawler|bdcbot|python-requests|python-urllib|python-httpx|aiohttp|php\/|java\/|jakarta commons|apache-httpclient|ruby|perl|go-http-client|guzzlehttp|httpclient|curl|wget|libwww-perl|scrapy|mechanize|httpie|axios|node-fetch|got\/|superagent|request\/|headlesschrome|phantomjs|slimerjs|htmlunit|selenium|webdriver|puppeteer|cloudflare-amp|facebookplatform|nexus[\s_-]?5\b/i;

  if (knownBotPattern.test(userAgent)) {
    return true;
  }

  // 1c. 32-bit Linux (i686) — extremely rare on real mobile devices
  if (userAgent.includes('i686')) {
    return true;
  }

  // 2a. Accept-Language: every real browser sends this
  const acceptLanguage = headers.get('accept-language');
  if (!acceptLanguage || acceptLanguage.trim() === '') {
    return true;
  }

  // 2b. Accept: real browsers always include text/html for page navigations
  const accept = headers.get('accept') ?? '';
  if (!accept || accept.trim() === '') {
    return true;
  }
  if (!accept.includes('text/html')) {
    return true;
  }

  // 2c. Accept-Encoding: all modern browsers send at least gzip
  const encoding = headers.get('accept-encoding') ?? '';
  if (!encoding || !encoding.includes('gzip')) {
    return true;
  }

  const secCHUAMobile = headers.get('sec-ch-ua-mobile');
  const secCHUA = headers.get('sec-ch-ua');
  const secCHUAPlatform = headers.get('sec-ch-ua-platform');
  const secFetchMode = headers.get('sec-fetch-mode');
  const secFetchDest = headers.get('sec-fetch-dest');
  const secFetchSite = headers.get('sec-fetch-site');
  const referer = headers.get('referer');

  // Desktop client hint — not mobile
  if (secCHUAMobile !== null && secCHUAMobile.trim() === '?0') {
    return true;
  }

  // Validate Sec-CH-UA brand
  if (secCHUA !== null) {
    const knownBrands = [
      'chromium', 'chrome', 'microsoft edge', 'samsung internet',
      'opera', 'yandex', 'brave', 'vivaldi', 'not?a_brand', 'not_a brand',
    ];
    const secCHUALower = secCHUA.toLowerCase();
    const hasBrand = knownBrands.some(brand => secCHUALower.includes(brand));
    if (!hasBrand) {
      return true;
    }
  }

  // If Sec-CH-UA is present, UA should be Chromium-based
  if (secCHUA !== null) {
    const uaLower = userAgent.toLowerCase();
    const isChromiumUA = (
      uaLower.includes('chrome/') ||
      uaLower.includes('chromium/') ||
      uaLower.includes('edg/') ||
      uaLower.includes('samsungbrowser') ||
      uaLower.includes('opr/')
    );
    if (!isChromiumUA) {
      return true;
    }
  }

  // Validate Sec-Fetch headers
  const secFetchPresent = (secFetchMode !== null || secFetchDest !== null || secFetchSite !== null);
  if (secFetchPresent) {
    if (secFetchMode !== null && secFetchMode !== 'navigate') {
      return true; // XHR / fetch / worker / iframe — not a page visit
    }
    if (secFetchDest !== null && secFetchDest !== 'document') {
      return true; // Not a document request
    }
    // same-origin without a Referer is self-contradictory
    if (secFetchSite === 'same-origin' && !referer) {
      return true;
    }
  }

  // Platform vs UA consistency check
  if (secCHUAPlatform !== null) {
    const platformLower = secCHUAPlatform.toLowerCase().replace(/"/g, '').trim();
    const uaLower = userAgent.toLowerCase();
    const uaIsMobileOS = (
      uaLower.includes('android') ||
      uaLower.includes('iphone') ||
      uaLower.includes('ipad')
    );
    const desktopPlatforms = ['windows', 'macos', 'linux', 'chrome os'];
    if (uaIsMobileOS && desktopPlatforms.includes(platformLower)) {
      return true;
    }
  }

  // Scoring system for suspicious patterns
  let score = 0;
  const uaLower = userAgent.toLowerCase();

  // Missing all Sec-Fetch headers (suspicious for modern browsers)
  if (!secFetchDest && !secFetchMode && !secFetchSite) {
    score++;
  }

  // Chrome UA without Sec-CH-UA (old or fake Chrome)
  const uaClaimsChrome = (
    uaLower.includes('chrome/') &&
    !uaLower.includes('chromium/')
  );
  if (uaClaimsChrome && secCHUA === null) {
    score++;
  }

  // Old Android version (very rare on real devices now)
  if (/android\s+([1-4])\./i.test(userAgent)) {
    score++;
  }

  // iOS UA without AppleWebKit (fake iOS)
  const uaClaimsiOS = (
    uaLower.includes('iphone') ||
    uaLower.includes('ipad')
  );
  if (uaClaimsiOS && !uaLower.includes('applewebkit')) {
    score += 2; // Strong inconsistency
  }

  // Very old Chrome version
  const chromeVersionMatch = userAgent.match(/chrome\/(\d+)/i);
  if (chromeVersionMatch && parseInt(chromeVersionMatch[1]) < 60) {
    score++;
  }

  // Connection: close header (common in bots/libraries)
  const connection = headers.get('connection') ?? '';
  if (connection.toLowerCase() === 'close') {
    score++;
  }

  return score >= 2;
}
