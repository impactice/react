# 상태(state)
- state란 랜더링 결과물에 영향을 주는 정보
- state는 간단하게 말해서 변수이다. 하지만 const, let 등으로 선언한 변수와 다르게 값이 변하면 관련 있는 컴포넌트들이 재랜더링되어 화면이 바뀐다.
- state는 컴포넌트의 내부에서 변경 가능한 데이터를 다루기 위해 사용하는 객체이다
- 일반적으로 컴포넌트의 내부에서 변경 가능한 데이터를 관리해야 할 때에 사용 한다
- 프로퍼티(props)의 특징은 컴포넌트 내부에서 값을 바꿀 수 없다는 것이었다
- 하지만 값을 바꿔야 하는 경우도 존재하며, 이럴 때 state라는 것을 사용한다
- 값을 저장하거나 변경할 수 있는 객체로 보통 이벤트와 함께 사용된다
- state는 컴포넌트 내에서 지속적으로 변경이 일어나는 값을 관리하기 위해 사용한다
- 개발자가 의도한 동작에 의해 변할 수도 있고 사용자의 입력에 따라 새로운 값으로 변경될 수도 있다
- state 값이 변경되고 재 랜더링이 필요한 경우에 React가 자동으로 계산하여 변경된 부분을 렌더링 한다
- state는 컴포넌트의 현재 상황에 대한 정보를 나타내기 위해 리액트에서 쓰는 일반 자바스크립트 객체다. 함수에 선언된 모든 변수와 마찬가지로 컴포넌트에서 관리된다
- state는 상태라는 뜻을 가지고 있다.
- 리액트에서의 state는 리액트 Component의 상태를 의미한다.
- 상태라는 단어가 정상, 비정상을 나타내는 것이라기보다 리액트 Component의 데이터라는 의미가 더 가깝다.
- 리액트에서의 State: React Component의 변경 가능한 데이터
- 이 state는 사전에 미리 정해진 것이 아니라 React Component를 개발하는 각 개발자가 직접 정의해서 사용한다.
- 자바스크립트에서는 변수를 사용한다.
- 리액트에서는 상태(state)를 사용한다고 생각하면 이해하기 쉽다.
- State를 정의할 때 중요한 점은 렌더링이다. 데이터 흐름에 사용되는 것만 state에 사용해야 한다.
- State가 변경될 경우 Component가 재렌더링되기 때문에 렌더링과 데이터 흐름에 관련 없는 값을 포함하면 불필요한 경우에 Component가 다시 렌더링 되어 성능을 저하시킬 수 있기 때문이다.
- 시간이 지남에 따라 변하는 데이터  
- 컴포넌트의 메모리  
- 모든 컴포넌트에 state를 추가하고 업데이트를 할 수 있다
- Component 내부에서 관리하는 데이터로, 변경이 가능한 값이다.
- state는 Component 내부에서 관리하며, 상태에 따라 변하는 동적 데이터이다.
- state는 props와 다르게 자동으로 생성되지 않으며 명시적으로 state를 기술해야 한다.
- React.js에서 유동적인 데이터를 사용할 때 state라는 것을 사용한다.
- 컴포넌트 내에 별도의 상태가 필요할 때 사용한다.
- React 컴포넌트에서 state는 컴포넌트 내부에서 관리되는 값으로서 변경 가능하다.
- 이 값은 컴포넌트가 렌더링되는 동안 변할 수 있으며, 변경될 때마다 컴포넌트가 다시 렌더링된다.
- 즉, React에서 state는 컴포넌트 내에서 관리되는 상태 데이터이며, 컴포넌트 내부에서 변경할 수 있고, 컴포넌트의 렌더링 결과를 결정한다.

- 함수 컴포넌트에서 내부적으로 상태를 관리해야 하는 일이 필요하다. 이를 위해 필요한 것이 state다.
- state는 컴포넌트의 내부에서 변경 가능한 데이터를 다루기 위해 사용하는 객체라고 할 수 있다.
- const, let 등으로 선언한 변수와 다르게 state는 값이 변하면 관련 있는 컴포넌트들이 re-rendering 되어 화면이 바뀐다.

## State를 사용하는 이유 
### 일반 변수를 사용하는 경우 
- 변수는 변경되어도 자동으로 화면이 바뀌지 않는다
- 하지만 state는 변경되면 자동으로 화면이 바뀌기 때문에 state를 사용한다
- 즉 유동적인 변수를 사용할 때 화면에 그려지는 변수도 정상적으로 변경되길 원한다면 사용한다
```javascript
import React from 'react';

const Counter = () => {
  let count = 0;

  const plus = () => {
    count = count + 1;
    console.log(count); // 제대로 증가함
  }

  const minus = () => {
    count = count - 1;
    console.log(count); // 제대로 감소함
  }

  return (
    <div className='container' style={{ margin: 15 }}>
      <h2 className='int'>{ count }</h2>
      <button className='plus' onClick={plus}> + </button>
      <button className='minus' onClick={minus}> - </button>
    </div>
  );
}

export default Counter;
```

