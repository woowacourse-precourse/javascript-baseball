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
  }
}

module.exports = App;
