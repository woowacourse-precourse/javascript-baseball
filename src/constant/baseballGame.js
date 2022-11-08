const NUMBER = {
    DIGIT: 3,
    MINIMUM_RANGE: 1,
    MAXIMUM_RANGE: 9
};

const MESSAGE = {
    START: '숫자 야구 게임을 시작합니다.',
    INPUT: '숫자를 입력해주세요 : ',
    END: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    OPTION: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
};

const GAME = {
    BALL: '볼',
    STRIKE: '스트라이크',
    NOTHING: '낫싱'
}

const ERROR = {
    OPTION: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    NUMBER: '숫자를 입력하세요.',
    LENGTH: '3자리 수를 입력하세요.',
    OVERLAP: '중복되지 않은 수를 입력하세요.'
}

module.exports = {
    NUMBER,
    MESSAGE,
    GAME,
    ERROR
}