### 일반 변수를 사용하는 경우 
- 화면은 변경되지 않는다
- 그렇다고 count가 변경되지 않은 것은 아니다(f12)
- plus 함수와 minus함수를 실행한 후에 콘솔로 count 값을 출력해 보면 count 값은 정상적으로 변경됨을 알 수 있다
- 그렇다면 화면이 변경되지 않은 이유는 무엇일까?
- 화면이 변경되지 않은 이유는 일반 변수를 사용했기 때문이다
- 일반 변수는 변경되어도 자동으로 화면이 재랜더링 되지 않는다
- 하지만 state는 다르다
- 리액티브한 프론트엔드에서 상태는 단순한 변수가 아니라 이 값이 변했을 때 화면에 반영되도록 연결된 것을 상태라고 한다
- 그래서 state가 아닌 일반 변수는 바뀌어도 화면이 변하지 않는 것이다

### state를 사용하는 경우 
- 함수가 실행될 때마다 setCount로 기존의 count 값을 count+1 혹은 count-1로 변경해 주었다
- 일반 변수가 아닌 state를 사용하면 변수 값이 변결되었을 때 화면이 의도대로 재랜더링됨을 알 수 있다

```javascript
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  const plus = () => {
    setCount(count + 1);
  }

  const minus = () => {
    setCount(count - 1);
  }

  return (
    <div className='container'>
      <h2 className='int'>{ count }</h2>
      <button className='plus' onClick={plus}>+</button>
      <button className='minus' onClick={minus}>-</button>
    </div>
  );
}

export default Counter;
```
- 참고로 리액트 컴포넌트는 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트 또한 리렌더링 된다 (바뀐 내용이 없다 할지라도)

### setState는 비동기적으로 작동한다 
- setSate는 비동기적으로 동작하는데, setState 바로 아래에 console.log로 count를 출력해 봤을 때 확인 할 수 있다
- 분명히 setCount로 count를 변경했는 데, 변경한 후에 console.log로 찍어보니 값이 바로 바뀌지 않는다 
```javascript
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
    console.log(count);
    // setCount로 count를 변경한 후 바로 콘솔에 찍었다
  }

  const minus = () => {
    setCount(count - 1);
    console.log(count);
    // setCount로 count를 변경한 후 바로 콘솔에 찍었다
  }

  return (
    <div className='container'>
      <h2 className='int'>{ count }</h2>
      <button className='plus' onClick={plus}>+</button>
      <button className='minus' onClick={minus}>-</button>
    </div>
  );
}

export default Counter;
```
- 그 이유는 `setState`가 **비동기**이기 때문이다.

- **동기(Synchronous: 동시에 발생하는)**  
  - 요청을 보냈다면, 응답을 받아야 다음 동작이 이루어진다.  
  - 순차적으로 실행되기 때문에, 어떤 작업이 수행 중이라면 다음 작업은 대기해야 한다.  
  - 블로킹(작업 중단)이 발생한다.

- **비동기(Asynchronous: 동시에 발생하지 않는)**  
  - 작업 종료 여부에 관계없이 다음 작업을 실행한다.  
  - 그러므로 동기 방식과는 달리 실행 순서를 보장하지 않는다.  
  - 블로킹이 발생하지 않는다.

- `setCount`는 이벤트 핸들러 안에서 현재 `state` 값에 대한 변화를 요청하기만 하는 것이라서  
  이벤트 핸들러가 끝나고 리액트가 상태를 바꾸고 화면을 다시 그리기를 기다려야 한다.


- 리액트는 이벤트 핸들러가 닫히는 시점에 `setState`를 종합하여 한 번에 처리한다.

- `state`도 결국 객체이기 때문에, 같은 키 값을 가진 경우라면 가장 마지막 실행값으로 덮어씌워지는데  
  이는 객체를 합치는 함수인 `Object.assign()`에서 확인할 수 있다.

- 아래처럼 `plus` 함수 안에 `setCount`를 세 번 썼을 때,  
  1+2+3으로 6씩 증가하는 것이 아니라 마지막 `setCount`의 결과인 3씩 증가하게 된다.

- App.js
```javascript
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);
return (
  <>
    <h1>{number}</h1>
    <button onClick={() => {
    setNumber(number + 1);
    console.lon(number)
    setNumber(number + 2);
    console.lon(number)
    setNumber(number + 3);
    console.lon(number)
  }}>+3</button>
  </>
)
}
```

- 만약 6씩 더하고 싶은 거라면, 이문제는 이렇게 하면 해결된다
- setCount(count+1)에서 count는 렌더링 시작 시점의 count이기 때문에 count가 최근에 바뀌었어도 반영 되지 않는다
- 하지만 이렇게 콜백 함수를 사용하면 항상 최신의 값을 인자로 받아와서 처리하기 때문에 setCount(count => count +1)를 쓰면 최신 값을 받아서 처리할 수 있다


