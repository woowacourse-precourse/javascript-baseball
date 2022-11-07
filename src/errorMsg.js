const ERROR_MSG = {
	LEN_ERR: "데이터 길이 에러",
	TYPE_ERR: "숫자가 아닌 다른 문자 입력 에러",
	MULTI_ERR: "중복된 입력 에러",
};

const GAME_STATE_MSG = {
	NOTTHING: "낫싱",
	END: "게임 종료",
	NEWGAME: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
	READY: "숫자를 입력해주세요 :",
};

module.exports = {
	ERROR_MSG,
	GAME_STATE_MSG,
};
