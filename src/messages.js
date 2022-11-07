const MESSAGE = Object.freeze({
    START: "숫자 야구 게임을 시작합니다.",
    INPUT_NUMBER: "숫자를 입력해주세요 : ",
    THREE_STRIKE: "3스트라이크",
    STRIKE: "스트라이크",
    BALL: "볼",
    NOTHING: "낫싱",
    CONGRATULATION: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
});

const ERROR = Object.freeze({
    NOT_THREE_NUMBER: "입력값은 0이 아닌 숫자로 구성된 3자리 수이어야 합니다.",
    NOT_OVERLAP_NUMBER: "연속된 숫자는 포함될 수 없습니다.",
    NOT_DIFFERENCE_NUMBER: "각 자리수는 모두 달라야합니다.",
    INVAID_RESTART_TYPE: "1 또는 2만 입력할 수 있습니다."
});

module.exports = {
    MESSAGE,
    ERROR,
};