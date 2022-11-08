const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const answer = Get_Random();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    printNumber(answer);
  }
}

function printNumber(answer) {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (getNumber) => {
    Check_Number(getNumber);

    Count_Strike = Check_Strike(answer, getNumber);
    Count_Ball = Check_Ball(answer, getNumber);
    Count_Ball = Count_Ball - Count_Strike;

    if (Count_Strike == 3) {
      MissionUtils.Console.print(
        "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n"
      );
      Restart();
    } else if (Count_Ball >= 1 && Count_Strike >= 1)
      MissionUtils.Console.print(
        Count_Ball + "볼 " + Count_Strike + "스트라이크"
      );
    else if (Count_Ball >= 1) MissionUtils.Console.print(Count_Ball + "볼 ");
    else if (Count_Strike >= 1)
      MissionUtils.Console.print(Count_Strike + "스트라이크");
    else MissionUtils.Console.print("낫싱");

    printNumber(answer);
  });
}

function Check_Number(getNumber) {
  getNumber = parseInt(getNumber);
  if (getNumber < 100 || getNumber > 999) {
    throw new Error("It is not Approriate number");
  }
  return 0;
}

function Restart() {
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    (getNumber) => {
      console.log(`${getNumber}`);
      if (getNumber == 1) {
        const answer = Get_Random();
        printNumber(answer);
      } else if (getNumber != 2) {
        MissionUtils.Console.print("다시 입력해주세요!");
        MissionUtils.Console.close();
        Restart();
      }
    }
  );
}

function Check_Strike(answer, Human_Number) {
  var strike = 0;

  Answer_Tostring = String(answer);
  Human_Tostring = String(Human_Number);

  for (var i = 0; i < Answer_Tostring.length; i++) {
    if (Answer_Tostring[i] == Human_Tostring[i]) {
      strike = strike + 1;
    }
  }

  return strike;
}

//볼의 갯수를 구하는 함수
//먼저 포함 되어 있으면 추가를 한 후에 추가한 숫자를 문자열을 통해 지운다.
//나중에 스트라이크 갯수를 볼의 갯수에서 뺄셈하여 진짜 볼의 갯수를 구한다.
function Check_Ball(answer, Human_Number) {
  var ball = 0;

  Answer_Tostring = String(answer);
  Human_Tostring = String(Human_Number);

  for (var i = 0; i < Human_Tostring.length; i++) {
    if (Answer_Tostring.includes(Human_Tostring[i])) {
      ball = ball + 1;
    }
  }

  return ball;
}

function Get_Random() {
  const answerOne = 100 * MissionUtils.Random.pickNumberInRange(1, 9);
  const answerTwo = 10 * MissionUtils.Random.pickNumberInRange(0, 9);
  const answerThree = MissionUtils.Random.pickNumberInRange(0, 9);
  return answerOne + answerTwo + answerThree;
}

module.exports = App;
