const App = require("../src/App")
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
    MissionUtils.Console.readLine = jest.fn();
    answers.reduce((acc, input) => {
      return acc.mockImplementationOnce((question, callback) => {
        callback(input);
      });
    }, MissionUtils.Console.readLine);
};
  
const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
};

test("사용자 입력받기 예외 테스트 5가지", () => {
    const randoms = [1, 3, 5];
    const answers = ["","a12","112","102","1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
});
  
test("다른 자리 같은 수 일 때, hint 볼이 나오는지 테스트",()=>{
  const app = new App();
  const testResult1 = app.getHint([1,2,3],'451');
  expect(testResult1).toEqual('1볼');
  const testResult2 = app.getHint([1, 2, 3], '431');
  expect(testResult2).toEqual('2볼');
  const testResult3 = app.getHint([1, 2, 3], '312');
  expect(testResult3).toEqual('3볼');
});

test('같은 자리 같은 수 일 때, hint strike가 나오는지 테스트', () => {
  const app = new App();
  const testResult1 = app.getHint([1, 2, 3], '145');
  expect(testResult1).toEqual('1스트라이크');
  const testResult2 = app.getHint([1, 2, 3], '127');
  expect(testResult2).toEqual('2스트라이크');
  const testResult3 = app.getHint([1, 2, 3], '123');
  expect(testResult3).toEqual('3스트라이크');
});

test('strike,ball 같이 있을 때 hint가 맞는지 테스트', () => {
  const app = new App();
  const testResult1 = app.getHint([1, 2, 3], '134');
  expect(testResult1).toEqual('1볼 1스트라이크');
  const testResult2 = app.getHint([1, 2, 3], '321');
  expect(testResult2).toEqual('2볼 1스트라이크');
});