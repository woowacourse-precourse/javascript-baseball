class IsvaildNumber{
  isVaildUserInput(number){
    if(number.length !== 3){
      throw new Error("숫자 세자리 수를 입력하세요.");
    }
    const uniqueUserNum = new Set(number);
    if(uniqueUserNum.size !== number.length){
      throw new Error("중복되지 않는 숫자를 입력하세요.");
    }
    const numPattern = /[^0-9]/g;
    if(numPattern.test(number)) throw new Error("숫자만 입력하세요.");
  }

  IsVaildOptionNumber(optionNum){
    const optionPattern = /[^1-2]/g;
    if(optionPattern.test(optionNum)) throw new Error("1 또는 2 만 입력 가능합니다.");
  }
}

module.exports = new IsvaildNumber();