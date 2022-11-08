class InputCheck {
  ValidCheck(input) {
    if (typeof input === 'object') input = input.join('');
    const regex = /^[1-9]+$/;
    if (!regex.test(input)) return false;
    return true;
  }
  LengthCheck(input) {
    if (input.length !== 3) return false;
    return true;
  }
  SamenessCheck(input) {
    if (typeof input === 'string') input = input.split('');
    const result = new Set(input);
    if (result.size !== input.length) return false;
    return true;
  }
  AvailCheck(input) {
    if (typeof input === 'undefined') {
      throw new Error('undefined가 들어왔습니다.');
    }

    if (
      !this.NumberCheck(input) ||
      !this.LengthCheck(input) ||
      !this.SamenessCheck(input)
    ) {
      throw new Error('잘못된 값이 생성되었습니다. 게임을 종료합니다.');
    }
    return true;
  }

  RePlayCheck(input) {
    if (input !== '1' && input !== '2') {
      throw new Error('잘못된 입력입니다. 게임을 종료합니다.');
    }
    return true;
  }
}

module.exports = InputCheck;
