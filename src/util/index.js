function numberToArray(inputAnswer) {
  return Array.from(inputAnswer,(num)=>Number(num));
}

function exceptionHandle(inputAnswer) {
  const inputAnswerArray = numberToArray(inputAnswer);
  if(inputAnswerArray.includes('0')) return true;
  if(inputAnswerArray.length !== 3) return true;
  if(new Set(inputAnswerArray).size !== 3) return true;
  if(isNaN(+inputAnswer)) return true;

  return false;
}

module.exports = {numberToArray, exceptionHandle};
