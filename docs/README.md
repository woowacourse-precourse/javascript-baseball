## ✔️기능 목록

<br/>

0. <strong>변수생성</strong>

   - 게임에 필요한 배열, 문구 들을 생성한다.

1. <strong>게임 시작 & 문구 출력</strong>

   ```
   숫자 야구 게임을 시작합니다.
   ```

2. <strong>난수 생성</strong>

   - MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의` PickNumberInRange()` 활용
   - includes를 활용하여 3자리가 모두 다르도록 생성
   - Set으로 난수 3개를 저장

3. <strong>사용자의 입력 값 받기</strong>

   ```
   숫자를 입력해주세요 :
   ```

   - [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Console.readLine`, `Console.print` 활용
   - 사용자가 잘못된 값을 입력한 경우 `throw`문으로 예외를 발생
     - 예외사항
     1. 1~9보다 큰 수를 썼을때
     2. 입력값이 3개가 아닐때
     3. 같은 수를 썼을때

4. <strong>입력 받은 수에 결과를 계산하고 출력하기</strong>

   - result = {ball,strike}
   - 입력 받은 수를 forEach문을 돌려 Set의 has와 [...set].indexOf로 ball인지 strike인지 판단
   - result에 어떤 값도 들어가 있지 않다면 낫싱 출력
   - 있다면 볼, 스트라이크 출력

5. <strong>종료 조건</strong>

   - result의 strike가 3일 때

   ```
   3스트라이크
   3개의 숫자를 모두 맞히셨습니다! 게임 종료
   게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
   ```

   - 종료 되었다면 7번 기능

6. <strong>종료되지 않았다면 다시 이닝 시작</strong>

   - 3번 함수 불러오기

7. <strong>사용자의 재시작/종료 입력을 기다림</strong>

   - 1번을 받으면 app.play()
   - 2번을 받으면 mission-utils의 Console.close();
