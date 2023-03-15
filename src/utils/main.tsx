export const cn = (e: string | string[] | CSSStyleSheet[]) => {
  if (typeof e !== 'string') return e.join(' ').replace(/\s+/g, ' ').trim();
  if (e.trim() == '') return undefined;
  return e;
};

export function setCookie(name, value, options = {}) {
  // setCookie('user', 'John', {secure: true, 'max-age': 3600});
  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
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

export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
