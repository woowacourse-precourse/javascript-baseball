class App {
  play() {
    let random = []; //랜덤 숫자가 담길 빈 배열 생성
    let numbers = 0;
    
    for(let i=0; i<3; i++){  //random 배열에 1~9 수 중에 3개의 랜덤한 숫자를 넣음
      numbers = Math.floor(Math.random() * 9 + 1);
      if(random.indexOf(numbers) === -1){  //중복되는 숫자 없는지 확인
        random.push(numbers);
      }
      else{  //중복되는 숫자가 있을 경우 다시 반복문 돌아야 함
        i--;
      }
    }

    //사용자에게 숫자 3개를 받음
    const a = 0;
    const b = 0;
    const c = 0;
    const input = [a, b, c];
    prompt("숫자 야구 게임을 시작합니다.");
    input = prompt("숫자를 입력해주세요 : ").split("");

    // if(){  //같은 수가 같은 자리에 - 스트라이크

    // } 
    // else if(){  //같은 수가 다른 자리에 - 볼

    // }
    // else if(){  //같은 수가 없을 경우 - 낫싱

    // }

    //잘못된 값을 입력한 경우 throw문을 사용하여 예외 발생 -> 종료
  }
}

module.exports = App;
