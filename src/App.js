const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  play() {
    // 랜덤으로 컴퓨터의 3자리 수 만드는 기능
    let RandomNumber = "";

    const make_Random = () => {
      let arr = [];
      while (arr.length < 3) {
        let num = Random.pickNumberInRange(1, 9);
        if (!arr.includes(num)) arr.push(num);
      }
      RandomNumber = arr.join("");
    };

    make_Random();

    // 게임을 시작하는 기능
    Console.print("숫자 야구 게임을 시작합니다.");

    // (게임 진행시) 게임플레이어의 값이 잘못된 값인지 확인하는 유효성 검사 기능
    const check_inputError = (data) => {
      if (data.length !== 3) throw new Error();
      if (data[0] === data[1] || data[1] === data[2] || data[0] === data[2])
        throw new Error();
      for (let i = 0; i < 3; i++) {
        if (typeof Number(data[i]) !== "number") throw new Error();
      }
      return data;
    };

    // 게임플레이어가 입력한 값과 컴퓨터의 수를 비교하여 볼과 스트라이크로 결과 메세지를 만드는 기능
    const make_message = (obj) => {
      if (obj["볼"] && obj["스트라이크"])
        return `${obj["볼"]}볼 ${obj["스트라이크"]}스트라이크`;
      else if (obj["볼"]) return `${obj["볼"]}볼`;
      else if (obj["스트라이크"]) return `${obj["스트라이크"]}스트라이크`;
      else return "낫싱";
    };

    // 게임플레이어가 입력한 값과 컴퓨터의 수를 비교하는 기능
    const check_match = (data) => {
      let obj = { 볼: 0, 스트라이크: 0 };
      for (let i = 0; i < data.length; i++) {
        if (RandomNumber[i] === data[i]) obj["스트라이크"]++;
        else if (RandomNumber.includes(data[i])) obj["볼"]++;
      }
      let message = make_message(obj);
      return message;
    };

    // 게임플레이어로부터 값을 입력받는 기능
    const input = () => {
      Console.readLine("숫자를 입력해주세요 : ", (answer) => {
        const cheked_answer = check_inputError(answer);
        const message = check_match(cheked_answer);
        Console.print(message);
        nextLevel(message);
      });
    };

    // 결과 메세지에 따라 재시작 여부를 물을지 다시한번 입력값을 받을지 정하는 기능
    const nextLevel = (str) => {
      if (str === "3스트라이크") {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        restart();
      } else input();
    };

    // (게임 재시작시) 게임플레이어의 값이 잘못된 값인지 확인하는 유효성 검사 기능 및 재시작 여부(1또는 2)에 따라 게임을 종료하거나 재실행 하는 기능
    const check_restart = (str) => {
      if (str === "1") {
        make_Random();
        input();
      } else if (str === "2") Console.close();
      else throw new Error();
    };

    // 게임 종료 후 재시작 여부(1 또는 2)를 묻는 기능
    const restart = () => {
      Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
        (answer) => {
          check_restart(answer);
        }
      );
    };

    // 게임플레이어의 값이 잘못되었을 때 에러문을 throw하는 기능
    try {
      input();
    } catch (e) {
      throw new Error();
    }
  }
}

module.exports = App;
