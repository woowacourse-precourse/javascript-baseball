function compareDigit(number, index, arr) {
  let result;

  if (number === arr[index]) {
    result = '스트라이크';
  }

  if (number !== arr[index] && arr.includes(number)) {
    result = '볼';
  }

  return result;
}

function compareArrResult(comArr, userArr) {
  let result = { 스트라이크: 0, 볼: 0 };

  comArr.forEach((elem, index) => {
    let strikeOrBall = compareDigit(elem, index, userArr);
    result[strikeOrBall] += 1;
  });

  let strikeCount = result['스트라이크'];
  let ballCount = result['볼'];

  if (ballCount > 0 && strikeCount > 0) return `${ballCount}볼 ${strikeCount}스트라이크`;
  if (ballCount === 0 && strikeCount > 0) return `${strikeCount}스트라이크`;
  if (ballCount > 0 && strikeCount === 0) return `${ballCount}볼`;
  return '낫싱';
}

module.exports = compareArrResult;