- App.js
```javascript
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);
return (
  <>
    <h1>{number}</h1>
    <button onClick={() => {
    setNumber(number => number + 1);
    console.lon(number)
    setNumber(number => number + 2);
    console.lon(number)
    setNumber(number => number + 3);
    console.lon(number)
  }}>+3</button>
  </>
)
}
```

### setState는 왜 비동기적으로 동작할까 
- state는 값이 변경되면 리렌더링이 발생하는데, 변경되는 state가 많을수록 리렌더링이 계속 일어나고 속도도 저하되는 등, 성능적으로 문제가 많을 것이다.
- 그래서 16ms 동안 변경된 상태 값들을 모아서 한 번에 리엔더링을 진행하는데 이를 batch(일괄) update라고 한다

# Hooks 
- 기존에는 클래스형 컴포넌트에서만 state와 생명주기 기능을 사용할 수 있었습니다.
- Hook을 사용하면 함수형 컴포넌트에서도 상태(state)와 생명주기(lifecycle)를 관리할 수 있습니다.
- 클래스 없이도 React 기능을 활용할 수 있어 코드가 간결하고 재사용성이 높습니다.
- 훅을 사용하면 클래스형 컴포넌트 없이도 상태 관리와 사이드 이펙트를 처리할 수 있습니다.
- Hooks의 등장으로 함수형 컴포넌트는 클래스형 컴포넌트와 동등한 기능을 수행할 수 있게 되었으며, 코드 간결성, 재사용성, 테스트 용이성 등 다양한 장점을 누릴 수 있게 되었습니다.

