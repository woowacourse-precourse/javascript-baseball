const NUMBER = {
    MAX_LENGTH : 3,
    RANGE_LEFT : 1,
    RANGE_RIGHT : 9,
};

const STRING = {
    RESTART_TRUE : "1",
    RESTART_FALSE : "2",
    ZERO : '0',
    EMPTY : '',
};

const RESULT = {
    NOTHING : "낫싱",
    STRIKE : "스트라이크",
    BALL : "볼",
};

const ALERT = {
    START : "숫자 야구 게임을 시작합니다.",
    INPUT_NUMBER : "숫자를 입력해주세요 : ",
    INVALID_INPUT : "올바른 입력이 아닙니다. 프로그램을 종료합니다.",
    CORRECT_ANSWER : "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    EXIT_GAME : "게임을 종료합니다.",
    RESTART_GAME : "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

module.exports = { NUMBER, STRING, RESULT, ALERT };