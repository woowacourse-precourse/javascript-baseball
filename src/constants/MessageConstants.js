const MESSAGE = {
    START: "숫자 야구 게임을 시작합니다.",
    INPUT: "숫자를 입력해주세요 : ",
    RESTARTOREND: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", 
    END: "숫자 야구 게임을 종료합니다."
};

const ERROR_MESSAGE = {
    LENGTH_ERROR: "3자리의 숫자를 입력하지 않아 에러가 발생하였습니다.",
    TYPE_ERROR: "숫자를 입력하지 않아 에러가 발생하였습니다.",
    OVERLAP_ERROR: "중복되는 숫자가 있어 에러가 발생하였습니다.",
    ZERO_ERROR: "1부터 9사이의 숫자가 아닌 0이 포함되어 있어 에러가 발생하였습니다.",
    WRONG_INPUT_ERROR: "잘못된 값을 입력하여 에러가 발생하였습니다."
};

const RESULT_MESSAGE = {
    NOTHING: "낫싱",
    SUCCESS: "3스트라이크 \n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    STRIKE: "스트라이크",
    BALL: "볼"
}

module.exports = { MESSAGE, ERROR_MESSAGE, RESULT_MESSAGE };