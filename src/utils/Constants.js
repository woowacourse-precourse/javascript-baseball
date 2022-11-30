INPUT_MESSAGES = {
    INPUT_NUMBER_MESSAGES: "숫자를 입력해주세요.",
    RESTART_GAME_MESSAGES: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

ERROR_MESSAGES = {
    TYPE_ERROR: "숫자로 입력해주세요.",
    LENGTH_ERROR: "3자리로 입력해주세요.",
    RANGE_ERROR: "1 ~ 9 사이의 숫자를 입력해주세요,",
    OVERLAP_ERROR: "중복없이 숫자를 입력해주세요.",
};

OUTPUT_MESSAGES = {
    GAME_START: "숫자 야구 게임을 시작합니다.",
    GAME_OVER: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
};

module.exports = {
    INPUT_MESSAGES,
    ERROR_MESSAGES,
    OUTPUT_MESSAGES
}