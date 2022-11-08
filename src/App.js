class App {
  play() {}
  GameStart(){ console.log("숫자 야구 게임을 시작합니다.")}
  //기능 2. 사용자가 1부터 9 사이의 랜덤한 정수 3개를 출력. 마찬가지로 중복이 있어서는 안됨
  UserInput(input){
    Console.readLine('숫자를 3개 입력해주세요 : ');
  }
  UserInputCheck(input){
    if(input.length !== 3 ){
      Console.log("숫자를 3개만 입력해주세요")
    }
    else{
      for(let i=0;i<3;i++){
        const standpoint = input[i];
        for (let j=0;j<3;j++){
          if(standpoint === input[j]){
            Console.log("중복되는 값은 허용하지 않습니다")
            break;
          }
        }
      }
    }
  }
  
  //기능 1. 상대방(컴퓨터)가 랜덤한 1부터 9사이의 랜덤한 숫자 3개를 출력 이때 중복이 있어서는 안된다
  CounterPart(num){
    const counter=[]
    for(i=0;i<3;i++){
      counter[i]=(Math.random()*9)+1
  }
  //기능 3. 조건문에 따라서 겹쳐지는 문자열이 있는지 확인 없다면 낫싱
 
  CheckNumbers(){
    for(let k=0;k<3;k++){
      if(input[k]===counter[k]){
         //기능 4. 겹쳐지는 문자열이 존재한다면 위치를 확인하여 스크라이크인지 볼인지 구별할 것
      }
      else{
        Console.log("낫싱")
      }
    }
  }
}
  //기능 5. 최종 결과 출력하기
}

module.exports = App;
