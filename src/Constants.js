const NUM_SIZE = 3;

const KEY = {
  RESTART: '1',
  QUIT: '2',
};

const MESSAGE = {
    START: '숫자 야구 게임을 시작합니다.',
    INPUT: '숫자를 입력해주세요 : ',
    RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    QUIT: '게임 종료',
    THREE_STRIKE: '3스트라이크',
    SUCCESS: '3개의 숫자를 모두 맞히셨습니다! 게임 종료'
}

const ERROR = {
    LENGTH: '3자리의 수를 입력해주세요.',
    UNIQUE: '중복된 숫자가 없도록 입력해주세요.',
    RANGE: '1~9 범위의 숫자로 구성된 수를 입력해주세요.'
}

module.exports = { NUM_SIZE, KEY, MESSAGE, ERROR };