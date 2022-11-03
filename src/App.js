class App {
  userInput = ''

  play() {}

  outputString(str) {
    MissionUtils.Console.print(str)
  }
  // 사용자에게 보여줄 str과 입력을 받고 저장함.
  setUserInput(showStr) {
    return MissionUtils.Console.readLine(showStr, (answer) => {
      this.outputString(`${showStr} ${answer}`)
      return this.userInput = answer
    })
  }
  // 입력 닫기
  closeConsole() {
    MissionUtils.Console.close()
  }
  // 랜덤 숫자 뽑기
  getRandomNumber() {
    this.randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
  }
  // 입력 검증하기
  verifyInput() {
    if (typeof this.userInput !== 'string' || this.userInput.length > 3 || this.userInput.length !== new Set(this.userInput).size ) return false

    return true
  }
} 

module.exports = App;
