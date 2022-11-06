## 기능구현 요구사항

### 주의점
<hr/>

* ```const app = new App(); app.play();``` 로 실행해야함. 
* Random 값 추출은 MissionUtils 라이브러리의 Random.pickNumberInRange()를 활용한다.<br/>
* 사용자의 값을 입력 받고 출력하기 위해서는 MissionUtils 라이브러리에서 제공하는 Console.readLine, Console.print를 활용한다.<br/>

<hr/>

### 기능구현함수들
<hr/>
<br/>
> 1. target 값 만들기 : Random.pickNumberInRange()를 사용해 target을 play의 지역변수로 저장한다.
> 2. 숫자를 입력받아 콜백을 호출해 데이터를 처리하는 입력부를 만든다.
> 3.
