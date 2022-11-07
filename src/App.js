const MissionUtils = require("@woowacourse/mission-utils");
class App {
  computer = [];  // 컴퓨터의 수



  play() {
    // 게임 시작 문구 출력
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    // 컴퓨터의 수 선택
    this.computer = computersNumbers();

    // 사용자의 수 선택
    var userNum = usersNumbers();
    // 사용자의 수 입력받기
   
    


  }
}

function usersNumbers(){
  var usersNumbers;

  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    
    NumberCheck = new NumberCheck(answer);
    try {
      NumberCheck.isThreeWord();
      NumberCheck.isContainsBlank();
      NumberCheck.isNumber();
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
    if(!isNaN(this.input)){
      throw "숫자가 아닙니다.";
    }
  }

  // 사용자의 수 예외처리 4 - 음수인 경우 (필요한지?)
  isMinus(){
    if(this.input < 0){
      throw "음수를 입력했습니다.";
    }
  }


// 입력받은 수를 배열로 
  getArrFromInput(input){
    var arr = Array.from(input);
    return arr;
  }
}
// 입력받은 수를 배열로 
// function getArrFromInput(input){
//   var arr = Array.from(input);
//   return arr;
// }



// 사용자의 수 예외처리 2 - 숫자가 아니면 예외발생
function isNumbers(arr){
  try {
    
  } catch (error) {
    throw error;
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
