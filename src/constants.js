const GAME_DIRECTION_MESSAGE = {
	OPENING: '숫자 야구 게임을 시작합니다.',
	INPUT: '숫자를 입력해주세요 : ',
	CORRECT_ANSWER: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
	END: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
};

const RESULT_MESSAGE = {
	NOTHING: '낫싱',
	STRIKE: '스트라이크',
	BALL: '볼',
};

const ERROR_MESSAGE = {
	TYPE_CHECK: '숫자만 입력해주세요',
	LENGTH_CHECK: '3자리 숫자를 입력해주세요',
	DUPLICATE_CHECK: '중복된 숫자가 있습니다.',
	INPUT_CHECK: '1과 2 중 하나만 입력해주세요.',
};

module.exports = {
	GAME_DIRECTION_MESSAGE,
	RESULT_MESSAGE,
	ERROR_MESSAGE,
};
