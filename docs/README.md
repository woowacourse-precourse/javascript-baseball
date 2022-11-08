# 숫자 야구 게임을 진행하기 위한 기능 리스트

---

### &nbsp;&nbsp;1.우선적으로 수행해야 할 기능들

<!-- Bullet List -->

> 1.컴퓨터의 숫자를 랜덤하게 설정해야 한다.

숫자 야구 게임을 진행하기 위한 상대의 숫자를 우선적으로 실행 시켜준다.
유저가 숫자를 입력하기 이전에 컴퓨터의 숫자가 선언되어 있지 않으면
그 게임은 진행이 불가능 하기 때문이다.

컴퓨터의 숫자 선정시에 이용해야 할 코드 :

```javascript
const MissionUtils = requie("@woowacourse/mission-utils");
MissionUtils.Random.pickNumberInRange(startInclude, endInclude);
// 사용자가 지정한 범위 내에서 랜덤하게 값을 정한다.
```

> 2.사용자의 값을 입력받고 활용할 수 있는 함수를 만든다.

숫자 야구 게임의 목적은 결국 사용자가 값을 입력하고 그 입력 값에 대한 결과를 얻는 것이 목적이다. 그렇기 때문에 사용자가 값을 입력할 수 있게끔 하고 그 값을 활용할 수 있게끔 함수를 리드는 것이 중요하다.

사용자의 값을 입력 받아을 때 이용해야하는 코드 :

```javascript
const MissionUtils = require("@woowacourse/mission-utils");
MissionUtils.Console.readLine("사용수가 값을 입력할 때 도움이 되는 메세지", (answer) => {
    answer로 입력 받은 값을 활용할 함수
})
```

### &nbsp;&nbsp;2.기능리스트
---
<!-- prettier-ignore -->
숫자를 입력해주세요    


　　　　　&downarrow;3자리의 수를 입력 받는다.  
     
     
값을 입력 받는다.   &rightarrow;입력 값의 길이가 3자리 이상이면 throw로 예외로 처리한다.  


　　　　　&downarrow;  
     
     
값에 대한 결과를 파악한다. &rightarrow; 게임 시작시 정한 컴퓨터의 값을 기준으로 한다.  


　　　　　&downarrow;  
     
     
스트라이크와 볼의 개수를 파악한다.  


　　　　　&downarrow;  
     
     
3스트라이크 인지
아닌 지를 판단한다. &rightarrow; 3스트라이크가 아닌 경우 다시 값을 입력 받는다.  


　　　　　&downarrow;  <span style="font-size : .7rem">3스트라이크 일 경우</span>  
     
     
게임을 다시 시작할
것인지 아닌지를 판단한다. <span style="color : red"> &rightarrow;입력 값의 1과 2 이외의 값이면 throw로 예외로 처리한다.</span>  


　　　　　&downarrow;  
     
     
2의 값이 주어지면 콘솔을
종료하며 게임을 끝낸다.

---
