const START_MESSAGE = `숫자 야구 게임을 시작합니다.`;
const INPUT_USER_NUM_MESSAGE = '숫자를 입력하세요';
const ERROR_MESSAGE = '알맞은 숫자를 입력하지않아 프로그램을 종료합니다';
const USER_INPUT_FEEDBACK_MESSAGE = answer => `숫자를 입력해주세요 : ${answer}`;
const NUMBER_RANGE = {
	MIN: 1,
	MAX: 9,
};
const NUMBER_LENGTH = 3;
const SHOULD_NOT_INCLUDE_NUMBER = '0';

module.exports = {
	START_MESSAGE,
	SHOULD_NOT_INCLUDE_NUMBER,
	NUMBER_RANGE,
	NUMBER_LENGTH,
	ERROR_MESSAGE,
	INPUT_USER_NUM_MESSAGE,
	USER_INPUT_FEEDBACK_MESSAGE,
};
