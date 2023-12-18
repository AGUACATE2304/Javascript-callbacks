import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";
import createUser from "./createUser.js";

//test with email as empty string and log result

//test with email as string and log result

const emptyEmail = createUser("", onError, onSuccess);
console.log(emptyEmail);

const notEmptyEmail = createUser(
  "alan.castillo.e@gmail.com",
  onError,
  onSuccess,
);
console.log(notEmptyEmail);