![Image](https://github.com/user-attachments/assets/a9afb8d7-02eb-45ed-b236-cd7df62e9bc6)

- 원래 존재하는 어떤 기능에 갈고리(hook)를 거는 것처럼 끼어들어가 실행되는 것을 의미합니다.
- 리액트의 훅도 state와 생명주기에 갈고리를 걸어 원하는 시점에 정해진 함수가 실행되도록 만든 것입니다. 이때 실행되는 함수를 훅이라고 정했습니다.
- 이런 hook의 이름은 모두 use로 시작합니다. 커스텀 훅도 use로 시작하는 이름으로 정해서 훅이라는 것을 나타내 주어야 합니다.

![Image](https://github.com/user-attachments/assets/6a8b0fb5-88ee-4377-ba22-e347ef039045) 

## useState() 
- chapter_07 폴더에 Counter.jsx 파일 생성 및 index.js 편집 -> F12
- Counter.jsx
```
function Counter(props) {
  var count = 0;
  return (
    <div>
      <p>총 {count} 번 클릭했습니다.</p>
      <button onClick={() => console.log(count++)}>
        클릭
      </button>
    </div>
  );
}
export default Counter;
```
- count 값은 변경되지만 재랜더링은 일어나지 않

- index.js
```
import React from "react";
import ReactDOM from "react-dom/client";
import Counter from './chapter_07/Counter';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<Counter />);
```

- `useState` is a React Hook that lets you add a state variable to your component.
- `useState`는 React 함수형 컴포넌트에서 상태(state)를 관리할 수 있도록 해주는 Hook입니다.
- 클래스형 컴포넌트의 `this.state`와 `this.setState`를 대체합니다.
- 상태를 관리하기 위해 사용하는 훅입니다.
- 이 훅은 함수형 컴포넌트 내에서 상태 변수를 선언하고, 해당 상태를 업데이트하는 함수를 제공합니다.  
  `useState`를 사용하면 컴포넌트가 렌더링될 때마다 상태를 유지할 수 있습니다.
- 변수 각각에 대한 `set` 함수가 따로 존재합니다.

![Image](https://github.com/user-attachments/assets/7ecbe509-63b2-400e-ae9d-ab350202c49f) 

![image](https://github.com/user-attachments/assets/cfdf0584-87a5-4c80-b7ff-e3c2dfc02570)

- chatpter_07 폴더에 Counter2.jsx 파일 생성 및 index.js 편집

- Counter2.jsx
```jsx
import React, { useState } from "react";

function Counter2(props) {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>총 {count} 번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>
        클릭
      </button>
    </div>
  );
}

export default Counter2;
```

- index.js
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Counter2 from './chapter_07/Counter2';

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Counter2 />);
```

- useEffect is a React Hook that lets you synchronize a component with an external system.
- useEffect() Hook은 함수형 컴포넌트 내에서 부수 효과(side effect)를 수행할 수 있도록 해줍니다.
- 부수 효과란 컴포넌트의 주요 기능 외에 추가적으로 실행되는 작업을 의미하며, 데이터 fetching, 구독, DOM 직접 조작, 타이머 설정 등이 대표적입니다.
- 클래스형 컴포넌트의 componentDidMount, componentDidUpdate, componentWillUnmount를 대체합니다.
- useEffect는 두 개의 인자를 받습니다. 첫 번째 인자는 사이드 이펙트를 수행하는 함수이고, 두 번째 인자는 의존성 배열입니다. 의존성 배열은 이펙트가 실행될 조건을 정의합니다.

![image](https://github.com/user-attachments/assets/c70b344f-32bd-4f9f-a001-c5968b31f2e6)

![image](https://github.com/user-attachments/assets/77530914-f861-4872-8995-1668789b6898)

- chapter_07 폴더에 Counter.jsx 파일 생성 및 index.js 편집
```jsx
import React, { useState, useEffect } from 'react';

function Counter3(props) {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷하게 작동합니다.
  useEffect(() => {
    // 브라우저 API를 사용해서 document의 title을 업데이트합니다.
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>
        클릭
      </button>
    </div>
  );
}

export default Counter3;
```

- index.js
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Counter3 from './chapter_07/Counter3';

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Counter3 />);
```

## useEffect() 
• useEffect is a React Hook that lets you synchronize a component with an external system.
• useEffect() Hook은 함수형 컴포넌트 내에서 부수 효과(side effect)를 수행할 수 있도록 해줍니다.
• 부수 효과란 컴포넌트의 주요 기능 외에 추가적으로 실행되는 작업을 의미하며, 데이터 fetching, 구독, DOM 직접 조작, 타이머 설정 등이 대표적입니다.
• 클래스형 컴포넌트의 componentDidMount, componentDidUpdate, componentWillUnmount를 대체합니다.
• useEffect는 두 개의 인자를 받습니다. 첫 번째 인자는 사이드 이펙트를 수행하는 함수이고, 두 번째 인자는 의존성 배열입니다. 의존성 배열은 이펙트가 실행될 조건을 정의합니다. 

![image](https://github.com/user-attachments/assets/e2b2a4ee-78cb-45e3-bad2-d2d2e2ce9ebe)

![image](https://github.com/user-attachments/assets/42b00543-0c12-4463-94dc-7bd01f97f6a5) 

![image](https://github.com/user-attachments/assets/63681319-cbfe-46cc-a31a-223ae6f4101e)

- chapter_07 폴더에 Counter3.jsx 파일 생성 및 index.js 편집

- Counter3.jsx
```jsx
import React, { useState, useEffect } from 'react';

function Counter3(props) {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷하게 작동합니다
  // `count` 값이 변경될 때마다 document.title을 업데이트
  useEffect(() => {
    // 브라우저 API를 사용해서 document의 title을 업데이트합니
    document.title = `You clicked ${count} times`;
  }, [count]); // `count` 값이 변경될 때만 effect가 실행됨

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>
        클릭
      </button>
    </div>
  );
}

export default Counter3;
```

- index.js

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Counter3 from './chapter_07/Counter3';

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Counter3 />);
```

- 컴포넌트가 처음 랜더링될 때 실행
- chapter_07 폴더에 Example.jsx 파일 생성 및 index.js 편집
```jsx
import React, { useEffect } from "react";

function Example() {
  useEffect(() => {
    console.log("컴포넌트가 마운트됨!");
  }, []); // 빈 배열 → 한 번만 실행

  return <h1>useEffect 예제</h1>;
}

export default Example;
```

- 특정 상태가 변경될 때 실행
- chapter_07 폴더에 Counter4.jsx 파일 생성 및 index.js 편집
```jsx
import React, { useState, useEffect } from "react";

function Counter4() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`카운트 값이 변경됨: ${count}`);
  }, [count]); // count가 변경될 때마다 실행

  return (
    <div>
      <h1>카운트: {count}</h1>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

export default Counter4;
```

- 컴포넌트가 언마운트될 때 실행
- chapter_07 폴더에 Timer.jsx 파일 생성 및 index.js 편집
```jsx
import React, { useEffect, useState } from "react";

function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("1초마다 실행");
    }, 1000);

    // 클린업 함수: 컴포넌트가 언마운트될 때 타이머를 정리
    return () => {
      console.log("타이머 정리");
      clearInterval(interval);
    };
  }, []); // 빈 배열 -> 컴포넌트가 마운트될 때만 실행

  return <h1>타이머 실행 중...</h1>;
}

export default Timer;
```

- 마우스 위치 추적
- chapter_07 폴더에 MouseTracker.jsx 파일 생성 및 index.js 편집
```jsx
import React, { useState, useEffect } from "react";

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // 마우스 움직임 이벤트 리스너 추가
    window.addEventListener("mousemove", updatePosition);

    // 클린업 함수: 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []); // 빈 배열 -> 컴포넌트가 마운트될 때만 실행

  return (
    <div>
      <h1>마우스 위치</h1>
      <p>X: {position.x}, Y: {position.y}</p>
    </div>
  );
}

