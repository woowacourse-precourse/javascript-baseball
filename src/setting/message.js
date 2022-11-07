const START = "숫자 야구 게임을 시작합니다.";
const INPUT_NUMBER = "숫자를 입력해주세요 : ";
const RESTART_OR_EXIT = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
const SUCCESS = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";

const GAME = {
    START,
    INPUT_NUMBER,
    RESTART_OR_EXIT,
    SUCCESS,
};

const WRONG_LENGTH = "ERROR : 숫자의 길이가 올바르지 않습니다.";
const DUPLICATION = "ERROR : 숫자가 중복되었습니다.";
const ISNAN = "ERROR : 숫자를 입력해주세요.";
const ONE_TO_NINE = "ERROR : 1 ~ 9 사이의 값을 입력해주세요.";
const WRONG_CHOICE = "ERROR : 값이 유효하지 않습니다.";

const ERROR = {
    WRONG_LENGTH,
    DUPLICATION,
    ISNAN,
    ONE_TO_NINE,
    WRONG_CHOICE,
};

module.exports = {
    GAME,
    ERROR,
};