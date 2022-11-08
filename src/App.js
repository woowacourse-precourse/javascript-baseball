const MissionUtils = require('@woowacourse/mission-utils');
const constants = require('./constants');

const randomNumberComputer = require('./computerNumbers');

class App {
  play() {
    let computer = [];
    let strike;
    let ball;
    let nothing;

    const validationCheck = /[^1-9]/g; //숫자가 1~9인지에 대한 정규식

    MissionUtils.Console.print(constants.START_MESSAGE);

    //컴퓨터 랜덤 숫자 3개 뽑기
    computer = randomNumberComputer.randomNumber();

    function numberInput() {
      strike = 0;
      ball = 0;
      nothing = 0;

      MissionUtils.Console.readLine(constants.START, (answer) => {
        //숫자가 3자리수 이상인 경우 예외 처리
        if (answer.length !== 3) throw '입력 값은 세 자리 숫자입니다';
        if (validationCheck.test(answer)) throw '1-9까지 숫자만 입력하세요';

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
          computer = randomNumberComputer.randomNumber();
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

    //computer = randomNumberComputer.randomNumber;
    gamePlay();
    gameRestart();
  }
}

module.exports = App;
