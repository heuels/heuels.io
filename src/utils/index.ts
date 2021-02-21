import { ColorScheme } from 'components/color-scheme/useColorScheme';
import { ColorSet } from 'types';

export function getColor(
  color: string | ColorSet,
  colorScheme: ColorScheme,
): string | undefined {
  if (!color) {
    return;
  }

  if (typeof color === 'string') {
    return color;
  }

  return color[colorScheme];
}


/**
 *
 * @param deg
 * @param startColor
 * @param endColor
 */
export function linearGradient(deg, startColor, endColor) {
  return `linear-gradient(${deg}deg, ${startColor} 0%, ${endColor} 100%)`;
}

/**
 *
 * @param color 7-symbol HEX color (#000000).
 * @param alpha Alpha value (0–1)
 */
export function alpha(color: string, a: number) {
  if (!color?.startsWith('#')) return color;
  const hexAlpha = (Math.round(a * 255) + 0x10000)
    .toString(16)
    .substr(-2)
    .toUpperCase();
  return color + hexAlpha;
}

/**
 *
 * @param time ms
 */
export function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

export function setLanguage() {
  let language = 'en';

  if (window.location.pathname === '/') {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) language = savedLanguage;
    const preferredLanguage = window.navigator.language.slice(0, 2);
    if (preferredLanguage) language = preferredLanguage;
    window.history.replaceState(null, '', '/' + language + '/');
  } else if (window.location.pathname.startsWith('/en')) {
    language = 'en';
  } else if (window.location.pathname.startsWith('/ru')) {
    language = 'ru';
  }

  storeLanguage(language);
  return language;
}

export function setTitleAndDescription(t) {
  document.title = `${t('title')} — ${t('subtitle')}`;
  document
    .getElementsByTagName('meta')
    .namedItem('description')
    .setAttribute('content', t('description'));
}

export function storeLanguage(language) {
  document.documentElement.setAttribute('lang', language);
  localStorage.setItem('language', language);
}
