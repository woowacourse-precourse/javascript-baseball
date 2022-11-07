const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const answer = Get_Random();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    printNumber(answer);
  }
}

//숫자를 입력받고 스트라이크 갯수가 3개가 될때까지 반복하여 함수를 호출한다.
function printNumber(answer){
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (getNumber) => {

    console.log(`숫자: ${getNumber}`);

    Check_Number(getNumber);

    Count_Strike = Check_Strike(answer, getNumber);
    Count_Ball = Check_Ball(answer, getNumber);
    Count_Ball = Count_Ball - Count_Strike;

    if(Count_Strike == 3) {
      MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n');
      Restart();
    }
    else if(Count_Ball>=1 && Count_Strike >=1) MissionUtils.Console.print(Count_Ball + "볼 " + Count_Strike + "스트라이크");
    else if(Count_Ball>=1) MissionUtils.Console.print(Count_Ball + "볼 ");
    else if(Count_Strike>=1) MissionUtils.Console.print(Count_Strike + "스트라이크");
    else MissionUtils.Console.print("낫싱");

    printNumber(answer);
  });
}

//숫자의 유효성을 확인한다. 유효성이 없으면 throw를 한다.
function Check_Number(getNumber){
  if(getNumber < 100 || getNumber > 999){
    throw new Error("It is not Approriate number");
  }
}

//재시작하는 함수이다 1이면 다시 새롭게 랜덤 값을 만든 후에 시작하고
//2이면 프로그램을 종료한다.
function Restart(){
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (getNumber) => {
    console.log(`${getNumber}`);
    if(getNumber == 1){
      const answer = Get_Random();
      printNumber(answer);
    }else if (getNumber != 2){
      MissionUtils.Console.print("다시 입력해주세요!");
      MissionUtils.Console.close();
      Restart();
    }
  });
}

//스트라이크의 갯수를 구하는 함수
//단순하게 문자열로 바꾼 후 위치를 확인하면서 같으면 갯수를 증가시켜 반환한다.
function Check_Strike(answer, Human_Number){
  var strike = 0;

  Answer_Tostring = String(answer);
  Human_Tostring = String(Human_Number);

  for(var i = 0; i<Answer_Tostring.length; i++){
    if(Answer_Tostring[i] == Human_Tostring[i]){
      strike = strike + 1;
    }
  }

  return strike;
}

//볼의 갯수를 구하는 함수
//먼저 포함 되어 있으면 추가를 한 후에 추가한 숫자를 문자열을 통해 지운다.
//나중에 스트라이크 갯수를 볼의 갯수에서 뺄셈하여 진짜 볼의 갯수를 구한다.
function Check_Ball(answer, Human_Number){
  var ball = 0;

  Answer_Tostring = String(answer);
  Human_Tostring = String(Human_Number);

  for(var i = 0; i<Human_Tostring.length; i++){
    if(Answer_Tostring.includes(Human_Tostring[i])){
      ball = ball + 1;
    }
  }

  return ball;
}

//랜덤값을 지정하는 함수
function Get_Random(){
  const answer1 =100 * MissionUtils.Random.pickNumberInRange(1,9);
  const answer2 =10 * MissionUtils.Random.pickNumberInRange(0,9);
  const answer3 = MissionUtils.Random.pickNumberInRange(0,9);
  return answer1 + answer2 + answer3;
}

module.exports = App;
