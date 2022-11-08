const MESSAGE = {
    START_GAME: "숫자 야구 게임을 시작합니다.",
    REQUIRE_NUMBER: "숫자를 입력해주세요 : ",
    CORRECT_ANSWER: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    ASK_RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n",
};
const BALL_COUNT = {
    ONE_BALL: "1볼",
    TWO_BALL: "2볼",
    THREE_BALL: "3볼",
    ONE_STRIKE: "1스트라이크",
    TWO_STRIKE: "2스트라이크",
    THREE_STRIKE: "3스트라이크",
    NOTHING: "낫싱",
};
const ERROR_MESSAGE = {
    ONE_OR_TWO: "1 과 2 가 아닌 값을 입력하여 종료합니다.",
    THREE_LENGTH: "입력값이 3자리수가 아닙니다.",
    NUMBER: "숫자가 아닙니다.",
    ZERO: "0을 포함한 자릿수가 존재합니다.",
    DUPLICATE_NUMBER: "중복되는 숫자가 존재합니다.",
    NEGATIVE_NUMBER: "음수입니다.",
};
const RESTART_OR_STOP = {
    RESTART: "1",
    STOP: "2",
};

module.exports = { MESSAGE, BALL_COUNT, ERROR_MESSAGE, RESTART_OR_STOP };
