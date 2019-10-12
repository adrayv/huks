export const throttle = (fn, limit = 200) => {
  let waiting = false;
  return (...args) => {
    if (!waiting) {
      fn.apply(this, args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
};
