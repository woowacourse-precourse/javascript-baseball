## ✔️기능 목록
<br/>

0. <strong>게임종료 조건확인</strong>
    * 첫번째 게임은 조건 없이 시작
    * 두번째 게임부터 사용자의 입력을 바탕으로 재시작/종료
      * do while

1. <strong>게임 시작 문구 출력</strong>
    ```
    숫자 야구 게임을 시작합니다.
    ```

2. <strong>난수 생성</strong>
    * MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의` PickNumberInRange()` 활용
    * includes를 활용하여 3자리가 모두 다르도록 생성
    * Set으로 난수 3개를 저장

3. <strong>사용자의 입력 값 받기</strong>
    ```
    숫자를 입력해주세요 : 
    ```
    * [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Console.readLine`, `Console.print` 활용
    * 사용자가 잘못된 값을 입력한 경우 `throw`문으로 예외를 발생
        * 예외사항
        1. 1~9보다 큰 수를 썼을때
        2. 입력값이 3개가 아닐때
        3. 같은 수를 썼을때

4. <strong>입력 받은 수에 결과를 계산하기</strong>
  * result = {ball,strike}
  * 입력 받은 수를 forEach문을 돌려 Set의 has와 [...set].indexOf로 ball인지 strike인지 판단

5. <strong>종료 조건</strong>
  * result의 strike가 3일 때
  ```
  3스트라이크
  3개의 숫자를 모두 맞히셨습니다! 게임 종료
  게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
  ```
   * 종료 되었다면 7번 기능

6. <strong>입력한 수에 대한 결과를 출력하기</strong>
  * result에 어떤 값도 들어가 있지 않다면 낫싱 출력
  * 있다면 볼, 스트라이크 출력

7. <strong>사용자의 재시작/종료 입력을 기다림</strong>
  * 1번을 받으면 isRestart = true;
  * 2번을 받으면 isRestart = false;