const ExceptionCheck = require('./Exception');
const error = new ExceptionCheck();

exports.inputErrorThrow = (input) => {
  if(error.inputError(input) != false){
    throw new Error(error.inputError(input));
  }
}

exports.restartErrorThrow = (input) => {
  if (error.restartError(String(input)) != false){
    throw new Error(error.restartError(String(input)));
  }
}