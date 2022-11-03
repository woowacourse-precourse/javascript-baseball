class App {
  userInput = ''
  randomNumber = ''
  strike = 0
  ball = 0
  notThing = false

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
  // 스트라이크, 볼, 낫싱 멤버변수 초기화하기
  resetStringAndBall() {
    this.strike = 0
    this.ball = 0
    this.notThing = false
  }
  // 입력 판단하기 (스트라이크, 볼, 낫싱)
  JudgeInput() {
    this.resetStringAndBall()
    
    const inputSet = new Set()
    this.findStrike(inputSet)
    this.findBall(inputSet)

    if (this.ball === 0 && this.strike === 0) this.notThing = true
  }
  // 스트라이크 찾기
  findStrike(set) {
    let input = this.userInput.split('')

    input.forEach((val, i) => {
      set.add(val)
      if (val === this.randomNumber[i]) {
        set.delete(val)
        this.strike += 1
      }
    })
  }
  // 볼 찾기
  findBall(set) {
    set.forEach((val) => {
      if (this.randomNumber.includes(val)) this.ball += 1
    })
  }

} 

module.exports = App;
