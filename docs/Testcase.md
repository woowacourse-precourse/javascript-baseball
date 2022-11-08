## 테스트케이스 작성순서

0. 시작 문구

   - message: 숫자 야구 게임을 시작합니다. // Console.print

1. 컴퓨터가 3개의 임의의 수 선택 // Console.Random.pickNumberInRange(start,end,count)

   - type: number
   - 1~9
   - 3자리
   - 같은 수 중복 x

2. 플레이어가 숫자 입력 (test) // validity check

- message : 숫자를 입력해주세요 : (input) // Console.readLine

- Fail: // throw Error -> Console.close()

  - 잘못된 값 입력시 throw 예외 -> 애플리케이션 종료

- Success: //pickNumberInRange

  - type: number
  - 1~9
  - 3자리
  - 같은 수 중복 x

3. 입력에 대한 결과 출력 -> 3스트라이크 까지 반복 // Console.readLine

   - 볼, 스트라이크, 낫싱
   - 스트라이크
     -> message: 3개의 숫자를 모두 맞히셨습니다! 게임 종료
     게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.

4. 재시작 (1) or 종료 (2) 선택
   - 재시작 : 0번으로.
   - 종료 :
     (-> message: 게임 종료)
