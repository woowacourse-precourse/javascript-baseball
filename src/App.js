const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const COMPUTER = makeRandomNumber();
    result();

    function makeRandomNumber() {
      const COMPUTER_NUMBER = [];

      while (COMPUTER_NUMBER.length < 3) {
        const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);

        if (!COMPUTER_NUMBER.includes(String(RANDOM_NUMBER))) {
          COMPUTER_NUMBER.push(String(RANDOM_NUMBER));
        }
      }

      return COMPUTER_NUMBER;
    }

    function result() {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
        const USER = condition(userInput);
        const BALL = countBall(COMPUTER, USER);
        const STRIKE = countStrike(COMPUTER, USER);

        if (BALL === 0 && STRIKE === 0) {
          MissionUtils.Console.print('낫싱');
          result();
        }
        if (BALL > 0 && STRIKE === 0) {
          MissionUtils.Console.print(`${BALL}볼`);
          result();
        }
        if (BALL === 0 && STRIKE > 0 && STRIKE < 3) {
          MissionUtils.Console.print(`${STRIKE}스트라이크`);
          result();
        }
        if (BALL > 0 && STRIKE > 0) {
          MissionUtils.Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
          result();
        }
        if (STRIKE === 3) {
          MissionUtils.Console.print(`${STRIKE}스트라이크\n🎉🥳정답입니다!🥳🎉 게임 종료.`);
          restartOrEnd();
        }
      });
    }

    function condition(input) {
      const USER_NUMBER = input.split('');

      for (let index = 0; index < USER_NUMBER.length; index += 1) {
        if (USER_NUMBER[index] < '1' || USER_NUMBER[index] > '9') {
          throw '1~9 사이의 숫자를 입력해 주세요!';
        }
      }

      if (USER_NUMBER.length !== 3) throw '3자리 숫자를 입력해주세요!';

      if (findDuplicate(USER_NUMBER)) throw '중복되지 않은 숫자를 입력해 주세요!';

      return USER_NUMBER;
    }

    function findDuplicate(numberArr) {
      const UNIQUE_ARRAY = new Set(numberArr);

      if (numberArr.length !== UNIQUE_ARRAY.size) return true;

      return false;
    }

    function countBall(computerNumber, userNumber) {
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
    }

    function countStrike(computerNumber, userNumber) {
      let strikeNumber = 0;

      for (let index = 0; index < computerNumber.length; index += 1) {
        if (computerNumber[index] === userNumber[index]) {
          strikeNumber += 1;
        }
      }

      return strikeNumber;
    }

    function restartOrEnd() {
      MissionUtils.Console.readLine(
        '게임을 다시 시작하려면 1, 종료하려면 2를 입력하세요.',
        (number) => {
          if (number === '1') app.play();

          if (number === '2') MissionUtils.Console.close();

          if (number !== '1' && number !== '2') restartOrEnd();
        }
      );
    }
  }
}

const app = new App();
app.play();

module.exports = App;
