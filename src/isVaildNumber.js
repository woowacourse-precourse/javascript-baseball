const isVaildNumber = (inputNum) => {
    // 1. 숫자가 아닌 입력 값
    // 2. 3자리 미만 및 초과
    // 3. 0 포함
    // 4. 음수
    if( isNaN(Number(inputNum))
        || String(inputNum).length !== 3
        || String(inputNum).includes('0') 
        || Number(inputNum) < 0 ) {
            return false;
   }
   return true; 
}

module.exports = isVaildNumber;