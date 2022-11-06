//입력 예외사항: 알파벳, 알파벳+숫자, 한글 특문 영어 + 숫자, 숫자만, 정수, 실수, 0포함 자연수
//+입력 길이, 자연수이지만 중복되는 수가 있을 때
//볼 스트라이크 낫싱 제대로 나오는지
//예외 사항 입력시 잘 throw되는지

//일단 각 기능을 구현한 함수들을 모듈로 분리하고, require로 호출해서 확인하는 식으로 해야 할 듯.
const VALIDATIONCHECK = require('../src/gameSource/inputCheck');
const CONTROLLER = require('../src/gameSource/controller');

describe('기능 목록 테스트', () => {
  test('컴퓨터(상대방)의 숫자 생성 체크', () => {
    const result = CONTROLLER.makeAnswerWithThreeUniqueNumbers();
    expect(/[123456789]{3}/.test(String(result))).toEqual(true);
  })

  test('입력에 숫자 외의 문자가 들어 있을 경우', () => {
    const input = 'abcd';
    const result = VALIDATIONCHECK.checkUserInputDuringGamePlay(input);
    expect(result).toEqual(false);
  })

  test('입력의 길이가 3이 아닐 경우', () => {
    const input = 'abcd';
    const result = VALIDATIONCHECK.checkUserInputDuringGamePlay(input);
    expect(result).toEqual(false);
  })

  test('게임 종료 후 입력이 1 또는 2가 아닌 경우', () => {
    const input = 'abcd';
    const result = VALIDATIONCHECK.checkUserInputDuringGamePlay(input);
    expect(result).toEqual(false);
  })

  test('입력이 숫자인 경우', () => {
    const input = 'abcd';
    const result = VALIDATIONCHECK.checkUserInputDuringGamePlay(input);
    expect(result).toEqual(false);
  })

  test('입력이 세 자리의 자연수이나 중복되는 숫자가 있을 경우', () => {
    const input = 'abcd';
    const result = VALIDATIONCHECK.checkUserInputDuringGamePlay(input);
    expect(result).toEqual(false);
  })

  test('볼, 스트라이크, 낫싱 체크', () => {
    const input = 'abcd';
    const result = VALIDATIONCHECK.checkUserInputDuringGamePlay(input);
    expect(result).toEqual(false);
  })

  test('잘못된 입력을 했을 때의 에러 체크', () => {
    const input = 'abcd';
    const result = VALIDATIONCHECK.checkUserInputDuringGamePlay(input);
    expect(result).toEqual(false);
  })

});