const MissionUtils = require("@woowacourse/mission-utils");    

const ball_cnt = (input_num, computer_num) => {
  let input_num_str = String(input_num)
  let input_computer_str = String(computer_num)
  result_cnt = 0
  for (let i = 0; i < input_computer_str.length; i++){
      if (input_num_str[i]!==input_computer_str[i] && input_computer_str.includes(input_num_str[i])){
          result_cnt += 1
      }
  }
  return result_cnt
}

const strike_cnt = (input_num, computer_num) => {
  let input_num_str = String(input_num)
  let input_computer_str = String(computer_num)
  result_cnt = 0
  for (let i = 0; i < input_computer_str.length; i++){
      if (input_num_str[i]===input_computer_str[i]){
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
  result = 0
  for (let i = 0; i < 3; i++){
    temp = MissionUtils.Random.pickNumberInRange(1, 9)*(10**i)
    result = result + temp
  }  
  return result
}

const play_inst = (is_end, solution) => {  
  MissionUtils.Console.readLine("숫자를 입력해 주세요", (answer)=>{    
    console.log(answer, solution)
    if (answer == solution) {
      is_end[0] = true
    } else if (answer.length <= 3) {
      console.log(gm_result(answer, solution))
      is_end[0] = false
    } else if (answer.length > 3) {
      throw new Error("Invalid Input to inference");
    }

    if (is_end[0]){
      try {
        play_again_test(is_end, play_inst)
      } catch (e) {
        throw e
      }
    } else {
      play_inst(is_end, solution)
    }
  })  
}

class App {
  play() {
    var is_end = [false]
    console.log("숫자 야구 게임을 시작합니다.")    
    try {
      play_inst(is_end, gen_rand_num())              
    } catch (e) {
      throw e
    }
  }
}

module.exports = App;
