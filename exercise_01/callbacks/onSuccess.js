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
 * return a string array with all words contained in it
 * @param {string} value Given string
 * @returns {Array} returned array with all words
 */
const onSuccess = function (value) {
  const wordsArray = value.split(/\s+/);
  const filteredWords = wordsArray.filter((word) => word.trim() !== "");

  return filteredWords;
};

export default onSuccess;
