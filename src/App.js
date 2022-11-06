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
    }
  }
}

module.exports = App;
