class Validation {
  isValidInput(userInput) {
    this.lengthValidity(userInput)
    this.typeValidity(userInput)
    this.isDuplicate(userInput)
    return true
  }
  
  lengthValidity(userInput) {
    if (userInput.toString().length !== 3) {
      throw new Error('3자리 숫자를 입력해주세요!')
    }
  }

  typeValidity(userInput) {
    if(!Number.isInteger(userInput)) {
      throw new Error('숫자만 입력해주세요!')
    }
  }

  isDuplicate(userInput) {
    const StrNumber = userInput.toString()
    const removedSame = new Set(StrNumber)
    if (StrNumber.length !== removedSame.size) {
      throw new Error('중복된 숫자가 있습니다!')
    }
  }
}