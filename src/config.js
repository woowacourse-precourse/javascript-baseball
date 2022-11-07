const GAME_RANGE = {
    RANGE_MIN: 1,
    RANGE_MAX: 9,
    NUM_LENGTH: 3,
};

const RESTART_INPUT = {
    RESTART: '1',
    END: '2',
};

const MATCH_TYPE = {
    NOTHING: '낫싱',
    BALL: '볼',
    STRIKE: '스트라이크',
};

const PHRASE = {
    START: '숫자 야구 게임을 시작합니다.',
    INPUT: '숫자를 입력해주세요: ',
    END: '개의 숫자를 모두 맞히셨습니다! 게임 종료',
    RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: ',
};

const GAME_INPUT_ERRORS = {
    INVALID_INPUT_LENGTH: '입력값의 길이가 올바르지 않습니다.\n',
    INVALID_INPUT_TYPE: '입력값의 타입이 올바르지 않습니다.\n',
    INVALID_INPUT_RANGE: '입력값의 범위가 올바르지 않습니다.\n',
    DUPLICATE_INPUT: '입력값에 중복된 숫자가 있습니다.\n',
};

const RESTART_INPUT_ERRORS = {
    INVALID_RESTART_INPUT: '입력값이 올바르지 않습니다.\n',
};

module.exports = {
    GAME_RANGE, RESTART_INPUT, MATCH_TYPE, PHRASE, GAME_INPUT_ERRORS, RESTART_INPUT_ERRORS
};