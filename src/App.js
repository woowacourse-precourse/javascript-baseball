const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    baseBall()
  }
}

function baseBall() {
  const COM_NUMBER = []
  while (COM_NUMBER.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!COM_NUMBER.includes(number)) {
      COM_NUMBER.push(number)
    }
  }
  inputAnswer(COM_NUMBER)
}

function inputAnswer(COM_NUMBER) {
  MissionUtils.Console.readLine('숫자를 입력해 주세요', (userInput) => {
  exception(userInput)
  answerCheck(userInput, COM_NUMBER)})
}

function answerCheck (userInput, COM_NUMBER) {
  var strike = 0
  var ball = 0
  for (let i = 0; i<3 ; i++) {
    if(userInput[i] == COM_NUMBER[i]) {
      strike++;} else if(COM_NUMBER.includes(Number(userInput[i])))
      {ball++}
  }
  resultprint(COM_NUMBER, strike, ball)
}
function resultprint(COM_NUMBER, strike, ball) {
  if(strike==0 && ball==0){
    MissionUtils.Console.print('낫싱')
  }
  if(strike == 0 && ball>0){
    MissionUtils.Console.print(`${ball}볼 `)
  }
  if(strike>0 && ball == 0){
    MissionUtils.Console.print(`${strike}스트라이크`)
  }
  if(strike>0 && ball>0) {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`)
  }
  if(strike<3){
    return inputAnswer(COM_NUMBER)
  } else {
    MissionUtils.Console.print('3스트라이크')
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
    return newGame()
  }
}
function newGame() {
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요', (input)=>{
    if(input == 1) {
      return baseBall()
    }
    if(input == 2) {
      MissionUtils.Console.close()
    } else {
      throw '올바른 숫자를 입력해주세요'
    }
  })

}

function exception(userInput) {
  var input_set = new Set(userInput.split(''));
  var regExp = new RegExp('/\D/gm')
  if (regExp.test(userInput)) {
    throw '숫자만 입력해주세요'
  }
  if (userInput.length !== 3) {
    throw '3자리 숫자를 입력해주세요'
  }
  if (input_set.size !== 3){
    throw '각자 다른 숫자를 입력해주세요'
  }
  if (userInput.includes(0)){
    throw '1~9사이의 숫자를 입력해주세요'
  }
  
}
module.exports = App;
