const MissionUtils = require("@woowacourse/mission-utils");
class App {
  computer = [];  // 컴퓨터의 수



  play() {
    // 게임 시작 문구 출력
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    // 컴퓨터의 수 선택
    this.computer = computersNumbers();
    console.log(this.computer);

    // 사용자의 수 선택
    var userNum = usersNumbers();
    
    // 컴퓨터의 수와 사용자의 수 비교
    var result = gameResult(this.computer, userNum);

    // 게임 결과 출력
    var resultStr = printGameResult(resultArr);

    // 

  }
}

function printGameResult(resultArr){
  resultArr.forEach((result, i)=>{
    if(result != 0){

    }
  })
}

function gameResult(computer, user){
  var computerArr = Array.from(computer);
  var userArr = Array.from(user);

  var result = [0, 0, 0]; // B, S, N
  userArr.forEach( (unum, i) => {
    var tmpIdx = computerArr.indexOf(unum);
    if(tmpIdx == i){
      // 스트라이크
      result[1] += 1;
    } else if (tmpIdx > -1){
      // 볼
      result[0] += 1;
    } else {
      // 없음
      result[2] += 1;
    }
  })

  if(result[2] == 3){
    return "낫싱";
  }

  var resultStr = "";
  var type = ['볼', '스트라이크'];
  result.forEach((cnt, i)=>{
    if(cnt > 0){
      resultStr += cnt + type[i];
    }
  })

  return resultStr;
}

function usersNumbers(){
  var usersNumbers;

  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    
    NumberCheck = new NumberCheck(answer);
    try {
      NumberCheck.isThreeWord();
      NumberCheck.isContainsBlank();
      NumberCheck.isNumber();
      NumberCheck.isDuple();

      console.log("에러가없엉");
    } catch (error) {
      console.log(error);
      MissionUtils.Console.close();
    }

  });

  return usersNumbers;
}


class NumberCheck{
  constructor(input){
    console.log("class NumberCheck input setting : " + input);
    this.input = input;
  }

  // 예외처리 1. 길이가 3이 아닐 때s
  isThreeWord(){
    if(this.input.length != 3){
      throw "3자리 숫자가 아닙니다.";
    }
  }

  // 사용자의 수 예외처리 2 - 공백이 포함되면 예외발생
  isContainsBlank(){
    var inputStr = this.input;
    if(inputStr.indexOf(" ") > -1){
      throw "공백을 입력했습니다.";
    }
  }

  // 사용자의 수 예외처리 3 - 숫자가 아니면 예외발생
  isNumber(){
    var regexp = /^[1-9]+$/g;
    if(!regexp.test(this.input)){
      console.log("숫자가 아닙니다.");
    }
  }

  // 사용자의 수 예외처리 4 - 음수인 경우 (필요한지?)
  isMinus(){
    if(this.input < 0){
      throw "음수를 입력했습니다.";
    }
  }

  // 사용자의 수 예외처리 5 - 중복된 수가 있는 경우
  isDuple(){
    var thisInput = this.input;
    var inputArr = Array.from(this.input);

    var inputSet = new Set();
    inputArr.forEach( (num) => {
      inputSet.add(num);
    })

    if(thisInput.length != inputSet.length){
      throw "중복된 숫자가 있습니다.";
    }

  }
}

// 컴퓨터의 수 선택
function computersNumbers(){
  var computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}


const app = new App();
app.play();

//module.exports = App;

// -----------------------------------------------------------------
// Console
// .readLine(query, callback)
// 주어진 질문을 화면에 출력하고, 사용자의 답변 입력을 기다린 다음
// 입력된 답변을 인수로 전달하는 콜백함수 호출

// .print(message)
// 주어진 문자열을 콘솔에 출력 

// .close()
// Console 에서 입출력 제어하기 위해 사용하는 인스턴스를 닫음

// Random
// .pickNumberInRange(startInclusive, endInclusive)
// 지정한 숫자 범위를 포함하여 숫자 반환 

// .pickNumberInList(array)
// 목록에 있는 숫자 중 하나를 반환 

// .pickUniqueNumbersInRange(startInclusive, endInclusive, count)
// 숫자 범위 내에서 지정된 갯수만큼 겹치치 않는 숫자 반환

// .shuffle(array)
// 무작위로 섞인 새 목록을 반환
