export const cn = (e: string | string[] | CSSStyleSheet[]) => {
  if (typeof e !== 'string') return e.join(' ').replace(/\s+/g, ' ').trim();
  if (e.trim() == '') return undefined;
  return e;
};

export class util {
  static getCookie(name) {
    const matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  static imgSrc = (name: string, type = 'webp') => `/src/assets/images/main/${name}.${type}`;

  static setCookie(name, value, options = {}) {
    options = {
      path: '/',
      ...options,
    };

    if (options['expires'] instanceof Date) {
      options['expires'] = options['expires'].toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    for (const optionKey in options) {
      updatedCookie += '; ' + optionKey;
      const optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += '=' + optionValue;
      }
    }

    document.cookie = updatedCookie;
  }
}
