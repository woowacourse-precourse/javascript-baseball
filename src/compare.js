const compare = (num, compareNumbers) => {
  const num_arr = num.split("").map((x) => +x);
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < compareNumbers.length; i++) {
    strike += countStrike(compareNumbers[i], num_arr[i]);
    ball += countBall({compareNumber: compareNumbers[i], num_arr: num_arr, index: i});
  }
  return [strike, ball];
};

const countStrike = (compareNumber, num) => {
  if (compareNumber === num) {
    return 1;
  } else {
    return 0;
  }
};

const countBall = ({ compareNumber, num_arr, index }) => {
  if (num_arr.includes(compareNumber) && index !== num_arr.indexOf(compareNumber)) {
    return 1;
  } else {
    return 0;
  }
};

module.exports = compare;
