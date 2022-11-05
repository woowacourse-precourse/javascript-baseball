const checkRestartInputValidation = (input) => {
  const RESTART = "1";
  const GAMEOVER = "2";
  if (!input === RESTART || !input === GAMEOVER)
    throw new Error("1 또는 2를 입력해야합니다.");
};

module.exports = checkRestartInputValidation;
