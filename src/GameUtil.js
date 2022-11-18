const { Random } = require('@woowacourse/mission-utils');

class GameUtil {
  // eslint-disable-next-line class-methods-use-this
  generateRandomNumbers() {
    const uniqueRandomNumbers = [];

    while (uniqueRandomNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!uniqueRandomNumbers.includes(number)) {
        uniqueRandomNumbers.push(number);
      }
    }

    return uniqueRandomNumbers;
  }

  // eslint-disable-next-line class-methods-use-this
  countStrike(randomsNumbers, playerInput) {
    let strikes = 0;

    for (let digit = 0; digit < 3; digit++) {
      if (randomsNumbers[digit] === Number(playerInput[digit])) strikes += 1;
    }

    return strikes;
  }

  // eslint-disable-next-line class-methods-use-this
  countBall(randomsNumbers, playerInput) {
    let balls = 0;

    for (let digit = 0; digit < 3; digit++) {
      if (
        randomsNumbers[digit] !== Number(playerInput[digit])
&& randomsNumbers.includes(Number(playerInput[digit]))
      ) {
        balls += 1;
      }
    }

    return balls;
  }

  // eslint-disable-next-line class-methods-use-this
  showHint(ball, strike) {
    if (ball !== 0 && strike !== 0) return `${ball}볼 ${strike}스트라이크`;
    if (ball !== 0 && strike === 0) return `${ball}볼`;
    if (ball === 0 && strike !== 0) return `${strike}스트라이크`;
    return '낫싱';
  }

  // eslint-disable-next-line class-methods-use-this
  validateInput(playerInput) {
    const inputToSet = new Set(playerInput.split('').map(Number));

    if (playerInput.length !== 3) return '입력값은 세자리 수를 입력해주세요.';
    if ([...inputToSet].length !== 3) {
      return '중첩되지 않는 세자리 수를 입력해주세요.';
    }
    if (playerInput.includes(' ')) return '공백은 넣지 말아주세요.';
    if (Number.isNaN(playerInput)) return '숫자만 입력해주세요.';

    return 'PASS';
  }
}

module.exports = GameUtil;
