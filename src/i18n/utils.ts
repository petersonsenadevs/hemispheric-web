import { ui, defaultLang } from './ui';

type Lang = keyof typeof ui;

export function getLang(locale: string | undefined): Lang {
  return locale && locale in ui ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

// Prefija /es para español; el inglés va en la raíz (prefixDefaultLocale: false).
export function localizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  if (path === '/') return '/es/';
  return `/${lang}${path}`;
}
