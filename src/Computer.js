const { Random } = require('@woowacourse/mission-utils')
const {NUMBER, STRING} = require('./Const.js');

class Computer {
    makeRandomNum() {
        let ret=[];
        while(ret.length < NUMBER.MAX_LENGTH) {
            const currNum = Random.pickNumberInRange(NUMBER.RANGE_LEFT,NUMBER.RANGE_RIGHT);
            if(ret.includes(currNum)) continue;
            ret.push(currNum);        
        }
        return ret.join(STRING.EMPTY);
    }
}

module.exports = Computer;