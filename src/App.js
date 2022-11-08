const MissionUtils = require('@woowacourse/mission-utils');
class App {
  
  play() { 
    
    Start()

   
   
  }
}



  function Start()  {
  MissionUtils
    .Console
      .print('숫자 야구 게임을 시작합니다.')
 GetRandom() 
}

  function Input(CollectAnswer)  {
  MissionUtils
    .Console
      .readLine('숫자를 입력해주세요 : ', (answer) => {
    if (answer.length !== 3)  {
      throw new Error();

    }
    if (isNaN(answer))  {
      throw new Error()
    } 
    
    if (answer[0] === answer[1] || answer[0] === answer[2] || answer[1] === answer[2] )  {
      throw new Error()
   }
    
    Count(CollectAnswer, answer)
    
   });
}



  function GetRandom()  {

  let CollectAnswer = MissionUtils
    .Random
      .pickUniqueNumbersInRange(1, 9, 3)

  
  CollectAnswer = CollectAnswer.join('')

 
  
  Input(CollectAnswer)

}

  function Count(CollectAnswer, answer)  {
let strike = 0
let ball = 0
for (i in CollectAnswer)  {
  if (CollectAnswer[i] === answer[i])  {
    strike += 1
  }
}
for (i in CollectAnswer)  {
if (answer.includes(CollectAnswer[i]) && CollectAnswer[i] !== answer[i])  {
  ball += 1
  }
}

Judge(strike,ball,CollectAnswer)
}

  function Judge(strike, ball, CollectAnswer){
  if (strike === 0 && ball === 0)  {
    MissionUtils
      .Console
        .print('낫싱')

  }
  if (strike>0 && ball ===0)  {
    MissionUtils
      .Console
        .print(String(strike) + '스트라이크')
  }

  if (strike === 0 && ball >0)  {
    MissionUtils
      .Console
        .print(String(ball) + '볼')

  }

  if (strike >0 && ball > 0)
  MissionUtils
    .Console
      .print(String(ball) + '볼 ' + String(strike) + '스트라이크')

  if (strike < 3)  {
    Input(CollectAnswer)
  }
  if (strike === 3)  {
    Right_answer()
  }
}
  function Right_answer()  {
  MissionUtils
    .Console
      .print('3개의 정답을 모두 맞히셨습니다! 게임 종료')
  ReStart()
}

  function ReStart()  {
  MissionUtils
    .Console
      .readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (reply) => {
    if (reply === '1')  {
      GetRandom()
    }

    if (reply === '2')  {
      MissionUtils
        .Console
          .close()
    }
    if (reply !== '1' && reply !== '2')  {
      throw new Error()
    }
   });
}




const app = new App
app.play()

module.exports = App;
