const MissionUtils = require("@woowacourse/mission-utils");

let str = ""; 
let str2 = ""; 

const mapfn = (arg) => Number(arg);

let cntStrike = 0;
let cntBall = 0;


class App { 
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    
    const randoms = [1, 3, 5, 5, 8, 9]; 
    makeRandoms(randoms);

    const randomNum = [];
    while (randomNum.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNum.includes(number)) {
      randomNum.push(number);
      }
    }    

    do {
      cntStrike = 0;
      cntBall = 0;
      
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => { 
        str = `${answer}`;        
        console.log(`${answer}`);
      });

      if(str.length > 3){ //예외 처리
        ExceptError();          
      }

      if(str=="1"){
        break;
      }
      else if(str=="2"){
        break;
      }

      let answers = str.split('').map(mapfn);
      
      compareNumbers(answers,randomNum);

    } while(cntStrike < 3)

    if(str=="1"){
      MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. 1을 누르셨습니다! 게임을 새로 시작합니다.');
      this.play();
    }
    else if(str=="2"){
      MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. 2를 누르셨습니다! 게임을 종료합니다.');
      endGame();
    }

    if(cntStrike===3){
      MissionUtils.Console.print(`${cntStrike}스트라이크`);
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          
      MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer2) => {
        str2 = `${answer2}`;
        console.log(`${answer2}`);
      });
    
      let n = str2.split('').map(mapfn);
    
      if(n === 1) {
        this.play(); 
      } else {
        endGame();
      }
    }

    
  }
}

const makeRandoms = (randoms) => {
  a = MissionUtils.Random.pickNumberInRange;
  randoms.reduce((acc, a) => {
    return acc += a;  
  }, MissionUtils.Random.pickNumberInRange)
}

const compareNumbers = (answers,randomNum) => {
  if(answers.filter(x => randomNum.includes(x))<0 || randomNum.filter(x => answers.includes(x))<0) {
    MissionUtils.Console.print('낫싱');
  }
  else {
    for(let i=0; i<3; i++){     
      for(let j=0; j<3; j++){ 
        if(answers[i] === randomNum[j]){
          if(i===j){ 
            cntStrike += 1;
          } else { 
            cntBall += 1;
          }          
        }
      }
    }
    countBaseBall(cntStrike, cntBall);
  }  
};

const compareSpot = (answers,randomNum) => {
  for(let i=0; i<3; i++){ //같은 숫자가 있다면    
    for(let j=0; j<3; j++){ //1.같은 위치에도 있나? yes -> 스트라이크, no -> 볼
      if(answers[i] === randomNum[j]){
        if(i===j){  //yes -> 스트라이크
          cntStrike += 1;
        } else {  //no -> 볼
          cntBall += 1;
        }          
      }
    }
  }    
  //2.스트라이크/볼이 몇개인가? --> countBaseBall 호출
  countBaseBall(cntStrike, cntBall);
}

const countCnt = (answers,randomNum,i,j) => {
  if(answers[i] === randomNum[j]){
    if(i===j){
      cntStrike += 1;
    } else {  
      cntBall += 1;
    }          
  }
}

const countBaseBall = (cntStrike, cntBall) => { 
  if(cntStrike>0 && cntBall>0){
    MissionUtils.Console.print(`${cntBall}볼 ${cntStrike}스트라이크`);
  } else if(cntStrike>0 && cntStrike<3){
    MissionUtils.Console.print(`${cntStrike}스트라이크`);
  } else if(cntBall>0 && cntBall<3){
    MissionUtils.Console.print(`${cntBall}볼`);
  } else if(cntStrike===0 && cntBall===0){
    MissionUtils.Console.print('낫싱');
  }
}

const selectNum = () => {
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer2) => {
    str2 = `${answer2}`;
    console.log(`${answer2}`);
  });

  let n = str2.split('').map(mapfn);

  if(n === 1) {
    continueGame(); 
  } else {
    endGame();
  }
}

const endGame = () => {
  MissionUtils.Console.print("게임 종료");
}


function ExceptError() {
  throw MissionUtils.Console.print('숫자 3개만 입력해주세요. 게임을 종료합니다.');
}

module.exports = App;
