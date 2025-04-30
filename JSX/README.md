# creat-react-app 
- 리액트 프로젝트 시작하기 

## npm vs npx 
- npm(Node Package Manager)
  - npm은 Node.js 패키지를 설치, 관리하는 패키지 매니저
  - package.json을 기반으로 프로젝트의 의존성을 관리
  - 전역(global) 또는 로컬(local)로 패키지를 설치 가능

- npx(Node Package Execute)
  - npx는 npm 패키지를 실행하는 도구
  - 패키지를 설치 없이 바로 실행할 수 있음
  - 프로젝트에 로컬로 설치된 패키지를 실행할 때도 사용

![image](https://github.com/user-attachments/assets/488eb2c6-3b07-4597-89e7-33ead7a5b1f2)
- 패키지는 특정 기능을 수행하는 데 필요한 코드, 리소스 및 설정 파일 등을 모아놓은 묶음을 의미합니다. 패키지는 재사용 가능하며, 모듈화된 코드를 통해 개발 생산성을 높이고 코드 관리를 용이하게 합니다 
- 주로 소프트웨어 개발 및 웹 개발에서 사용되는 개념으로, 관련된 코드나 리소스를 그룹화하여 관리하는 방법을 의미합니다

## vite 
- Vite(비트)는 빠르고 효율적인 프론트엔드 개발 빌드 도구입니다
- 기존 Webpack보다 빠른 개발 서버와 빌드 속도를 제공하며, React, Vue, Svelte 등 다양한 프레임워크를 지원합니다.
• Vite는 빠르고 간결한 최신 웹 프로젝트 개발 경험에 초점을 맞춰 탄생한 차세대 프론-엔드 빌드 도구입니다. Vue.js의 창시자인 Evan You가 만들었으며, 현재 Vue, React, Svelte 등 주요 프론트엔드 라이브러리/프레임워크 커뮤니티
에서 주목받고 있습니다

## vite vs webpack 

![image](https://github.com/user-attachments/assets/219e3928-7913-4c46-a8b5-2a06e7c7b0a1)

- ESM을 통해 모듈화된 코드를 작성하고, 번들링(여러 개의 JavaScript 파일(모듈)을 하나의 파일로 묶는 과정)을 통해 최적화된 파일을 생성함으로써, 개발자는 더 나은 사용자 경험을 제공할수 있습니다. 이러한 기술들은 앞으로도 계속 발전할 것이며, 웹 개발의 중요한 기초가 될 것입니다

- ESM을 사용하면 모듈을 네이티브로 로드할 수 있지만, 실제 배포 환경에서는 번들링을 통해 성능을 향상시키는 것이 일반적입니다

# JavaScript XML 
## JSX 
- HTML과 JavaScript를 결합한 문법
- Babel을 이용해 JavaScript로 변환됨
- React 요소를 생성하는 데 사용됨
- JavaScript 표현식을 {}로 감싸서 사용 가능
- 클래스 대신 className, for 대신 htmlFor 사용


![image](https://github.com/user-attachments/assets/8b450372-43c8-4412-9dc5-dff934eea06d)
![image](https://github.com/user-attachments/assets/99684126-7024-4738-9cc1-c9f2cddc4496)

- JSX는 React에서 UI를 선언적으로 작성할 수 있도록 도와주는 문법이며, JavaScript 코드 안에서 HTML과 유사한 태그를 사용할 수 있게 해줍니다.
- Babel을 사용하여 일반 JavaScript로 변환되며, 컴포넌트 기반 개발을 쉽게 할 수 있도록 도와줍니다!
- JSX를 사용하는 것이 필수는 아닙니다


- JSX를 사용한 코드
```javascript
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>This is a JSX example.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

- JSX를 사용하지 않은 코드
```javascript
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello, JSX!"),
    React.createElement("p", null, "This is a JSX example.")
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(App)
);
```

![image](https://github.com/user-attachments/assets/3dee28ce-e512-4703-b2b2-7ce9aebd2274)

## JSX 장점 
1. 가독성이 좋고 직관적임
```javascript
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>JSX를 사용하면 가독성이 좋아집니다.</p>
    </div>
  );
}
```
```javascript
function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello, React!"),
    React.createElement("p", null, "JSX를 사용하면 가독성이 좋아집니다.")
  );
}
```

2. 코드가 간결하고 유지보수가 쉬움
```
function List() {
  return (
    <ul>
      <li>React</li>
      <li>Vue</li>
      <li>Angular</li>
    </ul>
  );
}
```

```
function List() {
  return React.createElement(
    "ul",
    null,
    React.createElement("li", null, "React"),
    React.createElement("li", null, "Vue"),
    React.createElement("li", null, "Angular")
  );
}
```
3. 자바스크립트와 자연스럽게 결합 가능
```
const name = "React";
function Greeting() {
  return <h1>Hello, {name}!</h1>;
}
```

```
const name = "React";
function Greeting() {
  return React.createElement("h1", null, `Hello, ${name}!`);
}
```
4. 조건부 렌더링이 쉬움
```
function Greeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>;
}
```

```
function Greeting({ isLoggedIn }) {
  return React.createElement(
    "h1",
    null,
    isLoggedIn ? "Welcome back!" : "Please log in"
  );
}
```
5. 스타일 및 이벤트 핸들링이 쉬움-
```
const buttonStyle = { backgroundColor: "blue", color: "white" };

