const GAME_NUMBER_LENGTH = 3;

const checkScope = (input) => {
  if (input.includes(0)) throw "0이 아닌 1~9 사이 숫자를 입력해주세요.";
};

const checkType = (input) => {
  if (isNaN(input)) throw "숫자를 입력해주세요.";
};

const checkLength = (input) => {
  if (input.length !== GAME_NUMBER_LENGTH)
    throw `${GAME_NUMBER_LENGTH}개의 숫자를 입력해주세요.`;
};

const checkDuplicatedInput = (input) => {
  if (input.length !== new Set(input).size)
    throw "서로 다른 숫자를 입력해주세요.";
};

const isValidUser = (input) => {
  checkScope(input);
  checkType(input);
  checkLength(input);
  checkDuplicatedInput(input);

  return true;
};

module.exports = isValidUser;
