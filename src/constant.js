const MESSAGE = {
  THREE_STRIKE: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  GAME_START: '숫자 야구 게임을 시작합니다.',
  GAME_END: '게임 종료',
  INPUT_NUMBER: '숫자를 입력해주세요: ',
  INPUT_RETRY: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
};

const ERROR = {
  LENGTH: "3자리의 수를 입력해주세요",
  ISNAN: "1부터 9까지의 숫자로 이루어진 3자리의 숫자만 입력 가능합니다.",
  DUPLICATE: "중복된 숫자는 입력할 수 없습니다.",
}

const INPUT = {
  RETRY: "1",
  END: "2",
}

const HINT = {
  NOTHING : "낫싱",
  ball(ball) {
    return `${ball}볼 `
  },
  strike(strike) {
    return `${strike}스트라이크 `
  },
  threeStrike(strike) {
    return `${strike}스트라이크\n${MESSAGE.THREE_STRIKE}`
  },
}
module.exports = {
  MESSAGE,
  ERROR,
  INPUT,
  HINT,
};