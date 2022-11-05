// 해당 파일은 로직을 합치기 전, 임시 코드를 작성하는 파일입니다.

const { Console, Random } = require('@woowacourse/mission-utils');

class temporaryCode {
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

  restartGame(userSelect) {
    const userSelectNum = Number(userSelect);
    if (userSelectNum === 1) return; // 1이면, 새 게임 시작
    if (userSelectNum === 2) Console.close(); // 2면, 입력 받는것을 종료
  }

  isGameOver() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (userSelect) => {
        this.restartGame(userSelect);
      }
    );
  }

  getGameHint(userInputNum, computerNum) {
    const [ball, strike] = [
      this.BallCounter(userInputNum, computerNum),
      this.StrikeCounter(userInputNum, computerNum),
    ];

    if (ball === 0 && strike === 0) Console.print('낫싱');
    if (ball !== 0 && strike === 0) Console.print(`${ball}볼`);
    if (ball === 0 && strike !== 0) Console.print(`${strike}스트라이크`);
    if (ball !== 0 && strike <= 2)
      Console.print(`${ball}볼 ${strike}스트라이크`);
    if (strike === 3) {
      Console.print(`${strike}스트라이크`);
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.isGameOver();
    }
    return;
  }
}

const temporary = new temporaryCode();
temporary.getGameHint([4, 2, 5], [4, 2, 5]);
