const MissionUtils = require('@woowacourse/mission-utils')

const printScore = (score) => {
  const {strike, ball, nothing} = score

  const ballMessage = ball > 0 ? `${ball}볼` : ''
  const strikeMessage = strike > 0 ? `${strike}스트라이크` : ''
  const nothingMessage = nothing === 3 ? '낫싱' : ''

  const spacing = !ballMessage || !strikeMessage ? '' : ' ' 

  let message = ballMessage + spacing + strikeMessage + nothingMessage
  
  if(strike === 3)message += '\n게임 종료'
  
  MissionUtils.Console.print(message)
}

module.exports = printScore