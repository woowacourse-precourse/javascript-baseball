const BaseballGame = {
  getHintCount(userInputList,answerList) {
    return result = {
      strickCount : userInputList.filter((value,index) => {
        return value === answerList[index]
      }).length,
      
      ballCount : userInputList.filter((value,index) => {
        return answerList.includes(value) && (value !== answerList[index])
      }).length
    }
  }
}

module.exports = BaseballGame;