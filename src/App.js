class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");
    const random = []; //랜덤 숫자가 담길 빈 배열 생성
    
    while(random.length < 3){  //random 배열에 1~9 수 중에 3개의 랜덤한 숫자를 넣음
      const numbers = MissionUtils.Random.pickNumberInRange(1, 9);
      if(!random.includes(numbers)){  //중복되는 숫자 없는지 확인
        random.push(numbers);
      }
    }

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while(true){
      //사용자에게 숫자 3개를 받음
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
        console.log(`${answer}`);
        MissionUtils.Console.close();
      });
      //입력받은 숫자 한자리씩 배열에 저장
      let input = [];
      numberToString(answer, input);
      //잘못된 값을 입력한 경우 throw문을 사용하여 예외 발생 -> 종료
      if(answer.length > 3 || typeof answer !== 'number'){ //3자리 수 이상 혹은 숫자가 아닌 값을 입력한 경우
        throw new Error('예외 발생- 서로 다른 3자리 수를 입력하세요');
      }
      const set = new Set(input);
      if(set.size != input.size){ // 중복되는 수를 입력한 경우
        throw new Error('예외 발생- 서로 다른 3자리 수를 입력하세요');
      }
      //스트라이크
      let cnt = 0; //스트라이크 수를 세기 위한 count
      Strike(random, input, cnt);
      if(cnt == 3){
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (control) => {
          console.log(`${control}`);
          MissionUtils.Console.close();
        });
        if(control === 1) continue;
        else if(control === 2) break;
      }
      //볼
      const ball = []; //겹치는 수를 담을 배열
      Ball(random, input, ball);
      //낫싱
      if(cnt == 0 && ball == null){
        MissionUtils.Console.print("낫싱")
      }
    }
  }
}

function Strike(array1, array2, n){
  for(i=0; i<3; i++){
    if(array1[i] == array2[i]) 
      n++;
  }
  if(n != 0){
    MissionUtils.Console.print('${n}스트라이크 ');
  }
}

function Ball(array1, array2, n) {
  n = array1.filter(it => array2.includes(it));
    if( n != null){
      MissionUtils.Console.print('${n.length}볼 ');
    }
}

function numberToString(n, input){
  do {
    input.push(n % 10);
    n = Math.floor(n / 10);
  }while (n > 0);
  return input;
}

module.exports = App;
