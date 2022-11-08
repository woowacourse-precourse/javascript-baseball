const GAME_MESSAGES = {
	START_MESSAGE: '숫자 야구 게임을 시작합니다.',
	INPUT_USER_NUM_MESSAGE: '숫자를 입력해주세요 : ',
	GAME_END_MESSAGE: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
	GAME_RESTART_MESSAGE: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

const ERROR_MESSAGES = {
	RESTART_ERROR_MESSAGE: '1 아니면 2를 입력해주세요.',
    WRONG_NUMBER_ERROR_MESSAGE: '서로 다른 3자리 수를 입력해주세요.',
    NOT_VALID_NUMBER_ERROR_MESSAGE: '1~9 사이의 숫자를 입력하세요.',
};

const HINT_MESSAGES = {
    BALL: ball => `${ball}볼`,
    STRIKE: strike => `${strike}스트라이크`,
	BALL_AND_STRIKE: ({ ball, strike }) => `${ball}볼 ${strike}스트라이크`,
    NOTHING: '낫싱',
};

module.exports = {
	GAME_MESSAGES,
	ERROR_MESSAGES,
	HINT_MESSAGES,
};