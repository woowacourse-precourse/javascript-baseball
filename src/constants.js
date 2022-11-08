const MESSAGES = {
  start: "숫자 야구 게임을 시작합니다.",
  input: "숫자를 입력하세요",
  feedback: (answer) => `숫자를 입력해주세요 : ${answer}`,
  end: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  restart: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  exit: "게임 종료",
  numError: "알맞은 숫자를 입력하지않아 프로그램을 종료합니다",
  restartError: "1 또는 2를 입력하세요",
};

module.exports = {
  MESSAGES,
};
