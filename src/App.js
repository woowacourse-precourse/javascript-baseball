const MissionUtils = require('@woowacourse/mission-utils');

/**
 * 컴퓨터가 숫자 3개를 고른다
 * @returns {number[]} 컴퓨터가 고른 숫자
 */
const getRandomNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) computer.push(number);
  }
  return computer;
};

/**
 * 사용자가 숫자 3개를 입력한다
 * @returns {number[]} 사용자가 입력한 숫자
 */
const guessUserNumber = () => {
  let guessNumber;
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (x) => {
    guessNumber = x;
  });
  MissionUtils.Console.close();
  return guessNumber.split('');
};

/**
 * strike 개수를 구한다
 * @param {number[]} computerNumber - 컴퓨터가 고른 숫자
 * @param {string[]} guessNumber - 사용자가 예상한 숫자
 * @returns {number} 스트라이크 개수
 */
const countStrike = (computerNumber, guessNumber) => {
  const strike = computerNumber.filter(
    (num, index) => num.toString() === guessNumber[index],
  ).length;
  // let strike = 0;
  // computerNumber.forEach((num, index) => {
  // if (num.toString() === guessNumber[index]) strike += 1;
  // });
  return strike;
};

/**
 * ball 개수를 구한다
 * @param {number[]} computerNumber - 컴퓨터가 고른 숫자
 * @param {string[]} guessNumber - 사용자가 예상한 숫자
 * @returns {number} 볼 개수
 */
const countBall = (computerNumber, guessNumber) => {
  let ball = 0;
  computerNumber.forEach((computerNum, index) => {
    const num = computerNum.toString();
    if (guessNumber.includes(num) && guessNumber[index] !== num) {
      ball += 1;
    }
  });
  return ball;
};

/**
 * ball, strike 개수로 결과를 출력할 수 있게 한다
 * @param {number} strike - 스트라이크 개수
 * @param {number} ball - 볼 개수
 * @returns {string} 출력할 결과
 */
const getResult = (strike, ball) => {
  if (strike > 0 && ball > 0) return `${ball}볼 ${strike}스트라이크`;
  if (strike > 0) return `${strike}스트라이크`;
  if (ball > 0) return `${ball}볼`;
  return '낫싱';
};

/**
 * 게임을 계속할지 그만둘지 선택한다
 * @returns {string} 계속할지 그만둘지 입력한 결과
 */
const continueOrFinish = () => {
  let input;
  MissionUtils.Console.readLine(
    '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    (x) => {
      input = x;
    },
  );
  MissionUtils.Console.close();
  return input;
};

const inputException = (guessNumber) => {
  if (guessNumber.length !== 3) throw new Error('예외');
};

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let computerNumber = getRandomNumber();
    const IS_PLAYING = true;
    while (IS_PLAYING) {
      const guessNumber = guessUserNumber();

      try {
        inputException(this.guessNumber);
      } catch (e) {
        // console.log();
        // MissionUtils.Console.print(e);
        // break;
      }

      const strike = countStrike(computerNumber, guessNumber);
      const ball = countBall(computerNumber, guessNumber);
      MissionUtils.Console.print(getResult(strike, ball));

      if (strike === 3) {
        const input = continueOrFinish();

        if (input.toString() === '2') {
          MissionUtils.Console.print('게임 종료');
          break;
        } else {
          computerNumber = getRandomNumber();
        }
      }
    }
  }
}

module.exports = App;
