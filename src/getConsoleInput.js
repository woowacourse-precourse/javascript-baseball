const MissionUtils = require('@woowacourse/mission-utils')
const checkInputIsValid = require('./checkInputIsValid')
const getScore = require('./getScore')
const printScore = require('./printScore')

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