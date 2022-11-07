
const MissionUtils = require('@woowacourse/mission-utils');

const GAME_START = 1;
const GAME_END = 2;
const ERROR = -1;

class App {
  #computerAnswer = [];
  #userInput;
  #strikeCount = 0;
  #ballCount = 0;

  play() {
    this.#computerAnswer = this.#gameStart();

    this.#inputFromUser();
  }

  #gameStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  #gameEnd() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (replay) => {
        if (Number(replay) === GAME_START) {
          return this.play();
        } else if (Number(replay) === GAME_END) {
        } else {
          MissionUtils.Console.print('잘못 입력하셨습니다.');
          return this.#gameEnd();
        }
        MissionUtils.Console.close();
      }
    );
    return;
  }

  #inputFromUser() {
    //출력 중간에 입력값이 보이는 에러가 있어 개행문자를 추가했습니다.
    //ex) 숫자를 입력해345요
    let input = 0;
    [this.#strikeCount, this.#ballCount] = [0, 0];
    MissionUtils.Console.readLine('숫자를 입력해주세요 : \n', (answer) => {
      input = answer;

      //예외 발생 시 다시 입력 처리
      if (this.#inputExcept(input) === ERROR) {
        return this.#inputFromUser();
      }

      this.#userInput = this.#inputToArray(input);
      this.#compareTwoArray();
      this.#printStrikeBall();
      if (this.#strikeCount !== 3) {
        return this.#inputFromUser();
      }

      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.#gameEnd();
    });

    return;
  }

  #printStrikeBall() {
    const strikeStr = this.#strikeCount + ' 스트라이크';
    const ballStr = this.#ballCount + ' 볼';
    const outStr = '아웃';

    if (this.#ballCount === 0 && this.#strikeCount !== 0) {
      MissionUtils.Console.print(strikeStr);
    } else if (this.#ballCount !== 0 && this.#strikeCount === 0) {
      MissionUtils.Console.print(ballStr);
    } else if (this.#ballCount === 0 && this.#strikeCount === 0) {
      MissionUtils.Console.print(outStr);
    } else {
      MissionUtils.Console.print(strikeStr + ballStr);
    }
    return;
  }

  #compareTwoArray() {
    for (let comIdx = 0; comIdx < this.#computerAnswer.length; comIdx++) {
      for (let userIdx = 0; userIdx < this.#userInput.length; userIdx++) {
        this.#compareTwoNumber(comIdx, userIdx);
      }
    }
    return;
  }

  #compareTwoNumber(comIdx, userIdx) {
    if (
      comIdx === userIdx &&
      this.#computerAnswer[comIdx] === this.#userInput[userIdx]
    ) {
      this.#strikeCount++;
    }
    if (
      comIdx !== userIdx &&
      this.#computerAnswer[comIdx] === this.#userInput[userIdx]
    ) {
      this.#ballCount++;
    }
    return;
  }

  #inputToArray(input) {
    return input.split('').map((arrData) => Number(arrData));
  }

  #inputExcept(input = '') {
    if (input == '') {
      MissionUtils.Console.print('입력값이 없습니다.');
      return ERROR;
    }

    let numReg = /[0-9]/g;
    if (input.match(numReg) == null) {
      MissionUtils.Console.print('숫자가 아닙니다. ');
      return ERROR;
    }

    if (input.length != 3) {
      MissionUtils.Console.print('세자리 숫자가 아닙니다. ');
      return ERROR;
    }
    return 0;
  }
}

const app = new App();
app.play();

module.exports = App;
