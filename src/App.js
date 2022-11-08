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
    var input_array = []
    for (let x of input) {
      input_array.push(x)
    } 
    var input_set = new Set(input_array);
    if(exception(input, input_set)) {
    answercheck(input_array, COM_NUMBER)}
  })
}

function answerCheck (input_array, COM_NUMBER) {
  var strike = 0
  var ball = 0
  for (let i = 0; i<3 ; i++) {
    if(input_array[i] == COM_NUMBER[i]) {
      strike++;
      continue}
    if(COM_NUMBER.includes(input_array[i])) {
      ball++
      continue
    }
  }
  resultprint(COM_NUMBER, strike, ball)
}
function resultprint(COM_NUMBER, strike, ball) {
  var result = ''
  if(strike==3){
    result += '정답입니다!';
    return newGame
    }
  if(strike==0 && ball==0){result += '낫싱'}
  if(ball>0){result += `${ball}볼`}
  if(strike>0){result = result + " " + `${strike}스트라이크`}
  MissionUtils.Console.print(result)
  return inputAnswer(COM_NUMBER)
}
function newGame (){

}
function exception(input) {
  if (input !== /[1-9]{3}/) {
    throw '3자리 숫자를 입력해주세요'
  }
  if (input_set.size !== 3){
    throw '각자 다른 숫자를 입력해 주세요'
  }
  return true
}
module.exports = App;
