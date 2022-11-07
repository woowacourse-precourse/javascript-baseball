class App {
  play() { }
}

function printMessage(sentence) {
  return Console.print(sentence)
}

function generateAnswer() {
  let numsArr = [];
  while (numsArr.length < 3) {
    let num = Random.pickNumberInRange(1, 9);
    if (!numsArr.includes(num)) numsArr.push(num);
  }
  return numsArr.join('')
}

function throwError(input) {
  let inputArr = Array.from(String(input));
  if (inputArr.length !== 3) {
    throw new Error("3자리 숫자만 입력 가능합니다.")
  }
  if (input.includes(0)) {
    throw new Error("0은 포함될 수 없습니다.")
  }
  let inputSet = new Set(inputArr);
  if (inputSet.size < 3) {
    throw new Error("중복되지 않은 숫자 3개만 입력 가능합니다.")
  }
  if (input.replace(/[0-9]/g, '').length !== 0) {
    throw new Error("숫자만 입력 가능합니다.")
  }
}

module.exports = App;
