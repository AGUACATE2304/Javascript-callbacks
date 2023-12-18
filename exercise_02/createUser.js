import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";
/**
 * Define 'createUser' function and signature (JSDocs)
 *
 * input:
 *  - email: string
 *  - onError: function
 *  - onSuccess: function
 *
 * It will generate a random number in between 0 and 1
 * If random number is less than 0.5 or email is empty, then call onError callback
 * Otherwise, call onSuccess function
 *
 * output
 *  - string
 */

/**
 *
 * @param {string} email
 * @param {function} onError
 * @param {function} onSuccess
 * @returns {string}
 */

function createUser(email, onError, onSuccess) {
  const generatedNumber = Math.random() * 1;

  if (generatedNumber < 0.5) {
    return onError();
  }
  return onSuccess(email);
}

export default createUser;
