const GameManager = require('../src/GameManager');

describe('게임 진행 테스트', () => {
  test('컴퓨터에 1~9 서로 다른 3자리 수 넣기 테스트', () => {
    const answerArr = [];

    for (let caseNumber = 0; caseNumber < 4; caseNumber += 1) {
      const gameManager = new GameManager();
      answerArr.push(gameManager.answer);
    }

    answerArr.forEach((answer) => {
      expect([...new Set(answer)]).toHaveLength(3);
      expect(answer.join('')).toMatch(/[1-9]/);
    });
  });

  test('컴퓨터의 숫자와 플레이어가 입력한 숫자 비교 테스트', () => {
    const gameManager = new GameManager();
    gameManager.answer = [1, 4, 7];
    const answers = [
      gameManager.compare(['2', '5', '8']),
      gameManager.compare(['1', '4', '9']),
      gameManager.compare(['4', '1', '7']),
      gameManager.compare(['1', '4', '7']),
      gameManager.compare(['4', '7', '1']),
    ];

    const results = [
      { ballCount: 0, strikeCount: 0 },
      { ballCount: 0, strikeCount: 2 },
      { ballCount: 2, strikeCount: 1 },
      { ballCount: 0, strikeCount: 3 },
      { ballCount: 3, strikeCount: 0 },
    ];

    answers.forEach((answer, index) => {
      expect(answer).toEqual(results[index]);
    });
  });
});
