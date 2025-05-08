# Event-Handler
- 사용자 인터페이스에서 발생하는 이벤트(예: 클릭, 입력 등)에 대한 응답으로 실행되는 함수

## Event, Event handler
https://ko.legacy.reactjs.org/docs/events.html 
- 사건 => 사용자가 버튼을 클릭한 사건 => 버튼 클릭 이벤트
- Event Handler(=Event listener) : 사용자가 웹 페이지와 상호작용할 때 발생하는 다양한 이벤트(클릭, 마우스 오버, 키 입력 등)에 반응하여 특정 동작을 수행하는 함수입니다

- DOM의 이벤트
```
<button onclick="activate()">
  Activate
</button>
```

- React의 이벤트
```
<button onClick={activate}>
  Activate
</button>
```

## 기본 이벤트 핸들러 사용법
- React에서 이벤트 핸들러는 JSX에서 camelCase로 작성되며, 함수로 전달됩니다
```
function ButtonComponent() {
  function handleClick() {
    alert("버튼이 클릭되었습니다!");
  }
  return <button onClick={handleClick}>클릭</button>;
}
```
- 위 코드에서 onClick={handleClick} 부분이 이벤트 핸들러이다. handleClick 함수는 버튼이 클릭될 때 실행됩니다

## 이벤트 객체 사용 (SyntheticEvent)
- React에서는 이벤트 핸들러 함수의 첫 번째 매개변수로 SyntheticEvent 객체가 전달된다. 이를 활용하면 이벤트 정보를 활용할 수 있습니다
```
function InputComponent() {
  function handleChange(event) {
    console.log("입력값:", event.target.value);
  }
  return <input type="text" onChange={handleChange} />;
}
```
- 위 코드에서 event.target.value를 사용하여 입력 필드의 값을 가져올 수 있습니다

## 클래스 컴포넌트에서 이벤트 핸들러
- 클래스 컴포넌트에서는 this 바인딩이 필요할 수 있습니다
```
function ButtonComponent() {
  function handleClick() {
    alert("버튼이 클릭되었습니다!");
  }
  return <button onClick={handleClick}>클릭</button>;
}
```
- 혹은 클래스 필드 문법을 사용하여 바인딩 없이도 이벤트 핸들러를 정의할 수 있습니다
```
class ButtonComponent extends React.Component {
  handleClick = () => {
    alert("클래스 컴포넌트 버튼 클릭!");
  };
  render() {
    return <button onClick={this.handleClick}>클릭</button>;
  }
}
```

## 인자 전달 
- 이벤트 핸들러에 추가적인 인자를 전달하려면 화살표 함수를 사용하거나 bind를 활용할 수 있습니다
```
function ButtonComponent() {
  function handleClick(name) {
    alert(`${name}님, 버튼을 클릭했습니다!`);
  }
  return <button onClick={() => handleClick("홍길동")}>클릭</button>;
}
```

- 클래스 컴포넌트에서는 bind를 사용할 수도 있습니다
```
class ButtonComponent extends React.Component {
  handleClick(name) {
    alert(`${name}님, 버튼을 클릭했습니다!`);
  }
  render() {
    return <button onClick={this.handleClick.bind(this, "홍길동")}>클릭</button>;
  }
}
```

## 이벤트 핸들러에서 상태 변경
- 이벤트 핸들러 내부에서 useState를 사용하여 상태를 변경할 수 있다
```
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

return (
  <div>
    <p>카운트: {count}</p>
    <button onClick={handleClick}>증가</button>
  </div>
  );
}
```

## 기본 이벤트 동작 방지 (preventDefault) 
- 이벤트의 기본 동작(예: 폼 제출, 링크 이동)을 막을 때 event.preventDefault()를 사용합니다
```
function FormComponent() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("폼 제출이 방지되었습니다.");
  }
  return (
    <form onSubmit={handleSubmit}>
    <button type="submit">제출</button>
  </form>
  );
}
```

## 이벤트 전파 중지 (stopPropagation) 
- 이벤트가 부모 요소로 전파되지 않도록 event.stopPropagation()을 사용할 수 있습니다
```
function Parent() {
  function handleParentClick() {
    alert("부모 요소 클릭!");
  }

  function handleChildClick(event) {
    event.stopPropagation();
    alert("자식 요소 클릭!");
  }

  return (
    <div onClick={handleParentClick} style={{ padding: "20px", background: "#ddd" }}>
    <button onClick={handleChildClick}>클릭</button>
    </div>
  );
}
```

