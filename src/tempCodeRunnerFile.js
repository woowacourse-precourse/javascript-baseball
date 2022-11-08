 isError() {
    const userNum = this.answerBox[0];
    if (userNum.every((el) => isNaN(el) === true))
      throw new Error("숫자만 입력해주세요");
    if (!userNum.every((el) => el > 0))
      throw new Error("1에서 9까지의 수를 입력해주세요");
    const isDuplicate = new Set(userNum);
    if (userNum.length !== isDuplicate.size )
      throw new Error("중복되지 않는 수를 입력해주세요");
    if ([...new Set(userNum)].length != 3) throw new Error("숫자를 3개 입력해주세요");
  }