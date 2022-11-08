// 사용자 입력 숫자 문제점 체크
const userInputCheck = (userInputNumber) => {
    numberLengthCheck(userInputNumber);
    numberCheck(userInputNumber);
    overlapCheck(userInputNumber);
    oneToNineCheck(userInputNumber);
}

// 입력 숫자가 세 자리가 아닐 경우
const numberLengthCheck = (inputNumber) => {
    if (inputNumber.length !== 3) {
      throw new Error('세 자리를 입력해주세요.');
    }
}

  // 숫자를 입력하지 않은 경우
const numberCheck = (inputNumber) => {
    if (isNaN(Number(inputNumber))) {
      throw new Error('숫자만 입력해주세요.');
    }
}

  // 중복 숫자가 있는 경우
const overlapCheck = (inputNumber) => {
    const numberSet = new Set(inputNumber);
    if (numberSet.size !== inputNumber.length) {
      throw new Error('숫자를 중복으로 입력하지 말아주세요.');
    }
}

  // 1부터 9 안에 입력하지 않은 경우
const oneToNineCheck = (inputNumber) => {
    if (inputNumber < 1 && inputNumber > 9) {
      throw new Error('숫자 1과 9 사이로 입력해주세요.');
    }
}

module.exports = userInputCheck