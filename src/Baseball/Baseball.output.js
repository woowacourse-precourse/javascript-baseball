const MissionUtils = require('@woowacourse/mission-utils');

class BaseballOutput {
  static start() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  static end() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료\n');
  }

  static getNumber() {
    let result = '';

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      result = answer;
      MissionUtils.Console.close();
    });

    return result;
  }

  static result(baseBallDto) {
    const { ball, strike } = baseBallDto;
    let returnString = '';

    if (ball > 0) {
      returnString += `${ball}볼 `;
    }
    if (strike > 0) {
      returnString += `${strike}스트라이크`;
    }
    if (returnString == '') {
      returnString += '낫싱';
    }

    MissionUtils.Console.print(returnString.trim());
  }
  static restart() {
    let result = '';

    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (answer) => {
        result = answer;
        MissionUtils.Console.close();
      },
    );

    return result;
  }
}

module.exports = BaseballOutput;
