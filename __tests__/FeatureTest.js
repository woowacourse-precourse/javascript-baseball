//A worker process has failed to exit gracefully and has been force exited.라는 에러가 뜨는데 테스트는 정상 동작한다.
const VALIDATIONCHECK = require('../src/gameSource/inputCheck');
const CONTROLLER = require('../src/gameSource/controller');
const GAMELOGICS = require('../src/gameSource/gameLogic');
const MissionUtils = require("@woowacourse/mission-utils");


describe('기능 목록 테스트', () => {
  
  test('컴퓨터(상대방)의 숫자 생성 체크', () => {
    const RESULT = CONTROLLER.makeAnswerWithThreeUniqueNumbers();
    expect(/[123456789]{3}/.test(String(RESULT))).toEqual(true);
  })

  test('입력에 숫자 외의 문자가 들어 있을 경우', () => {
    const INPUT_ALPHABET = 'dfs';
    const RESULT_ALPHABET = VALIDATIONCHECK.checkUserInputDuringGamePlay(INPUT_ALPHABET);

    const INPUT_SPECIAL_CHARACTER = '#$*';
    const RESULT_SPECIAL_CHARACTER = VALIDATIONCHECK.checkUserInputDuringGamePlay(INPUT_SPECIAL_CHARACTER);

    const INPUT_ALPHABET_NUMBER = '51s';
    const RESULT_ALPHABET_NUMBER = VALIDATIONCHECK.checkUserInputDuringGamePlay(INPUT_ALPHABET_NUMBER);

    const INPUT_KOREAN = '테스트';
    const RESULT_KOREAN = VALIDATIONCHECK.checkUserInputDuringGamePlay(INPUT_KOREAN);

    expect(RESULT_ALPHABET).toEqual(false);
    expect(RESULT_SPECIAL_CHARACTER).toEqual(false);
    expect(RESULT_ALPHABET_NUMBER).toEqual(false);
    expect(RESULT_KOREAN).toEqual(false);
  })

  test('입력의 길이가 3이 아닐 경우', () => {
    const INPUT_OVER_THREE_LENGTH = '1234';
    const RESULT_OVER_THREE_LENGTH = VALIDATIONCHECK.checkUserInputDuringGamePlay(INPUT_OVER_THREE_LENGTH);

    const INPUT_UNDER_THREE_LENGTH = '1234';
    const RESULT_UNDER_THREE_LENGTH = VALIDATIONCHECK.checkUserInputDuringGamePlay(INPUT_UNDER_THREE_LENGTH);

    expect(RESULT_OVER_THREE_LENGTH).toEqual(false);
    expect(RESULT_UNDER_THREE_LENGTH).toEqual(false);
  })

  test('게임 종료 후 입력이 1 또는 2가 아닌 경우', () => {
    const INPUT_NUMBER = '3';
    const RESULT_NUMBER = VALIDATIONCHECK.checkUserInputAfterGameOver(INPUT_NUMBER);

    const INPUT_ALPHABET = 'd';
    const RESULT_ALPHABET = VALIDATIONCHECK.checkUserInputAfterGameOver(INPUT_ALPHABET);

    const INPUT_KOREAN = 'd';
    const RESULT_KOREAN = VALIDATIONCHECK.checkUserInputAfterGameOver(INPUT_KOREAN);

    const INPUT_SPECIAL_CHARACTER = '#';
    const RESULT_SPECIAL_CHARACTER = VALIDATIONCHECK.checkUserInputAfterGameOver(INPUT_SPECIAL_CHARACTER);

    expect(RESULT_NUMBER).toEqual(false);
    expect(RESULT_ALPHABET).toEqual(false);
    expect(RESULT_KOREAN).toEqual(false);
    expect(RESULT_SPECIAL_CHARACTER).toEqual(false);
  })

  test('입력이 자연수가 아닌 숫자인 경우', () => {
    const INPUT_FLOAT = '1.1';
    const RESULT_FLOAT = VALIDATIONCHECK.checkUserInputDuringGamePlay(INPUT_FLOAT);

    const INPUT_INTEGER = '-19';
    const RESULT_INTEGER = VALIDATIONCHECK.checkUserInputDuringGamePlay(INPUT_INTEGER);

    expect(RESULT_INTEGER).toEqual(false);
    expect(RESULT_FLOAT).toEqual(false);
  })

  test('입력이 세 자리의 자연수이나 중복되는 숫자가 있을 경우', () => {
    const INPUT_FIRST_EQUAL_SECOND = '112';
    const RESULT_FIRST_EQUAL_SECOND = VALIDATIONCHECK.checkUserInputDuringGamePlay(INPUT_FIRST_EQUAL_SECOND);

    const INPUT_SECOND_EQUAL_THIRD = '211';
    const RESULT_SECOND_EQUAL_THIRD = VALIDATIONCHECK.checkUserInputDuringGamePlay(INPUT_SECOND_EQUAL_THIRD);

    const INPUT_THIRD_EQUAL_FIRST = '121';
    const RESULT_THIRD_EQUAL_FIRST = VALIDATIONCHECK.checkUserInputDuringGamePlay(INPUT_THIRD_EQUAL_FIRST);

    expect(RESULT_FIRST_EQUAL_SECOND).toEqual(false);
    expect(RESULT_SECOND_EQUAL_THIRD).toEqual(false);
    expect(RESULT_THIRD_EQUAL_FIRST).toEqual(false);
  })

  test('입력이 세 자리의 자연수이나 0이 있을 경우', () => {
    const INPUT_MIDDLE_ZERO = '102';
    const RESULT_MIDDLE_ZERO = VALIDATIONCHECK.checkUserInputDuringGamePlay(INPUT_MIDDLE_ZERO);

    const INPUT_LAST_ZERO = '120';
    const RESULT_LAST_ZERO = VALIDATIONCHECK.checkUserInputDuringGamePlay(INPUT_LAST_ZERO);

    expect(RESULT_MIDDLE_ZERO).toEqual(false);
    expect(RESULT_LAST_ZERO).toEqual(false);
  })

  test('볼, 스트라이크, 낫싱 체크', () => {
    const INPUT_BALL_AND_STRIKE = '124';
    const ANSWER_BALL_AND_STRIKE = '423'
    const SPY_MODULE = jest.spyOn(MissionUtils.Console, "print");
    SPY_MODULE.mockClear();

    const INPUT_NOTHING = '456';
    const ANSWER_NOTHING = '123'

    const RESULT_BALL_AND_STRIKE = GAMELOGICS.getHintFromInput(INPUT_BALL_AND_STRIKE, ANSWER_BALL_AND_STRIKE);
    const RESULT_NOTHING = GAMELOGICS.getHintFromInput(INPUT_NOTHING, ANSWER_NOTHING);

    expect(SPY_MODULE).toHaveBeenCalledWith(expect.stringContaining('1볼 1스트라이크'));
    expect(SPY_MODULE).toHaveBeenCalledWith(expect.stringContaining('낫싱'));
  })

  test('잘못된 입력을 했을 때의 에러 체크', () => {
    const INPUT = 'abcd';
    const result = () => CONTROLLER.restartGame(INPUT);
    expect(result).toThrow();
  })

});