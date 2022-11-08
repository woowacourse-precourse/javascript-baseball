const MissionUtils = require('@woowacourse/mission-utils');
const constants = require('./constants');

class App {
  play() {
    let computer = [];
    let strike;
    let ball;
    let nothing;

    // 컴퓨터의 랜덤한 숫자 3개
    function computerNumbers() {
      computer = [];
      while (computer.length < 3) {
        let number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          //중복되지 않는 숫자만 뽑기
          computer.push(number);
        }
      }
    }

    function numberInput() {
      strike = 0;
      ball = 0;
      nothing = 0;

      MissionUtils.Console.readLine(constants.START, (answer) => {
        //숫자가 3자리수 이상인 경우 예외 처리
        if (answer.length > 3) throw '입력 값이 잘못됨';

        //while문과 if문은 depth가 2 이상이므로 map을 활용
        computer.map((number, i) => {
          if (answer.includes(number)) {
            return answer.indexOf(number) === i ? strike++ : ball++;
          } else {
            nothing++;
          }
        });
      });
    }

    function gamePlay() {
      numberInput();
      if (strike === 3) {
        MissionUtils.Console.print(constants.ALL_STRIKE);
        MissionUtils.Console.print(constants.CORRECT);
        return;
      } else if (nothing === 3) {
        MissionUtils.Console.print(constants.NOTING);
      } else {
        MissionUtils.Console.print(
          `${ball}${constants.BALL} ${strike}${constants.STRIKE}`
        );
      }
      return gamePlay();
    }

    function gameRestart() {
      MissionUtils.Console.readLine(constants.MESSAGE, (answer) => {
        if (parseInt(answer) === 1) {
          computerNumbers();
          gamePlay();
          gameRestart();
        } else if (parseInt(answer) === 2) {
          MissionUtils.Console.print(constants.END_MESSAGE);
          return;
        }

        //종료메시지가 1이나 2가 아닌 경우
        else {
          throw '종료 값이 잘못됨';
        }
      });
    }

    computerNumbers();
    gamePlay();
    gameRestart();
  }
}

module.exports = App;
