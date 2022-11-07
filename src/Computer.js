const { Console, Random } = require('@woowacourse/mission-utils');

class Computer {
  makeAnswer() {
    const randomNumList = [];
    while (randomNumList.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumList.includes(number)) {
        randomNumList.push(number);
      }
    }
    return randomNumList.join('');
  }

  validateInput(userInput) {
    return (
      userInput.length === 3 &&
      Boolean(userInput.match(/^[1-9]+$/)) &&
      new Set(userInput.split('')).size === 3
    );
  }

  getUserNumber() {
    return new Promise((resolve) => {
      Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
        if (!this.validateInput(userInput)) {
          throw new Error('유효하지 않은 값이 입력되어 게임이 종료됩니다.');
        }
        resolve(userInput);
      });
    });
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
}

module.exports = Computer;
