type Callback = (...args: string[]) => void;

/**
 * Creates a debounced version of the provided function.
 *
 * @param func - The function to debounce.
 * @param wait - The number of milliseconds to wait before invoking the debounced function.
 * @returns {function} A debounced version of the provided function.
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

/**
 * Generates a unique random number with a country name.
 * @returns {number} A unique random number.
 */
export const generateUniqueKey = (name: string): string => {
  return `${name.toLowerCase()}-${Math.round(Math.random() * 10000)}`;
}

/**
 * Converts a number to a string with commas.
 * @param value - The number to convert.
 * @returns {string} The number as a string with commas.
 */
export const insertCommas = (value: number): string => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};