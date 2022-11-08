const constants = require('./constants');
const MissionUtils = require('@woowacourse/mission-utils');

class numberInput {

  gameLogic(computer) {
    let strike = 0;
    let ball = 0;
    let nothing = 0;

    const validationCheck = /[^1-9]/g; //숫자가 1~9인지에 대한 정규식

    MissionUtils.Console.readLine(constants.START, (answer) => {
      //숫자가 3자리수 이상인 경우 예외 처리
      if (answer.length > 3) throw '입력 값은 세 자리 숫자입니다';
      if (validationCheck.test(answer)) throw '1-9까지 숫자만 입력하세요';

      //while문과 if문은 depth가 2 이상이므로 map을 활용
      computer.map((number, i) => {
        if (answer.includes(number)) {
          answer.indexOf(number) === i ? strike++ : ball++;
        } else {
          nothing++;
        }
      });
    });

    return { strike, ball, nothing };
  }

  gamePlay(computer) {
    const strike = this.gameLogic(computer).strike;
    const ball = this.gameLogic(computer).ball;
    const nothing = this.gameLogic(computer).nothing;

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
    return this.gamePlay(computer);
  }
}

const gamePlayLogic = new numberInput();
module.exports = gamePlayLogic;
