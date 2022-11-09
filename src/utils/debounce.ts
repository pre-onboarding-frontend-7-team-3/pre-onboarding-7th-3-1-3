let timer: NodeJS.Timeout;

interface Callback {
  (): void;
}

export const debounce = (callback: Callback, delay: number) => {
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(callback, delay);
};