export default MouseTracker;
```

- API 호출
- chapter_07 폴더에 FetchData.jsx 파일 생성 및 index.js 편집
```jsx
import React, { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setData(data.slice(0, 5))); // 5개만 가져오기
  }, []); // 처음 한 번만 실행

  return (
    <div>
      <h1>API 데이터</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
```

- API 호출
- chapter_07 폴더에 useCounter.jsx, Accommodate.jsx 파일 생성 및 index.js 편집

- useCounter.jsx
```jsx
import React, { useState } from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

  return [count, increaseCount, decreaseCount];
}

export default useCounter;
```

- index.js
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Accommodate from './chapter_07/Accommodate';

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Accommodate />);
```

- Accommodate.jsx
```jsx
import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    console.log("======================");
    console.log("useEffect() is called.");
    console.log(`isFull: ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, [count]);

  return (
    <div style={{ padding: 16 }}>
      <p>{`총 ${count}명 수용했습니다.`}</p>
      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>
      {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accommodate;
```

## useMemo()
- useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
- useMemo() Hook은 memoization된 값을 반환합니다.
- memoization이란 특정 값을 계산하는 함수를 호출했을 때, 해당 함수의 인수가 변경되지 않았다면 이전에 계산된 값을 재사용하는 것을 의미합니다
- 즉, useMemo() Hook은 컴포넌트가 다시 렌더링될 때마다 불필요한 계산을 반복하는 것을 방지하여 성능을 최적화합니다

![image](https://github.com/user-attachments/assets/576366e7-03d6-492d-b33b-e5cba6760a2a)

- useMemo에 전달된 함수는 렌더링이 일어나는 동안에만 실행이 됩니다.
- 랜더링이 일어날 동안에 실행되어서는 안될 작업을 useMemo에 넣어서는 안됩니다.
- 예를 들어 useEffect에서 실행되어야 할 side effect 함수 중에서 랜더링 동안에 실행되어서는 안되는 것들은 useMemo에 넣으면 안됩니다.
- 의존성 배열을 넣지 않을 경우, 매 랜더링마다 함수가 실행됩니다.
  const memoizedValue = useMemo(
    ()=> computeExpensiveValue(a, b)
  );
- 따라서 의존성 배열을 넣지 않을 경우, 아무 의미가 없습니다.
- 의존성 배열이 빈 배열일 경우에는 컴포넌트 마운트 시에만 호출됩니다.
  const memoizedValue = useMemo(
    () => {
        return computeExpensiveValue(a, b);
    }, []
  );
- 마운트 시에 값을 변경할 필요가 있을 때 사용합니다

- 비효율적인 코드(useMemo 없이)
- ExpensiveCalculation.jsx

```jsx
import React, { useState } from "react";

function ExpensiveCalculation({ number }) {
  console.log("계산 중...");
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += number;
  }
  return <h2>결과: {result}</h2>;
}

export default function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h1>useMemo 없이 매번 계산</h1>
      <button onClick={() => setCount(count + 1)}>클릭: {count}</button>
      <ExpensiveCalculation number={number} />
    </div>
  );
}
```
- index.js
```
import React from "react";
import ReactDOM from "react-dom/client";
import App from './chapter_07/ExpensiveCalculation';
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
```

- useMemo()로 최적화
- 해결방법
  - number가 변경될 때만 연산을 수행
  -count 변경 시 불필요한 재계산 방지

- App.js
```jsx
import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  // useMemo를 사용하여 최적화된 계산
  const expensiveResult = useMemo(() => {
    console.log("계산 중...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += number;
    }
    return result;
  }, [number]); // `number`가 바뀔 때만 실행됨

  return (
    <div>
      <h1>useMemo를 사용하여 최적화</h1>
      <button onClick={() => setCount(count + 1)}>클릭: {count}</button>
      <h2>결과: {expensiveResult}</h2>
    </div>
  );
}

export default App;
```

- index.js
```
import React from "react";
import ReactDOM from "react-dom/client";
import App from './chapter_07/App.js';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<App />);
```

- useMemo()로 최적화

- App2.js
```jsx
import React, { useState, useMemo } from "react";

function App2() {
  const [name, setName] = useState("React");
  const [count, setCount] = useState(0);

  // `name`이 변경될 때만 객체를 재생성
  const user = useMemo(() => {
    return { name };
  }, [name]);

  return (
    <div>
      <h1>useMemo로 객체 메모이제이션</h1>
      <button onClick={() => setCount(count + 1)}>클릭: {count}</button>
      <h2>사용자: {user.name}</h2>
    </div>
  );
}

