class Result {
  get(strike, ball) {
    if (strike === 3) {
      return 'answer';
    } 
    
    if (strike === 0 && ball === 0) {
      return 'nothing';
    } 
    
    if (strike === 0 && ball !== 0) {
      return `${ball}볼`;
    } 
    
    if (strike !== 0 && ball === 0) {
      return `${strike}스트라이크`;
    } 
    
    return `${ball}볼 ${strike}스트라이크`;
  }
}

module.exports = Result;