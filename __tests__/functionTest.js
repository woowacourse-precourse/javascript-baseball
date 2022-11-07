const App = require("../src/App");
const app = new App();

describe("기능 확인 테스트", () => {

  test("올바른 player 일 경우 true, 아니면 false 반환", () => {
    const player = ['123','1',' 1','a1','1234','112'];
    const result = player.map((str)=>app.isVaildPlayer(str));

    expect(result).toEqual([true,true,false,false,false,false]);
  });

  test("올바른 option 일 경우 true, 아니면 false 반환", () => {
    const option = ['1','11',' 1','2','22',' 2'];
    const result = option.map((str)=>app.isVaildOption(str));

    expect(result).toEqual([true,false,false,true,false,false]);
  });

  test("computer : 숫자문자로 이루어진 길이3의 배열", () => {
    const computer = app.makeComputer();
    const computer_length = computer.length;
    const numbers = ['1','2','3','4','5','6','7','8','9'];
    let result;
    computer.forEach((num)=>{
      result = numbers.includes(num)
    })

    expect(computer_length).toEqual(3);
    expect(result).toEqual(true);
  })

  test("스트라이크/볼 횟수 반환", () => {
    const computers = [['1','4','5'],['3','6','7'],['7','3','1']]
    const players = ['154','37','1']

    let strikes = [];
    players.forEach((player, idx)=>{
      strikes.push(app.countStrike(player, computers[idx]))
    })

    let balls = [];
    players.forEach((player, idx)=>{
      balls.push(app.countBall(player, computers[idx], strikes[idx]))
    })

    expect(strikes).toEqual([1,1,0]);
    expect(balls).toEqual([2,1,1]);
  })

  test("player가 숫자를 다 맞췄는지 반환", ()=>{
    const result1 = app.playerWin(1);
    const result2 = app.playerWin(3);
    
    expect(result1).toEqual(false);
    expect(result2).toEqual(true);
  })
});
