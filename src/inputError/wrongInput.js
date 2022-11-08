// 게임 재시작 입력 오류
const wrongInput = (inputNumber) => {
    if (inputNumber !== '1' && inputNumber !== '2') {
      throw new Error('숫자 1 혹은 숫자 2를 입력해 주세요.');
    }
}

module.exports = wrongInput;