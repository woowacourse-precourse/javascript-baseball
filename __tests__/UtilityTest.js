const MissionUtils = require('@woowacourse/mission-utils');
const BaseballUtils = require('../src/utils/baseball');

describe('숫자 야구 유틸 테스트', () => {
  afterEach(() => {
    MissionUtils.Console.close();
  });

  test('컴퓨터와 유저 숫자를 비교해 스트라이크와 볼의 갯수를 구한다.', () => {
    const randoms = ['1', '3', '5'];
    const answers = [
      ['7', '8', '9'],
      ['1', '4', '3'],
    ];
    const counts = [
      { ball: 0, strike: 0 },
      { ball: 1, strike: 1 },
    ];

    answers.forEach((answer, i) => {
      const ballStrikeCount = BaseballUtils.countBallAndStrike(randoms, answer);
      expect(ballStrikeCount).toStrictEqual(counts[i]);
    });
  });

  test('스트라이크 볼 갯수로 카운트 메세지를 구한다.', () => {
    const counts = [
      { ball: 0, strike: 0 },
      { ball: 1, strike: 1 },
      { ball: 3, strike: 0 },
      { ball: 0, strike: 1 },
    ];
    const messages = ['낫싱', '1볼 1스트라이크', '3볼', '1스트라이크'];

    counts.forEach((count, i) => {
      const countMessage = BaseballUtils.getCountMessage(count);
      expect(countMessage).toEqual(messages[i]);
    });
  });
});
