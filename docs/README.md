# 미션 - 숫자 야구

## 🚀 구현해야할 기능
<br>

### 1. 컴퓨터의 랜덤 수 생성
- ```MissionUtils.Random.pickUniqueNumbersInRange``` 를 활용하여 생성한다.
```javascript
    const computet_random_number = MissionUtils.RandompickUniqueNumbersInRange(1, 9, 3); 
```
### 2. 사용자의 숫자 입력받기
+ 생각해보니 숫자가 아닐때와 이렇게 입력(1399)하면 set을 하면 길이가 3이된다. 
1. 그냥 문자열 길이 체크 && 숫자가 맞는지 확인
2. 길이가 3이라는 소리니 -> set을 활용하여 중복을 체크한다. 

위 조건에 해당하면 throw를 던진다.

### 3. 사용자의 number와 컴퓨터의 random number 비교 ***(4가지 조건문)***
- 완전히 일치하면 ```3스트라이트```출력하고 종료 후, 다시 또 할지 선택한다.
- 일치하는 것이 하나도 없으면 ```낫싱```을 출력한다.
- ```스트라이크``` : 같은 수가 같은 자리에 있으면 스트라이크이다.
- ```볼``` : 같은 수가 다른 자리에 있으면 볼이다.
