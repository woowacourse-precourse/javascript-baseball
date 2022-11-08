const checkInputIsValid = (input) => {
  if(input.length !== 3)throw new Error('잘못된 길이 입력 오류')
  for (let i = 0; i < input.length; i++) {
    const char = input[i]
    if(isNaN(parseInt(char)))throw new Error('숫자가 아닌 입력 오류')

    const regex = new RegExp(char, 'g')
    if(input.match(regex).length > 1)throw new Error('중복된 입력 오류')
  }
  return true
}

module.exports = checkInputIsValid