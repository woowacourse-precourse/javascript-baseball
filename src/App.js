const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;

const getUserInput = (f, num) => {
  return f(num);
};

const isValidNumber = value => {
  const regValidNumExp = /^[1-9]{3}$/;
  if (regValidNumExp.test(value) === false) {
    throw '유효한 숫자가 아닙니다!';
  }
  return value;
};

const computer = [];
while (computer.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(number)) {
    computer.push(number);
  }
}

const parser = num => {
  const value = [];
  do {
    (digit = num % 10), value.push(digit);
    num = parseInt(num / 10);
  } while (num > 0);
  value.sort();
  return value;
};

const makeMap = list => {
  const newMap = new Map(list.map((item, idx) => [idx, item]));
  return newMap;
};

const testMap = makeMap([1, 5, 3]);

const isBallOrStrike = (idx, value, whereToFind) => {
  const IS_INCLUDED_AND_SAME_IDX = whereToFind.get(idx) === value;
  const IS_INCLUDED_VALUE = [...whereToFind.values()].includes(value);
  if (IS_INCLUDED_VALUE && IS_INCLUDED_AND_SAME_IDX) return '스트라이크';
  else if (IS_INCLUDED_VALUE && !IS_INCLUDED_AND_SAME_IDX) return '볼';
  else return '낫싱';
};

const countScore = userInput => {
  const ballAndStrike = {
    스트라이크: 0,
    볼: 0,
    낫싱: 0,
  };
  userInput.forEach((value, idx) => {
    let response = isBallOrStrike(idx, value, testMap);
    ballAndStrike[response]++;
  });
  return ballAndStrike;
};

console.log(countScore([1, 1, 2]));

// console.log(isBall(x => [...testMap.values()].includes(x), 3));
// console.log(
//   isStrike(
//     (candidateIdx, candidateValue) =>
//       testMap.get(candidateIdx) === candidateValue,
//     2,
//     1,
//   ),
// );
// const testMap = makeMap([1, 3, 2]);
// const testGuess = [3, 3, 3];
// const arr = [...testMap.values()];
// let counter = [0, 0];

// testGuess.forEach((item, idx) => {
//   if (arr.includes(item)) {
//     if (testMap.get(idx) === item) {
//       counter[1]++;
//     } else counter[0]++;
//   }
// });

class App {
  play() {}
}

module.exports = App;
