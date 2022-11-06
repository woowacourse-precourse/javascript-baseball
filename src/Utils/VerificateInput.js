const VerificateInput = (input) => {
  console.log('verificate')
  let userNum = input.toString();
  let flag = 0;
  userNum = Array.from(userNum);
  // if(userNum.length != 3) throw new Error ('잘못된 입력값입니다 (입력 길이가 3이여야 합니다)');
  // try{
  //   userNum.map((value)=>{
  //     console.log(value)
  //     if(value < 1 || value > 9) {
  //       throw new Error ('잘못된 입력값입니다 (입력값은 1 ~ 9 여야 합니다)');
  //       console.log('1~9')
  //     }
  //   })
  //   try{
  //     return true;
  //   } catch (e) {
  //     console.error(e)
  //   }
  // } catch (e) {
  //   console.error(e)
  // }
  if(userNum.length != 3) throw new Error ('잘못된 입력값입니다 (입력 길이가 3이여야 합니다)');
  userNum.map((value)=>{
    if(value < 1 || value > 9) throw new Error ('잘못된 입력값입니다 (입력값은 1 ~ 9 여야 합니다)');
  })
  return true;
}
module.exports = VerificateInput;