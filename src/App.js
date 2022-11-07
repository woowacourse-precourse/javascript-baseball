const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const Console = MissionUtils.Console;
    const Random = MissionUtils.Random;

    const tries = [];
    let targetNums;

    const randomPick = () => {
      let result = [];
      while (result.length < 3) {
        const number = Random.pickNumberInRange(1, 9);
        if (!result.includes(number)) {
          result.push(number);
        }
      }
      return result.join("");
    };

    const enterNumber = () => {
      Console.readLine("숫자를 입력해주세요 : ", (answer) => {
        if (targetNums.toString() === answer) {
          return (
            Console.print("3스트라이크"), Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료"), reStartOrEnd()
          );
        }
        if (!checkError(answer)) {
          Console.print(checkNumbers(answer));
          enterNumber();
        }
      });
    };

    const checkError = (input) => {
      const regExp = /[^1-9]/g;
      if (regExp.test(input)) {
        throw "1 부터 9까지의 3자리 숫자만 입력해주세요.";
      }
      if (input.length !== 3) {
        throw "3자리 숫자를 입력해주세요";
      }
      if (new Set(input).size !== 3) {
        throw "중복되지 않게 입력해 주세요";
      }
      if (tries.includes(input)) {
        throw "이미 시도한 값입니다.";
      }
      return false;
    };

    const checkNumbers = (answer) => {
      let strike = 0;
      let ball = 0;
      let result = "낫싱";

      for (let i = 0; i < answer.length; i++) {
        const index = targetNums.indexOf(answer[i]);
        if (index === i) {
          strike += 1;
        }
        if (index > -1 && index !== i) {
          ball += 1;
        }
      }

      tries.push(answer);

      if (strike !== 0 || ball !== 0) {
        result = `${ball}볼 ${strike}스트라이크`;
      }

      return result;
    };

    const startGame = () => {
      targetNums = randomPick();
      enterNumber();
    };

    Console.print("숫자야구 게임을 시작합니다.");
    startGame();
  }
}

module.exports = App;
