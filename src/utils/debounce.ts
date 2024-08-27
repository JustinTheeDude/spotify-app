export const debounce = <T extends (...args: any[]) => void>(func: T, timeout: number = 300): (...args: Parameters<T>) => void => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  
  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    
    timer = setTimeout(() => {
      func.apply(null, args);
    }, timeout);
  };
}