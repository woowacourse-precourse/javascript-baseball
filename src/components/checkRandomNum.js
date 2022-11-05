const checkRandomNum = (randomNum) => {
  if (randomNum.split("").length !== 3) throw "입력하신 값이 3자리가 아닙니다";
  if (!Number(randomNum)) throw "입력하신 값이 숫자가 아닙니다";
  if (Number(randomNum) < 101) throw "-, + 부호등 불필요한 문자가 존재합니다.";
  let isSameNum = randomNum.split("").reduce((acc, num, i, arr) => {
    if (!acc.includes(num)) acc.push(num);
    if (i === 2) return acc.length !== arr.length;
    return acc;
  }, []);
  if (isSameNum) throw "입력하신 값에 중복되는 숫자가 존재합니다.";
  return randomNum;
};

module.exports = checkRandomNum;
