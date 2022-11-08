/* eslint-disable no-undef */
/* eslint-disable import/order */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */

const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

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

describe('사용자 입력 테스트', () => {
  test('사용자가 3자리 숫자 초과 입력하는 경우', () => {
    const computerRandomNumbers = [1, 3, 5];
    const userInputNumbers = ['1234'];

    mockRandoms(computerRandomNumbers);
    mockQuestions(userInputNumbers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자가 아무것도 입력하지 않는 경우 - undefined', () => {
    const computerRandomNumbers = [1, 3, 5];
    const userInputNumbers = [undefined];

    mockRandoms(computerRandomNumbers);
    mockQuestions(userInputNumbers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("사용자가 아무것도 입력하지 않는 경우 - '' ", () => {
    const computerRandomNumbers = [1, 3, 5];
    const userInputNumbers = [''];

    mockRandoms(computerRandomNumbers);
    mockQuestions(userInputNumbers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("사용자가 공백을 입력한 경우 - ' ' ", () => {
    const computerRandomNumbers = [1, 3, 5];
    const userInputNumbers = [' '];

    mockRandoms(computerRandomNumbers);
    mockQuestions(userInputNumbers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자가 숫자가 아닌 다른 문자를 입력한 경우 ', () => {
    const computerRandomNumbers = [1, 3, 5];
    const userInputNumbers = ['e!하'];

    mockRandoms(computerRandomNumbers);
    mockQuestions(userInputNumbers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자가 같은 숫자로 구성된 문자를 입력한 경우 ', () => {
    const computerRandomNumbers = [1, 3, 5];
    const userInputNumbers = ['111'];

    mockRandoms(computerRandomNumbers);
    mockQuestions(userInputNumbers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자가 입력한 값에 같은 숫자가 있는 경우 ', () => {
    const computerRandomNumbers = [1, 3, 5];
    const userInputNumbers = ['113'];

    mockRandoms(computerRandomNumbers);
    mockQuestions(userInputNumbers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자가 입력한 각 값 범위가 1~9가 아닐 경우 ', () => {
    const computerRandomNumbers = [1, 3, 5];
    const userInputNumbers = ['013'];

    mockRandoms(computerRandomNumbers);
    mockQuestions(userInputNumbers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  //   test('split 메서드로 주어진 값을 구분', () => {
  //     const input = '1,2';
  //     const result = input.split(',');

  //     expect(result).toContain('2', '1');
  //     expect(result).toContainEqual('1', '2');
  //   });
});
