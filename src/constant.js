const ANSWER = {
    MIN: 1,
    MAX: 9,
    LENGTH: 3,
};  
    
const RESULT = {
    NOTHING: '낫싱',
    BALL : '볼',
    STRIKE: '스트라이크',
};

const GAME_END = {
    RETRY: '1',
    EXIT: '2',
};

const TEXT = {
    INITIAL: '숫자 야구 게임을 시작합니다.',
    GET_USER_NUMBER: '숫자를 입력해주세요 : ',
    CORRECT_ANSWER: `${ANSWER.LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
    RETRY: `게임을 새로 시작하려면 ${GAME_END.RETRY}, 종료하려면 ${GAME_END.EXIT}를 입력하세요.\n`,
};

const ERROR = {
    INVALID_USER_NUMBER: '잘못된 값을 입력하였습니다.',
    INVALID_RETRY: '잘못 입력하였습니다. 다시 입력해주세요.',
};

module.exports = { ANSWER, RESULT, TEXT, GAME_END, ERROR };
