const { print, readLine, pickNumberInRange } = require("./Utils");

class App {
  async play() {
    print(`1~9 중 랜덤: ${pickNumberInRange(1, 9)}`);
    print(`1~9 중 랜덤: ${pickNumberInRange(1, 9)}`);
    print(`1~9 중 랜덤: ${pickNumberInRange(1, 9)}`);

    print("숫자 야구 게임을 시작합니다.");

    let nbr;
    nbr = await readLine("숫자를 입력해주세요 : ");
    print(nbr);
    nbr = await readLine("숫자를 입력해주세요 : ");
    print(nbr);
    nbr = await readLine("숫자를 입력해주세요 : ");
    print(nbr);

    print("숫자 야구 게임을 종료합니다.");
  }
}

module.exports = App;

const app = new App();
app.play();
