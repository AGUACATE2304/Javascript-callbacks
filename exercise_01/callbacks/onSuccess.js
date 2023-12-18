/**
 * Define 'onSuccess' function and signature
 * It receives a string and returns an array with all words contained in it
 *
 * input:
 *  - value: string
 *
 * output:
 *  - array
 */

/**
 * @param {string} value
 * @returns {Array}
 */
const onSuccess = function (value) {
  const wordsArray = value.split(/\s+/);
  const filteredWords = wordsArray.filter((word) => word.trim() !== "");

  return filteredWords;
};

export default onSuccess;
