removeDuplicated = (s) => {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }

  return answer;
};

module.exports = { removeDuplicated };
