//constants & error codes
const Constants = {
  TOTAL_COUNT: 3,
  OPTION_STRING: '12',
  INPUT_STRING: '123456789',
};
const Errors = {
  ERR_INPUT_UNDEFINED: '입력값이 없습니다',
  ERR_3_NUM_NEEDED: '입력은 3글자여야합니다',
  ERR_NUM_DUPLICATED: '입력에 중복된 숫자가 포함되어 있습니다',
  ERR_ONLY_NUMBER: '입력값은 1~9의 중복되지 않는 세개의 수로 구성되어야합니다',
  ERR_OPT_1_CHAR_NEEDED: '한글자만 입력해주세요',
  ERR_OPT_ANSWER_NEEDED: '1 또는 2로 응답해주세요',
};
module.exports = { Constants, Errors };
