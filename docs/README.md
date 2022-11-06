## 기능구현 요구사항

### 주의점
<hr/>

* ```const app = new App(); app.play();``` 로 실행해야함. 
* Random 값 추출은 MissionUtils 라이브러리의 Random.pickNumberInRange()를 활용한다.<br/>
* 사용자의 값을 입력 받고 출력하기 위해서는 MissionUtils 라이브러리에서 제공하는 Console.readLine, Console.print를 활용한다.<br/>
* indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
* 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
* 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
* 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.


<hr/>

### 기능구현함수들
<hr/>
<br/>

#### 1.target 값 만들기 : Random.pickNumberInRange()를 사용해 target을 play의 지역변수로 저장한다. <br/>
#### 2.숫자를 입력받아 콜백을 호출해 데이터를 처리하는 입력부를 만든다. <br/>
#### 3.데이터를 입력받아 결과에 따라 결과를 출력하는 출력부를 만든다.<br/>
#### 4.출력부에 결과가 3개의 숫자를 모두 맞추었다면, 다시 게임을 시작지를 물어보는 입력부를 만든다.<br/>
#### 5.입력된 결과에 따라 종료를 하거나, 지금 호출된 play()함수를 종료하고 while문을 돈다. <br/>
