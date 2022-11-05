const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('컴퓨터 숫자 생성', () => {
  afterEach(() => {
    MissionUtils.Console.close();
  });

  test('숫자의 갯수는 세 개이다.', () => {
    const randoms = ['1', '1', '4', '5', '6'];

    mockRandoms(randoms);

    const app = new App();
    app.setComputerNumbers();

    expect(app.computerNumbers).toHaveLength(3);
  });

  test('서로 다른 임의의 수로 구성되어 있다', () => {
    const randoms = ['1', '1', '4', '5'];

    mockRandoms(randoms);

    const app = new App();
    app.setComputerNumbers();

    expect(app.computerNumbers).toStrictEqual(['1', '4', '5']);
  });
});
