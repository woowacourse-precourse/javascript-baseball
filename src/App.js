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
  MissionUtils.Console.readLine('숫자를 입력해 주세요', (input) => {
  exception(input)
  answerCheck(input, COM_NUMBER)})
}

function answerCheck (input, COM_NUMBER) {
  var STRIKE = 0
  var BALL = 0
  for (let i = 0; i<3 ; i++) {
    if(input[i] == COM_NUMBER[i]) {
      STRIKE++;} else if(COM_NUMBER.includes(Number(input[i])))
      {BALL++}
  }
  resultprint(COM_NUMBER, STRIKE, BALL)
}
function resultprint(COM_NUMBER, STRIKE, BALL) {
  if(STRIKE==0 && BALL==0){
    MissionUtils.Console.print('낫싱')
  }
  if(BALL>0 && STRIKE == 0){
    MissionUtils.Console.print(`${BALL}볼 `)
  }
  if(STRIKE>0 && BALL == 0){
    MissionUtils.Console.print(`${STRIKE}스트라이크`)
  }
  if(STRIKE>0 && BALL>0) {
    MissionUtils.Console.print(`${BALL}볼 ${STRIKE}스트라이크`)
  }
  if(STRIKE<3){
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

function exception(input) {
  var input_array = []
  for (let x of input) {
    input_array.push(x)
  } 
  var input_set = new Set(input_array);
  if (input.length !== 3) {
    throw '3자리 숫자를 입력해주세요'
  }
  if (input_set.size !== 3){
    throw '각자 다른 숫자를 입력해주세요'
  }
}
module.exports = App;
