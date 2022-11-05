const CheckInput = (input) => {
  let inputarray = input.split('').map((a) => Number(a));
  
  if(CheckSize(inputarray)){
    throw "세자리의 수를 입력해주세요!!"
  }
  else if(CheckValidate(inputarray)){
    throw "1~9사이의 숫자를입력해주세요!!";
  }
}

const CheckSize = (input) => {
  return (input.length !== 3) ? true : false
};

const CheckValidate = (input) => {
  const validnumber = [1,2,3,4,5,6,7,8,9];
    for( let i of input){
      return (!validnumber.includes(i)) ? true : false
    }
};

module.exports = CheckInput;