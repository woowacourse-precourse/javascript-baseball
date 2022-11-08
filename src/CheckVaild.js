class CheckVaild {
  checkVaildUserInputValue(userInput) {
    let check = /^[1-9]+$/;
    const set = new Set(userInput);

    if (userInput.length !== 3) {
      throw new Error("3자리의 숫자를 입력해야합니다.");
    }
    for (let i = 0; i < userInput.length; i++) {
      if (!check.test(userInput[i])) {
        throw new Error("1~9까지의 숫자만 입력 가능합니다.");
      }
    }
    if (set.size !== userInput.length) {
      throw new Error("중복 숫자를 입력할 수 없습니다.");
    }
    return true;
  }
}
module.exports = CheckVaild;
