function VerificateInput(input){

  let userNum = input.toString();
  userNum = Array.from(userNum);
  let userNumSet = new Set(userNum);

  if(userNum.length !== 3) throw new Error ('잘못된 입력값입니다 (입력길이는 3이여야합니다)')
  if(userNum.length !== userNumSet.size) throw new Error ('잘못된 입력값입니다 (서로 다른 3자리수를 입력해야합니다)')
  userNum.map((value)=>{
    if(value < 1 || value > 9) throw new Error ('잘못된 입력값입니다 (입력값은 1 ~ 9 여야 합니다)');
  })

  return true;
}
module.exports = VerificateInput;