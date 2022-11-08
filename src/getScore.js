const getScore = (input, answer) => {
  const result = {strike: 0, ball: 0, nothing: 0}
  for (let i = 0; i < input.length; i++) {
    const number = parseInt(input[i],10)
    if(answer[i] === number){
      result.strike++
      continue
    }
    if(answer.includes(number)){
      result.ball++
      continue
    }
    result.nothing++
  }
  return result
}

module.exports = getScore