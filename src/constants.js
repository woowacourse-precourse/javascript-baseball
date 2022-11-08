const GAME_MESSAGE = Object.freeze({
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  ANSWER: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
});

const GAME_ERROR_MESSAGE = Object.freeze({
  BLANK: "아무것도 입력되지 않았습니다.",
  THREE_DIGIT: "숫자 3개가 입력되지 않았습니다.",
  DUPLICATE: "중복된 숫자가 있습니다.",
  NOT_NUMBER: "1 ~ 9 사이의 숫자를 입력하지 않았습니다.",
  WRONG_INPUT: "잘못된 값을 입력하여 게임을 종료합니다."
});

const RESULT = Object.freeze({
  NOTHING: "낫싱",
  BALL: "볼 ",
  STRIKE: "스트라이크",
  BLANK: "",
})

module.exports = {GAME_ERROR_MESSAGE, GAME_MESSAGE, RESULT}