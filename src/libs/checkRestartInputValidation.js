const { GAME } = require("../constansts");

const checkRestartInputValidation = (input) => {
  if (input === GAME.RESTART || input === GAME.OVER) return;
  throw new Error("1 또는 2를 입력해야합니다.");
};

module.exports = checkRestartInputValidation;
