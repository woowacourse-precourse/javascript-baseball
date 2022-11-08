const MissionUtils = require('@woowacourse/mission-utils')
const checkInputIsValid = require('./checkInputIsValid')
const getScore = require('./getScore')
const printScore = require('./printScore')
const makeRandomNumbers = require('./makeRandomNumbers')

const getEndGameInput = () => {
  MissionUtils.Console.readLine('3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  (input)=>{
    if(input === '1'){
      const newAnswer = makeRandomNumbers()

      getConsoleInput(newAnswer)
    }else{
      MissionUtils.Console.close()
    }
  })
}

const getConsoleInput = (answer) => {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ',(input)=>{
    checkInputIsValid(input)
    const score = getScore(input, answer)
    
    printScore(score)

    score.strike === 3 && getEndGameInput()
    
    getConsoleInput(answer)
  })
}

module.exports = getConsoleInput