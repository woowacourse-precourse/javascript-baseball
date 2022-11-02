const ERROR = Object.freeze({
  INPUT_FORMAT: '숫자를 입력해주세요',
  INPUT_LENGTH : '숫자는 서로 다른 세 자릿수를 입력해주세요',
  NEWGAME_RESTART: '1 혹은 2 만 입력해주세요',
  INPUT_DUPLICATE : '각 자릿수는 서로 중복되지 않도록 입력해주세요'
})

const RESULTS = Object.freeze({
  BALL : '볼',
  STRIKE : '스트라이크',
  NOTHING : '낫싱',
})

const GAME = Object.freeze({
    INPUT : '숫자를 입력해주세요 : ',
    RESTART : '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    START : '숫자 야구 게임을 시작합니다.',
    ANSWER : '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료',
})

module.exports = {
  ERROR, RESULTS, GAME
};