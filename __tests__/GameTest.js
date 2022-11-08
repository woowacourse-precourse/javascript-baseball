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
});
