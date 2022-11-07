const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  GETINPUT: '숫자를 입력해주세요 : ',
  THREESTRIKE: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  INPUTERROR: '잘못 입력 하였습니다.',
  RESTARTOREND: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

const COUNTBOARDRESULT = {
  NOTHING: '낫싱',
  NOBALL: strike => `${strike}스트라이크`,
  NOSTRIKE: ball => `${ball}볼`,
  RESULT: (strike, ball) => `${ball}볼 ${strike}스트라이크`,
};

module.exports = { MESSAGE, COUNTBOARDRESULT };
