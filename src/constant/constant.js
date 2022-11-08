const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  ENTER: "숫자를 입력해주세요 : ",
  CLEAR: "3스트라이크",
  FINISH: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  END: "게임 종료",
  CONTINUE: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

const ERROR = {
  LENGTH: "세자리 수를 입력해야합니다. 프로그램을 종료합니다.",
  STRING: "1 ~ 9 숫자만 입력해야합니다. 프로그램을 종료합니다.",
  DUPLICATION: "서로 다른 숫자 세가지를 입력해야합니다. 프로그램을 종료합니다.",
  SELECT: "1,2 둘 중 한자리 숫자만 입력해야합니다. 프로그램을 종료합니다.",
};

const FORMAT = {
  PLAY: "palyingInput",
  RESTART: "restartInput",
};

module.exports = { MESSAGE, ERROR, FORMAT };
