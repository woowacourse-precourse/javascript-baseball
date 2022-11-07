const ExceptionCheck = require('./Exception');
const error = new ExceptionCheck();

exports.inputError = (input) => {
  if(error.inputError(input) != false){
    throw new Error(error.inputError(input));
  }
}

exports.restartError = (input) => {
  if (error.restartError(String(input)) != false){
    throw new Error(error.restartError(String(input)));
  }
}