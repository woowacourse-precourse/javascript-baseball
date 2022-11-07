const { Random } = require('@woowacourse/mission-utils')

class Computer {
    makeRandNum() {
        let ret=[];
        while(ret.length < 3) {
            const currNum = Random.pickNumberInRange(1,9);
            if(ret.includes(currNum)) continue;
            ret.push(currNum);        
        }
        return ret.join('');
    }
}