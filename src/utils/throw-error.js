const Exception = require('../model/Exception');
const error = new Exception();

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