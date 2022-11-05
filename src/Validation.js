const { ERROR, ANSWER } = require('./Constants');
const { generateNumArr } = require('./Utils');

const validLength = (num) => num.length === ANSWER.LENGTH;
