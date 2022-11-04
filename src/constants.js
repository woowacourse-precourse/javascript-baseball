const START_MESSAGE = '숫자 야구 게임을 시작합니다.';
const INPUT_USER_NUM_MESSAGE = '숫자를 입력하세요';
const ERROR_MESSAGE = '알맞은 숫자를 입력하지않아 프로그램을 종료합니다';
const USER_INPUT_FEEDBACK_MESSAGE = answer => `숫자를 입력해주세요 : ${answer}`;
const NUMBER_RANGE = {
	MIN: 1,
	MAX: 9,
};
const NUMBER_LENGTH = 3;
const SHOULD_NOT_INCLUDE_NUMBER = '0';
const THREE_STRIKE_MESSAGE = '3스트라이크';
const GAME_END_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
const GAME_RESTART_MESSAGE = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';
const RESTART_ANSWER = {
	YES: '1',
	NO: '2',
};
const RESTART_ERROR_MESSAGE = '1 또는 2를 입력하세요';
const SCORE_START_NUMBER = 0;
const RESULT_MESSAGES = {
	NOTHING: '낫싱',
	ONLY_BALL: ballScore => `${ballScore}볼`,
	ONLY_STRIKE: strikeScore => `${strikeScore}스트라이크`,
	BALL_AND_STRIKE: ({ ballScore, strikeScore }) => `${ballScore}볼 ${strikeScore}스트라이크`,
};

module.exports = {
	START_MESSAGE,
	SHOULD_NOT_INCLUDE_NUMBER,
	NUMBER_RANGE,
	NUMBER_LENGTH,
	ERROR_MESSAGE,
	INPUT_USER_NUM_MESSAGE,
	USER_INPUT_FEEDBACK_MESSAGE,
	THREE_STRIKE_MESSAGE,
	GAME_END_MESSAGE,
	GAME_RESTART_MESSAGE,
	RESTART_ANSWER,
	RESTART_ERROR_MESSAGE,
	SCORE_START_NUMBER,
	RESULT_MESSAGES,
};
