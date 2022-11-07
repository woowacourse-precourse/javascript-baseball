const MissionUtils = require("@woowacourse/mission-utils");

class App {

  computerMakeNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  findStrike(computerAns, ans) {
    let cnt = 0;
    for (let i = 0; i < 3; i++) {
      if (computerAns[i] == ans[i]) {
        cnt++;
      }
    }
    return cnt;
  }
  findBall(computerAns, ans) {
    let cnt = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (computerAns[i] == ans[j] && i != j) {
          cnt++;
        }
      }
    }
    return cnt;
  }

  close() {
    MissionUtils.close();
  }

  play() {
    let intro = 0;

    let flag = 0;
    if (intro == 0) {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      intro = 1;
    }
    let finished=0;
    // 숫자 랜덤화
    let computerAnswer = this.computerMakeNum();


    while (flag == 0) {

      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
        // 예외사항들 
        if (Number.isNaN(parseInt(answer))) {
          throw "숫자만 입력해주세요";
        }

        if (answer.length != 3) {
          throw " 숫자 3개를 입력해주세요";
        }
        if (answer < 0) {
          throw new RangeError(answer);
        }
        if (new Set(answer).size != 3) {
          throw "중복된 숫자가 존재합니다";
        }
        // MissionUtils.Console.print(`입력 : ${answer}`);

        // 스트라이크 찾기
        let cntStrike = this.findStrike(computerAnswer, answer);
        // 볼 찾기
        let cntBall = this.findBall(computerAnswer, answer);

        //메세지 출력
        let printMessage = "";
        if (cntBall) printMessage += `${cntBall}볼`;
        if (cntStrike) printMessage += ` ${cntStrike}스트라이크`;

        if (printMessage == "") {
          MissionUtils.Console.print("낫싱");
        }
        else {
          MissionUtils.Console.print(printMessage);
        }

        if (cntStrike == 3) {
          finished=1;
          MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (order) => {
            if (order == 1) {
              computerAnswer = this.computerMakeNum();
              flag = 0;
            }
            else {
              flag = 1;
            }
          })
        }

      });

    }
  }

}

module.exports = App;
