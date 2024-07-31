type Callback = (...args: string[]) => void;

/**
 * Creates a debounced version of the provided function.
 *
 * @param func - The function to debounce.
 * @param wait - The number of milliseconds to wait before invoking the debounced function.
 * @returns A debounced version of the provided function.
 */
export const debounce = (func: Callback, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return function executedFunction(...args: string[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
