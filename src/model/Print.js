const constant = require('../Constants');

function printAnswer(resultList){
    const [strike, ball] = resultList;
    
    if (strike === 0 && ball === 0){
      return constant.RESULTS.NOTHING;
    }
    else if (strike === 0 && ball !== 0){
      return String(ball)+constant.RESULTS.BALL;
    }
    else if (strike !== 0 && ball === 0){
      return String(strike)+constant.RESULTS.STRIKE;
    }
    return String(ball)+constant.RESULTS.BALL+' '+String(strike)+constant.RESULTS.STRIKE;
}

module.exports = printAnswer;