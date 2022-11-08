const GAME_MESSAGE = Object.freeze({
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
});

const GAME_ERROR_MESSAGE = Object.freeze({
  BLANK: "아무것도 입력되지 않았습니다.",
  THREE_DIGIT: "숫자 3개가 입력되지 않았습니다.",
  DUPLICATE: "중복된 숫자가 있습니다.",
  NOT_NUMBER: "1 ~ 9 사이의 숫자를 입력하지 않았습니다.",
});

const RESULT = Object.freeze({
  정답: "3스트라이크",
  낫싱: "낫싱",
  볼: "볼 ",
  스트라이크: "스트라이크",
  공백: "",
})

module.exports = {GAME_ERROR_MESSAGE, GAME_MESSAGE, RESULT}