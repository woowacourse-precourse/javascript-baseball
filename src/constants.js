const NUMBER_LENGTH = 3;

const SHOULD_NOT_INCLUDE_NUMBER = '0';

const SCORE_START_NUMBER = 0;

const GAME_MESSAGES = {
	START_MESSAGE: '숫자 야구 게임을 시작합니다.',
	INPUT_USER_NUM_MESSAGE: '숫자를 입력하세요',
	USER_INPUT_FEEDBACK_MESSAGE: answer => `숫자를 입력해주세요 : ${answer}`,
	THREE_STRIKE_MESSAGE: '3스트라이크',
	GAME_END_MESSAGE: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
	GAME_RESTART_MESSAGE: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

const ERROR_MESSAGES = {
	WRONG_NUMBER_ERROR_MESSAGE: '알맞은 숫자를 입력하지않아 프로그램을 종료합니다',
	RESTART_ERROR_MESSAGE: '1 또는 2를 입력하세요',
};

const NUMBER_RANGE = {
	MIN: 1,
	MAX: 9,
};

const RESTART_ANSWER = {
	YES: '1',
	NO: '2',
};

const RESULT_MESSAGES = {
	NOTHING: '낫싱',
	ONLY_BALL: ballScore => `${ballScore}볼`,
	ONLY_STRIKE: strikeScore => `${strikeScore}스트라이크`,
	BALL_AND_STRIKE: ({ ballScore, strikeScore }) => `${ballScore}볼 ${strikeScore}스트라이크`,
};

module.exports = {
	GAME_MESSAGES,
	SHOULD_NOT_INCLUDE_NUMBER,
	NUMBER_RANGE,
	NUMBER_LENGTH,
	ERROR_MESSAGES,
	RESTART_ANSWER,
	SCORE_START_NUMBER,
	RESULT_MESSAGES,
};
