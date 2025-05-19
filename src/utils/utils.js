export const imgUrl = (url) => {
  return new URL(`../assets/${url}`, import.meta.url).href;
};
