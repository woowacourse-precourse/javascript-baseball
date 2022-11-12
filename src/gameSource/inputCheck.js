class ValidationCheck {

  checkUserInputDuringGamePlay(userInput) {
    if (userInput.length !== 3) return false;
    if (isNaN(userInput)) return false;
    if (new Set(userInput).size !== 3) return false;
    if (!(userInput.match(/[1-9]{3}/))) return false;

    return true;
  }

  checkUserInputAfterGameOver(userInput) {
    if (+userInput === 1 || +userInput === 2) return true;

    return false;
  }

}

const VALIDATIONCHECK = new ValidationCheck();
module.exports = VALIDATIONCHECK;