## 이벤트 핸들러 최적화 (useCallback) 
- 이벤트 핸들러가 불필요하게 재생성되는 것을 방지하려면 useCallback을 사용할 수 있습니다
```
import { useState, useCallback } from "react";

function OptimizedComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={handleClick}>증가</button>
    </div>
  );
}
```

## Example 1
- 클래스 콤퍼넌트 - bind 사용
```
import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }
  render() {
    return (
      <button
        onClick={this.handleClick}
        disabled={this.state.isConfirmed}
      >
        {this.state.isToggleOn ? "켜짐":"꺼짐"}
      </button>
    )
  }
}

export default Toggle;
```

## Example 2 
- Class field syntax나 Arrow Function을 사용하는 방법

- Class field syntax 사용
```
class MyButton extends React.Component {
  handleClick = () => {
    console.log('this is :', this);
  }

  render() {
    return (
      <button onCLick={this.handle.Click}>
        클릭
      </button>
    );
  }
}
```

- Arrow Function 사용
```
class MyButton extends React.Component {
  handleClick() {
    console.log('this is :', this);
  }

  render() {
    return (
      <button onCLick={ () => this.handle.Click()}>
        클릭
      </button>
    );
  }
}
```

## Example 3
- 함수 컴포넌트 
```
fucntion Toggle(props) {
  const [isToggleOn, setIsToggleOn] = useState(true);

  //방법 1. 함수 안에 함수로 정의
  function handleClick() {
    setIsToggleOn(isToggleOn) => !isToggleOn);
  }

  //방법 2. arrow function을 사용하여 정의
  const handleClick = () => {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  return (
    <button onClick={handleClick}>
      {isToggleOn ? "켜짐" : "꺼짐" }
    </button>
  );
}
```

## Example 4 
- 인자 전달
```
function MyButton(props) {
  const handleDelete = (id, event) => {
    console.log(id, event.target);
  );

  return (
    <button onClick={(event) => handleDelet(1, event)}>
      삭제하기
    </button>
  );
}
```

