const constant = require('../Constants');

function printAnswer(resultList){
    if (resultList[0] === 0 && resultList[1] === 0){
      return constant.RESULTS.NOTHING;
    }
    else if (resultList[0] === 0 && resultList[1] !== 0){
      return String(resultList[1])+constant.RESULTS.BALL;
    }
    else if (resultList[0] !== 0 && resultList[1] === 0){
      return String(resultList[0])+constant.RESULTS.STRIKE;
    }
    return String(String(resultList[1])+constant.RESULTS.BALL+' '+String(resultList[0])+constant.RESULTS.STRIKE);
}

module.exports = printAnswer;