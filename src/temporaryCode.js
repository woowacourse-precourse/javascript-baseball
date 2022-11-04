// 해당 파일은 로직을 합치기 전, 임시 코드를 작성하는 파일입니다.

const { Console, Random } = require('@woowacourse/mission-utils');

class testCode {
  getUserInputNum() {
    const userInputNum = [];

    Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      userInputNum.push(...answer.split('').map(Number));
    });
    return userInputNum;
  }

  checkInputValidation(userInputNum) {
    const set = new Set(userInputNum);
    const uniqueElements = [...set];

    const checkNumLength = userInputNum.length === 3;
    const checkIsNumber = !isNaN(userInputNum);
    const checkNumOverlap = uniqueElements.length === 3;

    if (checkNumLength && checkIsNumber && checkNumOverlap) {
      return true;
    }
    return false;
  }

  getComputerRandomNum() {
    const computerNum = [];
    while (computerNum.length < 3) {
      const Randomnumber = Random.pickNumberInRange(1, 9);
      if (!computerNum.includes(Randomnumber)) {
        computerNum.push(Randomnumber);
      }
    }
    return computerNum;
  }

  BallCounter(userInputNum, computerNum) {
    let ball = 0;
    userInputNum.forEach((curValue) => {
      if (computerNum.includes(curValue)) ball += 1;
    });
    return ball;
  }

  StrikeCounter(userInputNum, computerNum) {
    let strike = 0;
    userInputNum.forEach((curValue, index) => {
      if (curValue === computerNum[index]) strike += 1;
    });
    return strike;
  }
}

const test = new testCode();
test.BallCounter([5, 2, 4], [4, 2, 5]);
