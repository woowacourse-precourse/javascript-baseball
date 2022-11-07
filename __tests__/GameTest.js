const GameCalc = require('../src/model/Game');
const answerPhase = require('../src/utils/AnswerPhase');

describe('게임 모델 테스트', () => {
  test('낫싱', () => {
    const game = new GameCalc('123','456');
    expect(game.totalCount()).toEqual([0,0]);
  });

  test('2볼', () => {
    const game = new GameCalc('123','412');
    expect(game.totalCount()).toEqual([0,2]);
  })

  test('2스트라이크', () => {
    const game = new GameCalc('123','128');
    expect(game.totalCount()).toEqual([2,0]);
  })

  test('3스트라이크', () => {
    const game = new GameCalc('123','123');
    expect(game.totalCount()).toEqual([3,0]);
  })

  test('2볼 1스트라이크', () => {
    const game = new GameCalc('123','132');
    expect(game.totalCount()).toEqual([1,2]);
  })
})


describe('게임 출력 테스트', () => {
  test('낫싱', () => {
    expect(answerPhase([0,0])).toEqual('낫싱');
  });

  test('2볼', () => {
    expect(answerPhase([0,2])).toEqual('2볼');
  })

  test('2스트라이크', () => {
    expect(answerPhase([2,0])).toEqual('2스트라이크');
  })

  test('3스트라이크', () => {
    expect(answerPhase([3,0])).toEqual('3스트라이크');
  })

  test('2볼 1스트라이크', () => {
    expect(answerPhase([1,2])).toEqual('2볼 1스트라이크');
  })
})


