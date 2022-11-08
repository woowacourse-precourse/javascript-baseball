const Messages = Object.freeze({
    START : "숫자 야구 게임을 시작합니다.",
    INPUT_NUM : "숫자를 입력해주세요 : ",
    BALL : "볼",
    STRIKE : "스트라이크",
    NOTHING : "낫싱",
    SUCCESS : "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    RESTART_OR_CLOSE : "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",

    ERROR : {
        ERROR_RANGE : "ERROR : 1~9 사이의 숫자를 입력해주세요.",
        ERROR_NUMBER_COUNT : "ERROR : 숫자를 3개만 입력해주세요.",
        ERROR_OVERLAP : "ERROR : 서로 다른 숫자를 입력해주세요.",
        ERROR_VALUE : "ERROR : 재시작을 원하면 1을, 종료를 원하면 2를 입력해주세요.\n"
    }
});
  
module.exports = Messages;