## DOM event vs React event 
- 이벤트 처리 방식 (이벤트 등록 방식) 
![image](https://github.com/user-attachments/assets/eda00027-1885-4985-83b1-f96565df48b4)
```
<button id="btn">클릭</button>

<script>
  document.getElementById("btn").addEventListener("click", function () {
    alert("DOM 이벤트 핸들러 실행!");
  });
</script>
```

```
function ButtonComponent() {
  function handleClick() {
    alert("React 이벤트 핸들러 실행!");
  }

  return <button onClick={handleClick}>클릭</button>;
}
```

- 이벤트 객체 (Event Object)
![image](https://github.com/user-attachments/assets/27d60da3-dfb7-4cbf-b1b5-ca28dd0dcc69)


```
<button id="btn">클릭</button>

<script>
  document.getElementById("btn").addEventListener("click", function (event) {
    console.log(event.target); // 클릭된 버튼 요소
  });
</script>
```

```
function ButtonComponent() {
  function handleClick(event) {
    console.log(event.target); // 클릭된 버튼 요소
  }

  return <button onClick={handleClick}>클릭</button>;
}
```

- 이벤트 객체 (Event Object)
  - React는 자체적으로 SyntheticEvent를 제공하는데, 이는 브라우저의 네이티브 이벤트를 감싼 객체로, 모든 브라우저에서 동일한 인터페이스를 제공합니다
  - 또한 SyntheticEvent는 이벤트 풀링(Event Pooling) 을 사용하여 성능을 최적화하는데, 핸들러 실행 후 이벤트 객체가 재사용되므로 비동기 코드에서는 event.persist()를 호출해야 합니다

```
function ButtonComponent() {
  function handleClick(event) {
    event.persist(); // SyntheticEvent의 풀링 방지
    setTimeout(() => {
      console.log(event.target); // 정상 동작
    }, 1000);
  }

  return <button onClick={handleClick}>클릭</button>;
}
```
 
- 이벤트 전파 방식 (Event Bubbling & Capturing) 
![image](https://github.com/user-attachments/assets/20dfeac7-9b8b-43ba-a1b0-29ab2391ac12)

```
<div id="parent">
  <button id="child">클릭</button>
</div>
<script>
  document.getElementById("parent").addEventListener("click", function () {
    alert("부모 요소 클릭!");
  });
  document.getElementById("child").addEventListener("click", function (event){
    event.stopPropagation(); // 이벤트 전파 중지
    alert("자식 요소 클릭!");
  });
</script>
```

```
function Parent() {
  function handleParentClick() {
    alert("부모 요소 클릭!");
  }
  function handleChildClick(event) {
    event.stopPropagation(); // 이벤트 전파 중지
    alert("자식 요소 클릭!");
  }

  return (
    <div onClick={handleParentClick} style={{ padding: "20px",background: "#ddd" }}>
    <button onClick={handleChildClick}>클릭</button>
    </div>
  );
}
```

- 이벤트 성능 및 관리
  - React는 모든 이벤트를 루트 요소(document)에서 관리하여 이벤트 리스너를 한 곳에서 처리하는 이벤트 위임(Event Delegation) 방식을 사용합니다
  - 따라서 개별 요소마다 addEventListener를 여러 개 추가할 필요 없이, React의 이벤트 시스템이 자동으로 관리합니다
  - 또한, useCallback을 사용하면 불필요한 이벤트 핸들러 재생성을 방지할 수 있습니다

![image](https://github.com/user-attachments/assets/2903e61b-fa56-4564-9d73-4d528f040219)


```
import { useState, useCallback } from "react";

function OptimizedComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>카운트: {count}</p>
    <button onClick={handleClick}>증가</button>
    </div>
  );
}
```

- 결론
  - React 이벤트 시스템은 코드 작성이 간결하고, 이벤트 위임을 활용해 성능을 최적화하며, 자동 메모리 관리를 지원한다
  - 하지만 React의 SyntheticEvent가 이벤트 객체를 풀링(pooling)하는 특성을 이해하고, 필요할 때 event.persist()를 사용해야 한다

![image](https://github.com/user-attachments/assets/544ca9f5-27a2-42a2-8a5c-2bf4d8488a31)

## 실습 
- Class component
```
import React, { useState } from "react";

class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConfirmed: false,
    };

    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm () {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed
    }));
  }
  render() {
    return (
      <button
        onClick={this.handleConfirm}
        disabled={this.state.isConfirmed}
      >
        {this.state.isConfirmed ? "확인됨" : "확인하기"}
      </button>
    );
  }
}
export default ConfirmButton;
```

- Functional component
```
import React, { useState } from "react";

function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}
export default ConfirmButton;
```

# Conditional Rendering 
- 특정 조건에 따라 UI를 변경하는 방식

## Conditional Rendering
- 어떠한 조건에 따라서 랜더링이 달라지는 것입니다
- 특정 조건에 따라 컴포넌트의 일부 또는 전체를 렌더링하는 방법입니다
- 특정 조건에 따라 다른 UI 요소를 보여주는 것을 의미합니다
- 이는 사용자의 입력, 데이터 상태, 또는 애플리케이션의 다른 조건에 따라 동적으로 콘텐츠를 변경하는 데 필수적입니다

![image](https://github.com/user-attachments/assets/4066b9cf-5eda-4ea1-a893-4b6d111ac340)

## Truthy, Falsy 
- Truthy : True는 아니지만 True로 여겨지는 값
- Falsy : False는 아니지만 False로 여겨지는 값
- JavaScript에서는 Boolean이 아닌 값도 조건문에서 true 또는 false처럼 동작할 수 있습니다
- 이러한 값을 Truthy(참 같은 값) 또는 Falsy(거짓 같은 값)이라고 합니다

```
"hello" // 문자열
" " // 공백이 있는 문자열도 truthy
3.14 // 숫자 (0 제외)
-100 // 음수도 truthy
Infinity // 무한대도 truthy
[] // 빈 배열도 truthy
{} // 빈 객체도 truthy
function(){} // 함수도 truthy
```

```
if ("hello") {
  console.log("참입니다!"); // 실행됨
} else {
  console.log("거짓입니다!");
}
```

```
false // false 자체
0 // 숫자 0
-0 // 음수 0
0n // BigInt 0
"" // 빈 문자열
null // null 값
undefined // undefined 값
NaN // Not-A-Number (숫자가 아님)
```

```
if (0) {
  console.log("참입니다!");
} else {
  console.log("거짓입니다!"); // 실행됨
}

```

1. ||(OR 연산)
```
console.log(false || "안녕"); // "안녕"
console.log(0 || 100); // 100
console.log("" || "기본값"); // "기본값"
console.log(null || "대체값"); // "대체값"

```

```
let name = "" || "홍길동";
console.log(name); // "홍길동"

```
2. &&(AND 연산)
```
console.log(true && "안녕"); // "안녕"
console.log(1 && 100); // 100
console.log("hello" && 0); // 0 (Falsy 만나서 종료)
console.log("" && "무시됨"); // "" (Falsy 만나서 종료)
```

3. ?? (Null 병합 연산자)
```
let user;
console.log(user ?? "기본 사용자"); // "기본 사용자"
let age = 0;
console.log(age ?? 20); // 0 (Falsy이지만 null이 아니므로 유지)
```

## Element variables
- 엘리먼트 변수는 JSX 코드를 변수에 할당하여 재사용하거나 조건에 따라 렌더링을 제어하는 데 사용됩니다
- 엘리먼트 변수 사용 방법
  1. 변수 선언: JSX 코드를 변수에 할당하기 전에 const, let 또는 var 키워드를 사용하여 변수를 선언합니다
  2. JSX 할당: 변수에 JSX 코드를 할당합니다. JSX 코드는 일반적인 자바스크립트 표현식이므로 변수에 직접 할당할 수 있습니다
  3. 렌더링: 변수를 JSX 코드 내에서 중괄호 {}로 감싸서 렌더링합니다.
- 엘리먼트 변수를 사용하는 것은 컴포넌트의 렌더링을 보다 유연하게 관리할 수 있는 방법입니다
- 엘리먼트 변수를 사용하면 JSX 코드에서 특정 엘리먼트를 변수에 저장하고, 이를 조건부 렌더링이나 반복 렌더링에 활용할 수 있습니다

- 엘리먼트 변수의 기본 사용법
```
import React from 'react';

function App() {
  const isLoggedIn = true; // 로그인 상태를 나타내는 변수

  // 엘리먼트를 변수에 저장
  const greeting = isLoggedIn ? <h1>환영합니다!</h1> : <h1>로그인 해주세요.</h1>;

  return (
    <div>
      {greeting} {/* 변수로 저장한 엘리먼트를 렌더링 */}
    </div>
  );
}
export default App;
```

- 여러 엘리먼트 변수 사용하기
```
import React from 'react';
function App() {
  const isLoggedIn = true;
  const greeting = <h1>환영합니다!</h1>;
  const logoutButton = <button>로그아웃</button>;
  const loginButton = <button>로그인</button>;
  return (
    <div>
    {isLoggedIn ? (
      <>
      {greeting}
      {logoutButton}
      </>
    ) : (
        <>
          {loginButton}
        </>
      )}
    </div>
  );
}
export default App;
```
- 배열로 엘리먼트 렌더링하기
```
import React from 'react';

function App() {
  const items = ['사과', '바나나', '체리'];

  const itemList = items.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div>
      <h1>과일 목록</h1>
      <ul>{itemList}</ul>
    </div>
  );
}
export default App;
```

- 엘리먼트 변수의 기본 사용법
```
import React from 'react';

function App() {
  const isLoggedIn = true; // 로그인 상태를 나타내는 변수

  // 엘리먼트를 변수에 저장
  const greeting = isLoggedIn ? <h1>환영합니다!</h1> : <h1>로그인 해주세요.</h1>;

  return (
    <div>
      {greeting} {/* 변수로 저장한 엘리먼트를 렌더링 */}
    </div>
  );
}
export default App;
```

## Inline condition
- 인라인 조건(Inline Condition)은 프로그래밍에서 조건문을 한 줄로 표현하는 방법입니다
- 보통 if 문을 사용하면 여러 줄의 코드가 필요하지만, 인라인 조건을 사용하면 더 간결한 코드 작성이 가능합니다

1. 기본적인 인라인 조건
  일반적인 if 문을 사용하면 코드가 길어질 수 있습니다

2. && 연산자를 활용한 인라인 조건
  조건이 참(true)일 때만 실행하고 싶을 때 사용할 수 있습니다

3. || 연산자를 활용한 기본값 설정
  Falsy 값(false, 0, null, undefined, "")이 주어지면 기본값을 설정할 수 있습니다


## Conditional Rendering 
1. 삼항 연산자
```
function Greeting({ isLoggedIn }) {
  return (
    <h1>{isLoggedIn ? "환영합니다!" : "로그인이 필요합니다."}</h1>
  );
}
```
isLoggedIn이 true이면 "환영합니다!", 아니면 "로그인이 필요합니다."가 표시됩니다
2. 논리 연산자(&&)
```
function Notification({ hasMessage }) {
  return (
    <div>
      <h1>안녕하세요!</h1>
      {hasMessage && <p>새로운 메시지가 도착했습니다.</p>}
    </div>
  );
}
```
hasMessage가 true일 때만 "새로운 메시지가 도착했습니다."가 표시됩니다

3. if문 사용 (return 내부에서 조건 분기)
```
function UserStatus({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>환영합니다!</h1>;
  }
  return <h1>로그인이 필요합니다.</h1>;
}
```
isLoggedIn이 true이면 "환영합니다!", 아니면 "로그인이 필요합니다."가 표시됩니다

4. 컴포넌트를 활용한 조건부 렌더링
```
function Welcome() {
  return <h1>환영합니다!</h1>;
}
function PleaseLogin() {
  return <h1>로그인이 필요합니다.</h1>;
}
function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <Welcome /> : <PleaseLogin />;
}
```
isLoggedIn 값에 따라 Welcome 또는 PleaseLogin 컴포넌트가 렌더링됩니다 

5. 즉시 실행 함수 (IIFE) 활용
```
function UserProfile({ user }) {
  return (
    <div>
      {(() => {
        if (!user) return <p>사용자 정보 없음</p>;
        return <p>사용자: {user.name}</p>;
      })()}
    </div>
  );
}
```
user가 존재하면 이름을 표시하고, 없으면 "사용자 정보 없음"이 출력됩니다
6. switch 문을 활용한 조건부 렌더링
```
function StatusMessage({ status }) {
  switch (status) {
    case "success":
      return <p>성공적으로 처리되었습니다!</p>;
    case "error":
      return <p>오류가 발생했습니다.</p>;
    case "loading":
      return <p>로딩 중...</p>;
    default:
      return <p>상태를 확인할 수 없습니다.</p>;
  }
}
```

7. 조건부 렌더링 + 버튼 이벤트
```
import { useState } from "react";

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
      {isVisible ? "숨기기" : "보이기"}
      </button>
      {isVisible && <p>이 메시지가 보입니다!</p>}
    </div>
  );
}

```
버튼 클릭 시 isVisible 상태가 변경되며, 메시지가 나타나거나 사라집니다


- React에서 조건부 렌더링을 구현하는 방법은 여러 가지가 있으며, 상황에 맞게 선택하면 됩니다
![image](https://github.com/user-attachments/assets/08a24f47-1ee9-4ddf-b851-79f7238cd279)

## 실습 
- if, &&
```
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h1>환영합니다!</h1>
      ) : (
        <h1>로그인 해주세요.</h1>
      )}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
    </div>
  );
}
export default App;
```

```
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>안녕하세요!</h1>
      {isLoggedIn && <p>로그인 상태입니다.</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
    </div>
  );
}
export default App;
```
- 삼항, 함수로 조건부 랜더링
```
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>{isLoggedIn ? '환영합니다!' : '로그인 해주세요.'}</h1>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
    </div>
  );
}
export default App;
```

```
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const renderContent = () => {
    if (isLoggedIn) {
      return <h1>환영합니다!</h1>;
    } else {
      return <h1>로그인 해주세요.</h1>;
    }
  };

  return (
    <div>
      {renderContent()}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
    </div>
  );
}
export default App;
```

- 로그인 여부를 나타내는 툴바 만들기
- src/chapter_09 폴더 생성 및 Toolbar.jsx, LandingPage.jsx 파일 만들기

```
import React from "react";

const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid grey",
  },
  greeting: {
    marginRight: 8,
  },
};
```

```
function Toolbar(props) {
  const { isLoggedIn, onClickLogin, onClickLogout } = props;

  return (
    <div style={styles.wrapper}>
      {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}

      {isLoggedIn ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
}
export default Toolbar;
```

- 로그인 여부를 나타내는 툴바 만들기
- src/chapter_09 폴더 생성 및 Toolbar.jsx, LandingPage.jsx 파일 만들기
```
import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };

  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div style={{ padding: 16 }}>소플과 함께하는 리액트 공부!</div>
    </div>
  );
}
export default LandingPage;
```
