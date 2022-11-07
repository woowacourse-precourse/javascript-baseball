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

});
