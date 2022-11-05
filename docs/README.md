# 미션 - ⚾️ 숫자야구 기능 분석 (daepan)
## 🎓 해결해야할 문제 
</br>

[🚀 기능 요구 사항](https://github.com/woowacourse-precourse/javascript-baseball#-%EA%B8%B0%EB%8A%A5-%EC%9A%94%EA%B5%AC-%EC%82%AC%ED%95%AD)

> ❓ 문제 정의 </br>
> 컴퓨터가 결정한 3자리 숫자에 대해 사용자가 맞추는 게임 </br>
> 컴퓨터는 랜덤한 세자리 숫자를 만들어야하고, 사용자의 입력에 맞춘 결과를 보여준다. ex) 볼, 스트라이크, 낫싱 </br>
> 또한 게임종료 시 사용자의 입력에 따라 게임을 재시작 혹은 종료해야한다. </br>
> 그리고 해당 흐름 속에서 에러가 날 수 있는 상황에 대한 예외처리를 생각한다.

</br>

## 💻  컴퓨터에 대한 기능
- [ ] 게임시작 시 게임 시작 멘트 출력 기능 - `printStartSentence`
- [ ] 3자리 수의 랜덤 수 반환하는 기능 - `setRandomNumber`
- [ ] 사용자가 입력한 숫자가 랜덤 수가 존재하는 하는 경우에 대한 결과 값 반환 기능 - `duplicateNumber`
- [ ] 랜덤 숫자와 사용자의 숫자 비교결과를 알맞는 문장을 print 하는 기능 - `printDuplicateResult`
- [ ] 사용자가 입력한 문자열을 배열로 변환하는 기능 - `stringToArray`
 
 </br>

## 👨 사용자에 대한 기능
- [ ] 게임에 대한 3자리 숫자를 입력할 수 있는 기능 - `inputUserNumber`
- [ ] 세 자리 수가 입력되지 않은 경우에 대한 에러처리 기능 - `isValidateInputNumber`
- [ ] 3스트라이크 이후 1과 2 입력 받는 기능 = `gameOption`
- [ ] 게임종료 이후 1 입력 시 게임을 시작할 수 있는 기능 -`startGameOption`
- [ ] 게임종료 이후 2 입력 시 게임을 종료하는 기능 - `endGameOption`
- [ ] 게임종료 이후 1과 2 이외의 수 입력 시 에러처리 기능 - `isValidateGameOption`
</br>

## ✅ 기능 구현 시 확인할 사항
1. 입력과 출력에서는  MissionUtils 라이브러리에서 제공하는 `Console.readLine`, `Console.print`를 활용한다.
2. 랜덤 수 반환의 경우 `Random.pickNumberInRange()`를 활용한다.
3. JavaScript 네이밍 컨벤션을 잘 지켜야한다.
4. 함수가 하나의 기능과 하나의 역할만 하고 있는지 주의한다.
5. 함수 네이밍이 직관적인지 확인하자.


