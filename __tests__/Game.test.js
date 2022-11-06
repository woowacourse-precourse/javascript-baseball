const Game = require("../src/Game");

describe('Game class 테스트',()=>{
  test('compare메소드: compare Computer Number and User Number', () => {
    const game = new Game();
    const threeStrike = game.compare([1,2,3], [1,2,3]);
    const twoBallOneStrike = game.compare([1,2,3], [1,3,2]);
    const threeBall = game.compare([1,2,3], [3,1,2]);
    const nothing = game.compare([1,2,3], [4,5,6]);
    expect(threeStrike).toEqual({ball:0, strike:3});
    expect(twoBallOneStrike).toEqual({ball:2, strike:1});
    expect(threeBall).toEqual({ball:3, strike:0});
    expect(nothing).toEqual({ball:0, strike:0});
  })

})