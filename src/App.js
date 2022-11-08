const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    const makeRandomNumber = () => {
      const COMPUTER_NUMBER = [];

      while (COMPUTER_NUMBER.length < 3) {
        const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);

        if (!COMPUTER_NUMBER.includes(String(RANDOM_NUMBER))) {
          COMPUTER_NUMBER.push(String(RANDOM_NUMBER));
        }
      }

      return COMPUTER_NUMBER;
    };

    const findDuplicate = (numberArr) => {
      const UNIQUE_ARRAY = new Set(numberArr);

      if (numberArr.length !== UNIQUE_ARRAY.size) return true;

      return false;
    };

    const condition = (input) => {
      const USER_NUMBER = input.split('');

      for (let index = 0; index < USER_NUMBER.length; index += 1) {
        const ASCII = USER_NUMBER[index].charCodeAt();

        if (ASCII < 48 || ASCII > 57) {
          throw '1~9 사이의 숫자를 입력해 주세요!';
        }
      }

      if (USER_NUMBER.length !== 3) throw '3자리 숫자를 입력해주세요!';

      if (findDuplicate(USER_NUMBER)) throw '중복되지 않은 숫자를 입력해 주세요!';

      return USER_NUMBER;
    };

    const countBall = (computerNumber, userNumber) => {
      let ballNumber = 0;

      for (let index = 0; index < computerNumber.length; index += 1) {
        if (
          computerNumber[index] !== userNumber[index] &&
          computerNumber.includes(userNumber[index])
        ) {
          ballNumber += 1;
        }
      }

      return ballNumber;
    };

    const countStrike = (computerNumber, userNumber) => {
      let strikeNumber = 0;

      for (let index = 0; index < computerNumber.length; index += 1) {
        if (computerNumber[index] === userNumber[index]) {
          strikeNumber += 1;
        }
      }

      return strikeNumber;
    };

    const restartOrEnd = () => {
      MissionUtils.Console.readLine(
        '게임을 다시 시작하려면 1, 종료하려면 2를 입력하세요.',
        (userInput) => {
          if (userInput === '1') app.play();

          if (userInput === '2') MissionUtils.Console.close();

          if (userInput !== '1' && userInput !== '2') restartOrEnd();
        }
      );
    };

    const printCount = (ball, strike) => {
      if (ball === 0 && strike === 0) {
        MissionUtils.Console.print('낫싱');
        result();
      }
      if (ball > 0 && strike === 0) {
        MissionUtils.Console.print(`${ball}볼`);
        result();
      }
      if (ball === 0 && strike > 0 && strike < 3) {
        MissionUtils.Console.print(`${strike}스트라이크`);
        result();
      }
      if (ball > 0 && strike > 0) {
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
        result();
      }
    };

    const result = () => {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
        const USER = condition(userInput);
        const BALL = countBall(COMPUTER, USER);
        const STRIKE = countStrike(COMPUTER, USER);

        printCount(BALL, STRIKE);

        if (STRIKE === 3) {
          MissionUtils.Console.print(`${STRIKE}스트라이크\n🎉🥳정답입니다!🥳🎉 게임 종료.`);
          restartOrEnd();
        }
      });
    };

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const COMPUTER = makeRandomNumber();
    result();
  }
}

const app = new App();
app.play();

module.exports = App;