export default App2;
```

- 객체는 참조형 뎅이터이므로, 일반적으로 {name}을 직접 전달하면 리렌더링 시 새로운 객체로 인식됨
- useMemo()를 사용하여 불필요한 객체 재생성 방지

- index.js
```
import React from "react";
import ReactDOM from "react-dom/client";
import App2 from './chapter_07/App2.js';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<App2 />);
```

- 사용해야 하는 경우
  - 연산 비용이 큰 계산을 반복할 때
  - 객체 또는 배열이 불필요하게 재생성될 때
  - 의존성이 변경되지 않는 한 동일한 값을 유지해야 할 때

- 사용하지 않아도 되는 경우
  - 간단한 연산이거나 최적화할 필요가 없을 때
  - 값이 자주 바뀌는 경우 오히려 성능 저하 가능
  - useEffect와 혼동하여 잘못 사용하는 경우

- useMemo() Hook 사용 시 주의 사항
  - 과도한 사용: 모든 값을 memoization하려고 하면 오히려 성능 저하를 유발할 수 있습니다. 필요한 경우에만 사용하는 것이 좋습니다
  - 의존성 배열: 의존성 배열을 올바르게 지정하여 불필요한 계산을 방지해야 합니다.
  - 순수 함수: 값을 계산하는 함수는 반드시 순수 함수여야 합니다. 즉, 외부 값에 영향을 주거나 외부 값을 변경해서는 안 됩니다
 
## useCallback() 
- useCallback() Hook은 함수 메모이제이션을 제공합니다.
- 메모이제이션이란 특정 함수를 호출했을 때, 해당 함수의 인수가 변경되지 않았다면 이전에 계산된 함수를 재사용하는 것을 의미합니다.
- 즉, 컴포넌트가 리렌더링될 때 동일한 함수가 다시 생성되지 않도록 최적화하는 데 사용됩니다.
- useCallback() Hook은 컴포넌트가 다시 렌더링될 때마다 불필요하게 새로운 함수를 생성하는 것을 방지하여 성능을 최적화합니다

```jsx
import { useState } from 'react';

function ParentComponent(props) {
  const [count, setCount] = useState(0);

  // 재랜더링 될 때마다 매번 함수가 새로 생성됨
  const handleClick = (event) => {
    // 클릭 이벤트 처리
  };

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
```

```jsx
import { useState, useCallback } from 'react';

function ParentComponent(props) {
  const [count, setCount] = useState(0);

  // `useCallback`을 사용하여 함수가 재생성되지 않도록 최적화
  const handleClick = useCallback((event) => {
    // 클릭 이벤트 처리
  }, []); // 의존성 배열이 비어 있으므로 컴포넌트가 처음 렌더링될 때만 생성됨

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
```
- 컴포넌트 내에서 정의한 함수를 자식 컴포넌트에 `props`로 넘겨서 사용하는 경우, 부모 컴포넌트가 다시 렌더링이 되면 매번 자식 컴포넌트도 다시 렌더링이 됩니다. 하지만 `useCallback`을 사용하면 특정 변수의 값이 변한 경우에만 함수를 다시 정의하게 되므로, 함수가 다시 정의되지 않는 경우에는 자식 컴포넌트도 다시 렌더링이 일어나지 않습니다.

- useCallback를 사용하지 않는 경우
 
```jsx
import React, { useState } from "react";

function Child({ onClick }) {
  console.log("Child 컴포넌트 렌더링됨");
  return <button onClick={onClick}>버튼 클릭</button>;
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("버튼 클릭됨");
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <Child onClick={handleClick} />
    </div>
  );
}
```
-문제점
   - App 컴포넌트가 리렌더링될 때마다 handleClick 함수가 새롭게 생성됨
  - Child 컴포넌트도 불필요하게 다시 렌더링됨


- useCallback으로 최적화
```jsx
import React, { useState, useCallback } from "react";

function Child2({ onClick }) {
  console.log("Child 컴포넌트 렌더링됨");
  return <button onClick={onClick}>버튼 클릭</button>;
}

export default function App() {
  const [count, setCount] = useState(0);

  // useCallback을 사용하여 함수 메모이제이션
  const handleClick = useCallback(() => {
    console.log("버튼 클릭됨");
  }, []); // 의존성 배열이 비어 있으므로 처음 생성된 함수를 재사용

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <Child2 onClick={handleClick} />
    </div>
  );
}
```

- 해결방법
  - useCallback()을 사용하여 handleClick 함수를 한 번만 생성하고 재사용
  - count 값이 변경되어도 Child 컴포넌트가 불피요하게 다시 렌더링되지 않음

- useMemo + useCallback 함께 사용
```jsx
import React, { useState, useCallback, useMemo } from "react";

export default function App3() {
  const [query, setQuery] = useState("");
  const [list] = useState(["Apple", "Banana", "Cherry", "Date"]);

  // useMemo로 리스트 필터링 최적화
  const filteredList = useMemo(() => {
    console.log("필터링 실행됨");
    return list.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, list]); // `query`와 `list`가 변경될 때만 실행됨

  // useCallback으로 이벤트 핸들러 최적화
  const handleChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []); // 의존성 배열이 비어 있으므로 함수는 한 번만 생성됨

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="검색어 입력"
      />
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

