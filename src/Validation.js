const validation = {
  validateType(number) {
    if(Number.isNaN(Number(number))) {
      throw new Error('숫자만 입력하셔야 합니다.');
    }
  },

  validateScope(number) {
    if(number < 1 && number > 9) {
      throw new Error('1~9까지의 숫자만 입력하셔야 합니다.');
    }
  }
}