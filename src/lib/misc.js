// @ts-check

/**
 * A function which does nothing, useful for default values
 * @type {(...args: any[]) => any}
 */
export const noop = () => {};

/**
 * TODO:
 * @param {number} num
 * @param {number} len
 * @returns {string}
 */
export const padZero = (num, len = 2) => {
  return `${num}`.padStart(len, "0");
};

/**
 * TODO:
 * @param {number} timeElasped in milliseconds
 */
export const formatScore = (timeElasped) => {
  const timeN = Math.round(timeElasped / 10);
  const nano = timeN % 100;
  const sec = (timeN - nano) / 100;

  return `${padZero(sec)}:${padZero(nano)}`;
};