![image](https://github.com/user-attachments/assets/38920812-72ac-4929-ab09-fa125a48b1c6) 

## useRef() 

- Reference란 특정 컴포넌트에 접근할 수 있는 객체를 의미합니다.
    refObject.current : 현재 참고하고 있는 Element
- useRef는 함수형 컴포넌트에서 DOM 요소에 직접 접근하거나, 값이 변경되더라도 리렌더링을 유발하지 않는 변수를 저장하는 데 사용됩니다.
- useRef() Hook은 변경 가능한 ref 객체를 반환합니다.
- 이 객체의 .current 속성을 통해 DOM 요소에 직접 접근하거나, 컴포넌트가 다시 렌더링되어도 유지되는 값을 저장할 수 있습니다.

![image](https://github.com/user-attachments/assets/e1890519-89ef-4133-84d8-34caa78b29e3) 

- DOM 요소에 접근하기
```jsx
import { useRef, useEffect } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    // 컴포넌트가 마운트되면 input 요소에 포커스를 맞춥니다.
    inputRef.current.focus();
  }, []); // 빈 의존성 배열 → 한 번만 실행

  return <input ref={inputRef} type="text" />;
}
```
- 리렌더링 없이 값 저장하기 
```jsx
import { useRef, useState } from "react";

function Counter() {
  const countRef = useRef(0); // useRef로 상태를 관리하지 않는 값 생성
  const [renderCount, setRenderCount] = useState(0); // 렌더링 횟수를 추적하는 상태

  const increment = () => {
    countRef.current += 1; // ref 값을 증가
    console.log("Ref 값:", countRef.current);
  };

  return (
    <div>
      <p>렌더링 횟수: {renderCount}</p>
      <button onClick={() => setRenderCount(renderCount + 1)}>렌더 트리거</button>
      <button onClick={increment}>Ref 증가</button>
    </div>
  );
}
```

- 이전 값 저장하기 

```jsx
import { useRef, useEffect, useState } from "react";

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>현재 값: {count}</p>
      <p>이전 값: {prevCountRef.current ?? '없음'}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}
```

 - DOM 접근: useRef를 사용하여 DOM 요소에 접근할 수 있습니다. 예를 들어, 입력 필드에 포커스를 주거나, 특정 요소의 크기를 측정할 때 유용합니다.
- 값 저장: useRef는 렌더링 간에 값을 유지할 수 있지만, current 프로퍼티를 변경해도 컴포넌트가 다시 렌더링되지 않습니다. 이는 상태(state)와의 차이점입니다.
- 성능 최적화: useRef를 사용하면 불필요한 렌더링을 피할수 있습니다

- Focus
```jsx
import { useRef } from 'react';

function TextInputWithFocusButton(props) {
  // useRef를 사용해 input 요소에 접근
  const inputElem = useRef(null);

  const onButtonClick = () => {
    // 'current'는 마운트된 input element를 가리킴
    inputElem.current.focus();
  };

  return (
    <>
      <input ref={inputElem} type="text" />
      <button onClick={onButtonClick}>
        Focus the input
      </button>
    </>
  );
}

export default TextInputWithFocusButton;
```
## Hook의 규칙 
1. Hook은 무조건 최상위 레벨에서만 호출해야 한다.
  - Hook은 컴포넌트가 랜더링될 때마다 매번 같은 순서로 호출되어야 합니다.
  - 잘못된 Hook 사용법

```jsx
import { useState, useEffect } from 'react';

function MyComponent(props) {
  const [name, setName] = useState('Inje');

    if (name !== '') {
      useEffect( () => {
      ...
    });
  }
  ...
} 
```

2. 리액트 함수 콤포넌트에서만 Hook을 호출해야 합니다
추천 플러그인 : https://www.npmjs.com/package/eslint-plugin-react-hooks

## Custom Hook 
- 이름이 use로 시작하고 내부에서 다른 Hook을 호출하는 하나의 자바스크립트 함수입니다.
- 여러 컴포넌트에서 공통적으로 필요한 로직을 추출하여 코드의 중복을 줄이고, 유지보수를 용이하게 합니다.
- 반복적으로 사용되는 로직을 재사용 가능하도록 추출한 함수입니다.
- React의 기본 Hook(useState, useEffect, useRef 등)을 조합하여 새로운 기능을 만들 수 있습니다.
- use로 시작하는 이름을 사용해야 합니다.
- 내부에서 React의 다른 Hook을 사용할 수 있습니다.
- 컴포넌트가 아닌 일반 함수이므로 렌더링과 관련 없는 로직도 포함할 수 있습니다.
- Custom Hook을 활용하면 React 애플리케이션에서 반복되는 로직을 재사용 가능하게 분리할 수 있습니다.
- 컴포넌트의 복잡도를 줄이고 유지보수를 쉽게 만들기 위해 적극적으로 활용하는 것이 좋습니다!

- 기본적인 Custom Hook 예제 (카운터 관리)
```jsx
import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export default useCounter;
```

```jsx
import React from "react";
import useCounter from "./useCounter";

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterComponent;
```

- API 호출을 위한 Custom Hook

```jsx
import React from "react";
import useFetch from "./useFetch";

function Users() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Users;
```

```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

- 이전 상태 저장 Custom Hook
```jsx
import { useEffect, useRef } from "react";

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;
```

```jsx
import React, { useState } from "react";
import usePrevious from "./usePrevious";

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <h2>현재 값: {count}</h2>
      <h2>이전 값: {prevCount}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
```
# 마치며 - 요약 
## 훅 
- 훅이란?
  - 리액트의 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 것
- useState()
  - state를 사용하기 위한 훅
  - 함수 컴포넌트에서는 기본적으로 state라는 것을 제공하지 않음
  - 클래스 컴포넌트처럼 state를 사용하고 싶으면 useState() 훅을 사용해야 함
  - 사용법
    - const [변수명, set함수명]= useState(초깃값);
    - 변수 각각에 대해 set 함수가 따로 존재함
  - useEffect()
    - 사이드 이펙트를 수행하기 위한 훅
    - 사이드 이펙트란 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업
    - useEffect() 훅만으로 클래스 컴포넌트의 생명주기 함수들과 동일한 기능을 수행할 수 있음
    - 사용법
      - useEffect(이펙트 함수, 의존성 배열);
      - 의존성 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행됨
      - 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행됨
      - 의존성 배열 생략 시 컴포넌트가 업데이트 될 때마다 호출됨
      - 선언된 컴포넌트의 props와 state에 접근할 수 있음
      - useEffect()에서 리턴하는 함수는 컴포넌트 마운트가 해제될 때 호출됨
    - useMemo()
      - Memoized value를 리턴하는 훅
      - 연산량이 높은 작업이 매번 렌더링될 때마다 반복되는 것을 피하기 위해 사용
      - 렌더링이 일어나는 동안 실행되므로 렌더링이 일어나는 동안 실행돼서는 안될 작업을 useMemo()에 넣으면 안 됨
    - 사용법
      - const memoizedValue = useMemo(값 생성 함수, 의존성 배열);
      - 의존성 배열에 들어 있는 변수가 변했을 경우에만 새로 값 생성 함수를 호출하여 결과값을 반환함
      - 그렇지 않은 경우에는 기존 함수의 결과값을 그대로 반환함
      - 의존성 배열을 넣지 않을 경우 렌더링이 일어날 때마다 매번 값 생성 함수가 실행되므로 의미가 없음
    - useCallback()
      - useMemo() 훅과 유사하지만 값이 아닌 함수를 반환한다는 점이 다름
      - useCallback(콜백 함수, 의존성 배열);은 useMemo(() => 콜백 함수, 의존성 배열);과 동일
      - 컴포넌트 내에 함수를 정의하면 매번 렌더링이 일어날 때마다 함수가 새로 정의되므로 usecallback() 훅을 사용하여 불필요한 함수 재정의 작업을 없애는 것
      - 사용법
        - const memoizedCallback = useCallback(콜백 함수, 의존성 배열);
        - 의존성 배열에 들어 있는 변수가 변했을 경우에만 콜백 함수를 다시 정의해서 리턴함
    - useRef()
      - 래퍼런스를 사용하기 위한 훅
      - 래퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미
      - 매번 렌더링될 때마다 항상 같은 래퍼런스 객체를 반환
      - 사용법
        - const refContainer = useRef(초깃값);
        - .current라는 속성을 통해서 접근
    - **훅의 규칙**
      - 무조건 최상위 레벨에서만 호출해야 함
        - 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안 됨
        - 컴포넌트가 렌더링 될 때마다 매번 같은 순서로 호출되어야 함 
      - 리액트 함수 컴포넌트에서만 훅을 호출해야 함
        - 훅은 리액트 함수 컴포넌트에서 호출하거나 직접 만든 커스텀 훅에서만 호출할 수 있음   
    - **커스텀 훅**
      - 이름이 use로 시작하고 내부에서 다른 훅을 호출하는 단순한 자바스크립트 함수
      - 파라미터로 무엇을 받을지, 어떤 것을 리턴해야 할지를 개발자가 직접 정할 수 있음
      - 중복되는 로직을 커스텀 훅으로 추출하여 재사용성을 높이기
      - 이름이 use로 시작하지 않으면 특정 함수의 내부에서 훅을 호출하는지를 알 수 없기 때문에 훅의 규칙 위반 여부를 자동으로 확인할 수 없음               