function Button() {
  return <button style={buttonStyle}>Click me</button>;
}
```
```
const buttonStyle = { backgroundColor: "blue", color: "white" };

function Button() {
  return React.createElement("button", { style: buttonStyle }, "Click me");
}
```

**JSX는 React에서 UI를 정의하는 데 있어 많은 장점을 제공합니다. 가독성이 높고, JavaScript 표현식을 사용할 수 있으며, 컴포넌트를 쉽게 재사용하고 조건부 렌더링을 구현할 수 있습니다. 이러한 이유로 많은 개발자들이 JSX를 선호합니다**

## JSX 사용법 
1. JSX 기본 구조
- JSX에서는 HTML과 유사한 문법을 사용하여 요소를 반환할 수 있다
- JSX는 반드시 하나의 부모 요소로 감싸야 한다
```jsx
function App() {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>React에서 JSX를 사용합니다.</p>
    </div>
  );
}
```
- 틀린 예
```jsx
function App() {
  return (
    <h1>Hello, JSX!</h1>
    <p>React에서 JSX를 사용합니다.</p> // 에러 발생
  );
}
```
- 수정1
```jsx
function App() {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>React에서 JSX를 사용합니다.</p>
    </div>
  );
}
```
- 수정2
```jsx
function App() {
  return (
    <>
      <h1>Hello, JSX!</h1>
      <p>React에서 JSX를 사용합니다.</p>
    </>
  );
}
```

2. JSX에서 자바스크립트 표현식
JSX 내부에서 JavaScript 표현식을 {}로 감싸서 사용할 수 있다
```jsx
const name = "React";
function App() {
  return <h1>Hello, {name}!</h1>;
}
```
```jsx
function getGreeting(name) {
  return `Hello, ${name}!`;
}

function App() {
  return <h1>{getGreeting("React")}</h1>;
}
```
```jsx
function App() {
  return <p>2 + 3 = {2 + 3}</p>;
}
```

3. JSX에서 속성(props) 사용
JSX에서는 HTML 속성과 유사한 방식으로 속성을 설정할 수 있지만, 일부 속성은 JavaScript 문법을 따른다
- 문자열 속성
```jsx
const imgUrl = "https://via.placeholder.com/150";

function App() {
  return <img src={imgUrl} alt="Sample Image" />;
}
```
- 클래스 설정(className 사용)
```jsx
function App() {
  return <h1 className="title">Hello, JSX!</h1>;
}
```
- 객체 속성 사용(스타일 적용) 
```jsx
const styleObj = { color: "blue", fontSize: "20px" };

function App() {
  return <h1 style={styleObj}>Styled Text</h1>;
}
```

4. JSX에서 조건부 렌더링
JSX에서는 삼항 연산자를 사용하여 조건부 렌더링을 구현할 수 있다

5. JSX에서 반복문 사용 (배열과 map())
JSX에서는 for문을 직접 사용할 수 없고, map() 메서드를 이용해 반복 렌더링을 해야 한다

6. JSX에서 이벤트 처리
JSX에서는 이벤트를 onClick, onChange 등의 속성으로 설정할 수 있다
## JSX 코드 작성해보기 









