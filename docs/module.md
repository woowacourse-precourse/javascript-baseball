# module.exports 와 exports 의 차이

단일 내보내기
module.exports = 함수명

단일 불러오기
const 불러올변수명 = require("파일 경로")
불러올변수명

복수 내보내기
exports.함수1 = 함수1
exports.함수2 = 함수2

const 불러올변수명 = require("파일 경로")
불러올변수명.함수1
불러올변수명.함수2
