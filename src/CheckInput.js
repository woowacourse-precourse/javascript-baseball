const CheckInput = (input) => {
  let inputarray = input.split('').map((a) => Number(a));
  
  if(CheckSize(inputarray)){
    throw "세자리의 수를 입력해주세요!!"
  }
}

const CheckSize = (input) => {
  return (input.length !== 3) ? true : false
};

module.exports = CheckInput;