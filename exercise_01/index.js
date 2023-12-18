import transformStringToArray from "./transformStringToCollection.js";
import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";
//test with value as number and log result

//test with value as array and log result

//test with value as boolean and log result

//test with value as empty string and log result

//test with value as string and log result

const numberValue = 3;
console.log(
  "Number value: " + transformStringToArray(numberValue, onError, onSuccess),
);

const numberArray = [2, 3, 5];
console.log(
  "Number array: " + transformStringToArray(numberArray, onError, onSuccess),
);

const bolleanValue = true;
console.log(
  "Bollean value: " + transformStringToArray(bolleanValue, onError, onSuccess),
);

const emptyStringValue = " ";
console.log(
  "Empty string value: " +
    transformStringToArray(emptyStringValue, onError, onSuccess),
);

const stringValue = "John Doe";
console.log(
  "String value: " + transformStringToArray(stringValue, onError, onSuccess),
);
