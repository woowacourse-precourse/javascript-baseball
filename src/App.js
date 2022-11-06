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

class App {
  play() {}
}

module.exports = App;
