// export const cn = (e: (string | ' ' | CSSStyleSheet)[]) => e.join(' ').replace(/\s+/g, ' ').trim();
export const cn = (e: string | string[] | CSSStyleSheet[]) => {
  if (typeof e !== 'string') return e.join(' ').replace(/\s+/g, ' ').trim();
  if (e.trim() == '') return undefined;
  return e;
};
