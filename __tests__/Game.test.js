const Game = require('../src/Game');
const Message = require('../src/Message');

describe('Game class 테스트', () => {
  test('compare메소드: compare Computer Number and User Number', () => {
    const game = Game;
    const threeStrike = game.compare([1, 2, 3], [1, 2, 3]);
    const twoBallOneStrike = game.compare([1, 2, 3], [1, 3, 2]);
    const threeBall = game.compare([1, 2, 3], [3, 1, 2]);
    const nothing = game.compare([1, 2, 3], [4, 5, 6]);
    expect(threeStrike).toEqual({ ball: 0, strike: 3 });
    expect(twoBallOneStrike).toEqual({ ball: 2, strike: 1 });
    expect(threeBall).toEqual({ ball: 3, strike: 0 });
    expect(nothing).toEqual({ ball: 0, strike: 0 });
  });

  test('isEnd 메소드: 게임이 끝났는지 확인', () => {
    const game = Game;
    const threeStrike = game.isEnd({ ball: 0, strike: 3 });
    const twoBallOneStrike = game.isEnd({ ball: 2, strike: 1 });
    const threeBall = game.isEnd({ ball: 3, strike: 0 });
    const nothing = game.isEnd({ ball: 0, strike: 0 });
    expect(threeStrike).toBeTruthy();
    expect(twoBallOneStrike).toBeFalsy();
    expect(threeBall).toBeFalsy();
    expect(nothing).toBeFalsy();
  });

  test('decideReplay 메소드: 게임을 재시작 할건지확인', () => {
    const game = new Game();
    game.replay = jest.fn();
    game.exit = jest.fn();

    game.decideReplay(Message.REPLAY);
    game.decideReplay(Message.REPLAY);
    game.decideReplay(Message.REPLAY);
    game.decideReplay(Message.REPLAY);

    expect(game.replay).toBeCalled();
    expect(game.replay).toHaveBeenCalledTimes(4);
    expect(game.exit).not.toBeCalled();
  });

  test('askNumber 메소드: 숫자를 입력받는다', () => {
    const game = new Game();
    game.io = {
      input: jest.fn(),
    };
    game.attempt = jest.fn();
    // game.attempt.mockImplementation((input) => {});
    game.askNumber();
    expect(game.io.input).toBeCalled();
  });
});
