/**
 * @param {string} url
 * @param {RequestInit} [options]
 * @return {Promise}
 */
export const request = async (url, options) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`${response.status}. ${response.statusText}`);
  }

  return response.json();
};

/**
 * @param {(...args: any) => any} callback
 * @param {number} [daley]
 * @return {(...args: any) => any}
 */
export const debounce = (callback, daley = 500) => {
  let timeoutId;
  let lastCallTime;

  return (...rest) => {
    const elapsedTime = Date.now() - lastCallTime;
    const newDaley = Math.max(daley - elapsedTime, 0);

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...rest);
      lastCallTime = Date.now();
    }, newDaley);
  };
};
