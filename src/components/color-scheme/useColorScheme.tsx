import { useEffect, useState } from 'preact/hooks';

export type ColorScheme = 'light' | 'dark';
const PrefersColorSchemeDark = '(prefers-color-scheme: dark)';
const PrefersColorSchemeLight = '(prefers-color-scheme: light)';

export const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    getDefaultColorScheme(),
  );

  const preferColorScheme = ({ matches, media }: MediaQueryListEvent) => {
    if (matches) {
      const matchedColorScheme = media.replace(
        /^\(.*(light|dark)\)$/,
        '$1',
      ) as ColorScheme;
      setColorScheme(matchedColorScheme);
    }
  };

  useEffect(() => {
    try {
      const prefersDarkColorScheme = window.matchMedia(PrefersColorSchemeDark);
      const prefersLightColorScheme = window.matchMedia(
        PrefersColorSchemeLight,
      );

      prefersDarkColorScheme.addEventListener('change', preferColorScheme);
      prefersLightColorScheme.addEventListener('change', preferColorScheme);

      return () => {
        prefersDarkColorScheme.removeEventListener('change', preferColorScheme);
        prefersLightColorScheme.removeEventListener(
          'change',
          preferColorScheme,
        );
      };
    } catch (err) {
      // Safari does not support addListener method of MediaQueryList as of May 1st, 2020.
      // https://bugs.webkit.org/show_bug.cgi?id=203288
    }
  });

  useEffect(() => {
    updateFavicon(colorScheme);
    updateColorScheme(colorScheme);
  }, [colorScheme]);

  return { colorScheme, setColorScheme };
};

const getDefaultColorScheme = (): ColorScheme => {
  const savedColorScheme = getSavedColorScheme();
  const preferedDarkColorScheme = getPreferredColorScheme();

  if (savedColorScheme) {
    return savedColorScheme;
  } else if (preferedDarkColorScheme) {
    return preferedDarkColorScheme;
  }
};

const getSavedColorScheme = () =>
  localStorage.getItem('color-scheme') as ColorScheme | null;

const getPreferredColorScheme = () => {
  const prefersDarkColorScheme = window.matchMedia(PrefersColorSchemeDark);
  if (prefersDarkColorScheme.matches) return 'dark';
  return 'light';
};

const updateColorScheme = (colorScheme: ColorScheme) => {
  document.documentElement.setAttribute('data-color-scheme', colorScheme);
  localStorage.setItem('color-scheme', colorScheme);
};

const updateFavicon = (colorScheme: ColorScheme) => {
  const link: HTMLLinkElement = document.querySelector("link[rel*='icon']");
  link.href = `/icons/favicon-${colorScheme}.ico`;
  document.getElementsByTagName('head')[0].appendChild(link);
};
