export const debounce = (fn: any, delay: number) => {
  let timeoutId: any = null;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
