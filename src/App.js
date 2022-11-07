const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computer = [];
    let strikeCount;
    let ballCount;
    let nothing;

    // 컴퓨터의 랜덤한 숫자 3개
    function computerNumbers() {
      while (computer.length < 3) {
        let number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
    }

    // 숫자 입력
    function numbersInput() {
      MissionUtils.Console.readLine("숫자를 입력해주세요", (answer) => {
        strikeCount = 0;
        ballCount = 0;
        nothing = 0;
        // 예외 처리
        if (answer.length > 3) {
          throw "잘못된 값 입력";
        }
        // 스트라이크, 볼, 낫싱 체크
        computer.map((e, i) => {
          if (answer.includes(e)) {
            return answer.indexOf(e) === i ? strikeCount++ : ballCount++;
          } else nothing++;
        });
      });
    }

    // 게임 실행
    function gamePlay() {
      numbersInput();
      // 3스트라이크일 경우
      if (strikeCount === 3) {
        MissionUtils.Console.print("3스트라이크");
        return;
      }
      // 아무것도 해당이 안될 경우
      else if (nothing === 3) {
        MissionUtils.Console.print("낫싱");
      } else if (ballCount > 0 || strikeCount > 0) {
        MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
      }
      return gamePlay();
    }

    // 게임 재실행, 종료
    function gameRestart() {
      MissionUtils.Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요",
        (answer) => {
          if (parseInt(answer) === 1) {
            computer.splice(0, computer.length);
            computerNumbers();
            gamePlay();
            gameRestart();
          } else if (parseInt(answer) === 2) {
            MissionUtils.Console.print("게임 종료");
            return MissionUtils.Console.close();
          }
        }
      );
    }

    computerNumbers();
    gamePlay();
    gameRestart();
  }
}

module.exports = App;
