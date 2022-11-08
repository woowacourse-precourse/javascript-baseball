const MESSAGE = {
    START: '숫자 야구 게임을 시작합니다.',
    END: '3자리수를 맞췄습니다. 게임 끝!!',
    USER_ANSWER: '숫자를 입력해주세요 : ',
    RESTART:'게임을 다시 시작하시려면 1, 끝내시려면 2를 입력하세요',
    CLOSE :'게임 종료',
  
    BALL: {
      1: '1볼',
      2: '2볼',
      3: '3볼',
    },
  
    STRIKE: {
      1: '1스트라이크',
      2: '2스트라이크',
      3: '3스트라이크',
    },
  };

  const REPLAY = {
    RESTART : '1',
    EXIT : '2',
  }
  
  const WRONG_INPUT_ALERT = {
    NOT_NUMBER: '숫자 이외의 자료형이 포함돼있습니다.\n숫자만 입력해주세요.',
    NOT_POSITIVE: '입력값이 양수가 아닙니다.\n양수 값만 입력해주세요.',
    NOT_THREE_DIGITS: '자릿수가 3이 아닙니다.\n세자리 수를 입력하세요.',
    NOT_UNIQUE_NUMBER:
      '입력값에 중복이 있습니다.\n중복되지 않은 세자리 수를 입력해주세요.',
    INCLUDES_ZERO:
      '입력값이 0을 포함하고 있습니다.\n1-9 사이의 값을 입력해주세요.',
    NOT_ONE_OR_TWO:
      '잘못된 입력입니다.\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  };
  
  module.exports = { MESSAGE, WRONG_INPUT_ALERT, REPLAY };
  