const MissionUtils = require('@woowacourse/mission-utils');

const makeNumber = () => {
  const result = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return result;
};

const userInput = (answer) => {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
    checkNumber(input);
    let inputResult = countNumber(input, answer);
    printResult(inputResult);
  })
};

const checkNumber = (target) => {
  const isNumber = /[^1-9]/g;
  const targetSet = new Set(target);
  
  if (target === undefined) {
    throw new Error('숫자를 입력해야 합니다.')
  };

  if (target.length !== 3) {
    throw new Error(`3자리 숫자를 입력해야 합니다.`);
  };
  
  if (isNumber.test(target)) {
    throw new Error('3개의 숫자가 모두 1 ~ 9 사이의 숫자로 이루어져야 합니다.');
  };
  
  if (targetSet.size !== 3) {
    throw new Error('3개의 숫자를 모두 다르게 입력해야 합니다.');
  };
};

const countNumber = (target, goal) => {
  const targetArray = target.split('');
  let ballCount = 0;
  let strikeCount = 0;

  targetArray.forEach((element, i) => {

    if (goal.includes(Number(element))) {
      ballCount += 1
    };

    if (Number(element) === goal[i]) {
      ballCount -= 1
      strikeCount += 1
    };
  });
  
  return [strikeCount, ballCount];
}

const printResult = (result) => {
  const strikeCount = result[0];
  const ballCount = result[1];

  if (strikeCount === 0 && ballCount === 0) {
    MissionUtils.Console.print('낫싱')
  } else if (strikeCount === 0 && ballCount !== 0) {
    MissionUtils.Console.print(`${ballCount}볼`)
  } else if (strikeCount !== 0 && ballCount === 0) {
    MissionUtils.Console.print(`${strikeCount}스트라이크`)
  } else {
    MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`)
  }
};

class App {
  play() {
    let answer = makeNumber();
    userInput(answer);
  };
};

const app = new App()
app.play()

module.exports = App;
