const { Console, Random } = require('@woowacourse/mission-utils');
const { ANSWER, OPTION } = require('./constants/constants');

class Game {
  makeAnswer() {
    const randomNumList = [];
    while (randomNumList.length < ANSWER.LENGTH) {
      const number = Random.pickNumberInRange(ANSWER.MIN, ANSWER.MAX);
      if (!randomNumList.includes(number)) {
        randomNumList.push(number);
      }
    }
    return randomNumList.join('');
  }

  validateInput(userInput) {
    return (
      userInput.length === ANSWER.LENGTH &&
      Boolean(userInput.match(/^[1-9]+$/)) &&
      new Set(userInput.split('')).size === ANSWER.LENGTH
    );
  }

  getResult(answer, userNumber) {
    const userNumberArr = [...userNumber];
    const result = userNumberArr.reduce(
      ({ strikeCnt, ballCnt }, curNum, curIndex) => {
        const index = answer.indexOf(curNum);
        if (index === -1) return { strikeCnt, ballCnt };
        else if (index === curIndex)
          return { strikeCnt: strikeCnt + 1, ballCnt };
        else return { strikeCnt, ballCnt: ballCnt + 1 };
      },
      {
        strikeCnt: 0,
        ballCnt: 0,
      }
    );
    return result;
  }

  printResult(result) {
    const { strikeCnt, ballCnt } = result;
    let message = '';
    if (strikeCnt === 0 && ballCnt === 0) {
      Console.print('낫싱');
      return;
    }
    if (ballCnt) {
      message += `${ballCnt}볼 `;
    }
    if (strikeCnt) {
      message += `${strikeCnt}스트라이크`;
    }
    Console.print(message);
  }

  progress(answer) {
    Console.readLine('숫자를 입력해주세요 : ', (userNumber) => {
      if (!this.validateInput(userNumber)) {
        throw new Error('유효하지 않은 값이 입력되어 게임이 종료됩니다.');
      }
      const result = this.getResult(answer, userNumber);
      this.printResult(result);

      if (result.strikeCnt === ANSWER.LENGTH) {
        Console.print(
          `${ANSWER.LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`
        );
        this.askRestart();
      } else {
        this.progress(answer);
      }
    });
  }

  start() {
    const answer = this.makeAnswer();
    this.progress(answer);
  }

  askRestart() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (userInput) => {
        if (userInput === OPTION.RESTART) {
          return this.start();
        } else if (userInput === OPTION.END) {
          return this.end();
        } else {
          throw new Error('유효하지 않은 값이 입력되어 게임이 종료됩니다.');
        }
      }
    );
  }

  end() {
    Console.close();
  }
}

module.exports = Game;
