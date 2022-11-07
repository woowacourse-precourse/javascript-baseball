const MissionUtils = require("@woowacourse/mission-utils");    

const ball_cnt = (input_num, computer_num) => {
  //let input_num_str = String(input_num)
  //let input_computer_str = String(computer_num)
  result_cnt = 0
  for (let i = 0; i < computer_num.length; i++){
      if (parseInt(input_num[i])!==computer_num[i] && computer_num.includes(parseInt(input_num[i]))){
          result_cnt += 1
      }
  }
  return result_cnt
}

const strike_cnt = (input_num, computer_num) => {
  //let input_num_str = String(input_num)
  //let input_computer_str = String(computer_num)
  result_cnt = 0
  for (let i = 0; i < input_num.length; i++){
      if (parseInt(input_num[i])===computer_num[i]){
          result_cnt += 1
      }
  }
  return result_cnt
}

const gm_result = (input_num, computer_num) => {
  let ball = ball_cnt(input_num, computer_num)
  let strike = strike_cnt(input_num, computer_num)
  if (ball === 0 && strike === 0){
      return "낫싱"
  } else if (ball !== 0 && strike === 0) {
      return `${ball}볼`
  } else if (ball === 0 && strike !== 0) {
      return `${strike}스트라이크`
  } else if (ball !== 0 && strike !== 0) {
      return `${ball}볼 ${strike}스트라이크`
  }
}

const gen_rand_num = () => {
  computer = []
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer
}

const play_inst = (is_end, solution) => {  
  MissionUtils.Console.readLine("숫자를 입력해 주세요", (answer)=>{    
    console.log(answer, solution)
    let temp_result = gm_result(answer, solution)
    if (temp_result === "3스트라이크") {
      //case when answer is exactly same with solution
      MissionUtils.Console.print(temp_result)
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
      is_end[0] = true
    } else if (answer.length == 3) {
      //case answer is valid but not solution
      MissionUtils.Console.print(temp_result)
      is_end[0] = false
    } else {
      //case answer is invalid, throw error and shut down program
      throw new Error("Invalid Input to inference");
    }

    if (is_end[0]){
      //case when game is end
      try {
        play_again_test(is_end, play_inst)
      } catch (e) {
        throw e
      }
    } else {
      //case when game is not end and all recursive call function itself
      play_inst(is_end, solution)
    }
  })  
}

const play_again_test = (is_end, callback)=> {
  MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (answer)=>{
    if ([1, 2, "1", "2"].includes(answer) === false){
      //case when invalid restart input
      throw new Error("Invalid Input to restart");
    } else if (answer == 1) {
      //case when restart another game
      is_end = [false]
      callback(is_end, gen_rand_num())
    } else if (answer == 2) {
      //case when game is end and just print game end to console
      MissionUtils.Console.print("game end")
      MissionUtils.Console.close()
    }
  })
}

class App {
  play() {
    var is_end = [false]
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")    
    try {
      play_inst(is_end, gen_rand_num())              
    } catch (e) {
      throw e
    }
  }
}

module.exports = App;
