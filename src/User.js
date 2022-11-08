const GAME_NUMBER_LENGTH = 3;

class User {
  checkScope = (input) => {
    if (input.includes(0)) throw "0이 아닌 1~9 사이 숫자를 입력해주세요.";
  };

  checkType = (input) => {
    if (isNaN(input)) throw "숫자를 입력해주세요.";
  };

  checkLength = (input) => {
    if (input.length !== GAME_NUMBER_LENGTH)
      throw `${GAME_NUMBER_LENGTH}개의 숫자를 입력해주세요.`;
  };

  checkDuplicatedInput = (input) => {
    if (input.length !== new Set(input).size)
      throw "서로 다른 숫자를 입력해주세요.";
  };

  isValidUser = (input) => {
    this.checkScope(input);
    this.checkType(input);
    this.checkLength(input);
    this.checkDuplicatedInput(input);

    return true;
  };

  isRestartNumber = (restartInput) => {
    if (Number(restartInput) < 1 || Number(restartInput) > 2)
      throw "1 또는 2를 입력해주세요.";
    if (isNaN(restartInput)) throw "숫자를 입력해주세요.";
    return true;
  };
}

module.exports = User;
