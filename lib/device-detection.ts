/**
 * Device Detection Utility
 * Ported from PHP cloaking script to TypeScript for Next.js Edge Middleware
 */

export function isMobileOrTablet(userAgent: string, headers: Headers): boolean {
  // 1. Sec-CH-UA-Mobile client hint (Chromium 89+) — most reliable signal
  const secCHUAMobile = headers.get('sec-ch-ua-mobile');
  if (secCHUAMobile !== null) {
    return secCHUAMobile.trim() === '?1';
  }

  const ua = userAgent.toLowerCase();

  // 2. Tablet patterns
  const tabletKeywords = [
    'ipad', 'tablet', 'kindle', 'silk', 'playbook',
    'nexus 7', 'nexus 9', 'nexus 10',
    'gt-p', 'sm-t', 'sch-i800',
    'kftt', 'kfjwi', 'kfjwa', 'kfote', 'kfsowi', 'kfthwi', 'kfapwi', 'kfarwi',
    'tab', 'xoom', 'lenovo tab', 'mediapad', 'matepad', 'mi pad', 'redmi pad',
    'a1-', 'a3-', 'b1-',
  ];
  for (const kw of tabletKeywords) {
    if (ua.includes(kw)) {
      return true;
    }
  }

  // Android without "mobile" keyword = tablet
  if (ua.includes('android') && !ua.includes('mobile')) {
    return true;
  }

  // 3. Mobile patterns
  const mobilePatterns = [
    /iphone/i,
    /ipod/i,
    /android.*mobile/i,
    /windows phone/i,
    /windows mobile/i,
    /iemobile/i,
    /wpdesktop/i,
    /blackberry/i,
    /bb10/i,
    /rim tablet os/i,
    /opera mini/i,
    /opera mobi/i,
    /opera tablet/i,
    /fennec/i,
    /firefox.*mobile/i,
    /mobile.*firefox/i,
    /symbian/i,
    /series60/i,
    /series40/i,
    /j2me/i,
    /midp/i,
    /cldc/i,
    /palm/i,
    /portalmmm/i,
    /netfront/i,
    /up\.browser/i,
    /up\.link/i,
    /vodafone/i,
    /blazer/i,
    /dolfin/i,
    /dolphin/i,
    /skyfire/i,
    /bolt/i,
    /zune/i,
    /meego/i,
    /tizen/i,
    /bada/i,
    /kaios/i,
    /webos/i,
    /hpwos/i,
    /fban/i,
    /fbav/i,
    /instagram/i,
    /samsungbrowser/i,
    /ucbrowser/i,
    /ucweb/i,
    /mobile safari/i,
    /mobile/i,
  ];

  for (const pattern of mobilePatterns) {
    if (pattern.test(userAgent)) {
      return true;
    }
  }

  // 4. Mac Safari that might be iPad (iPadOS 13+ reports as Mac)
  const looksLikeMacSafari = (
    ua.includes('macintosh') &&
    ua.includes('applewebkit') &&
    ua.includes('safari') &&
    !ua.includes('chrome') &&
    !ua.includes('firefox') &&
    !ua.includes('chromium')
  );

  if (looksLikeMacSafari) {
    // Check platform hint for iOS
    const secCHUAPlatform = headers.get('sec-ch-ua-platform') ?? '';
    if (secCHUAPlatform.toLowerCase().includes('ios')) {
      return true;
    }
    // Without client hints, Mac Safari is ambiguous — treat as mobile
    // (iPads on iPadOS 13+ look identical to Mac Safari without client hints)
    return true;
  }

  return false;
}
