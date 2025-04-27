# Hook 
## useEffect()
- useEffect is a React Hook that lets you synchronize a component with an external system.
- useEffect() Hook은 함수형 컴포넌트 내에서 부수 효과(side effect)를 수행할 수 있도록 해줍니다.
- 부수 효과란 컴포넌트의 주요 기능 외에 추가적으로 실행되는 작업을 의미하며, 데이터 fetching, 구독, DOM 직접 조작, 타이머 설정 등이 대표적입니다.
- 클래스형 컴포넌트의 componentDidMount, componentDidUpdate, componentWillUnmount를 대체합니다.
• useEffect는 두 개의 인자를 받습니다. 첫 번째 인자는 사이드 이펙트를 수행하는 함수이고, 두 번째 인자는 의존성 배열입니다. 의존성 배열은 이펙트가 실행될 조건을 정의합니다.

![image](https://github.com/user-attachments/assets/964c2b8a-2d2b-472b-ad51-95492d4df29c)

![image](https://github.com/user-attachments/assets/122d226a-4d0d-4efe-8300-52a7d4d60596)

- chapter_07 폴더에 Counter3.jsx 파일 생성 및 index.js 편집
- Counter3.jsx
```javascript
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
```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import Counter3 from './chapter_07/Counter3';
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Counter3 />);
```

- 특정 상태가 변경될 때 실행
- chapter_07 폴더에 Counter4.jsx 파일 생성 및 index.js 편집
```javascript
import React, { useState, useEffect } from "react";

function Counter4() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`카운트 값이 변경됨: ${count}`);
  }, [count]); // count가 변경될 때마다 실행

  return (
    <div>
      <h1>카운트: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        증가
      </button>
    </div>
  );
}

export default Counter4;
```

- 컴포넌트가 언마운트될 때 실행
- chapter_07 폴더에 Timer.jsx 파일 생성 및 index.js 편집
```javascript
import React, { useEffect, useState } from "react";

function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("1초마다 실행");
    }, 1000);

    return () => {
      console.log("타이머 정리");
      clearInterval(interval);
    };
  }, []);

  return <h1>타이머 실행 중...</h1>;
}

export default Timer;
```

- 마우스 위치 추적
- chapter_07 폴더에 MouseTracker.jsx 파일 생성 및 index.js 편집 
```javascript
import React, { useState, useEffect } from "react";

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

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
```javascript
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
```javascript
import React, { useState } from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);

  const decreaseCount = () => setCount((count) =>
    Math.max(count - 1, 0)
  );

  return [count, increaseCount, decreaseCount];
}

export default useCounter;
```

- index.js
```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import Accommodate from './chapter_07/Accommodate';

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Accommodate />);
```

- Accommodate.jsx
```javascript
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
      <button onClick={decreaseCount}>
        퇴장
      </button>
      {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accommodate;
```

### useMemo() 
- useMemo() Hook은 memoization된 값을 반환합니다
- memoization이란 특정 값을 계산하는 함수를 호출했을 때, 해당 함수의 인수가 변경되지 않았다면 이전에 계산된 값을 재사용하는 것을 의미합니다
- 즉, useMemo() Hook은 컴포넌트가 다시 렌더링될 때마다 불필요한 계산을 반복하는 것을 방지하여 성능을 최적화합니다
![image](https://github.com/user-attachments/assets/4b99168d-7e7c-4e04-8180-1a7e49ea883e)

- useMemo에 전달된 함수는 렌더링이 일어나는 동안에만 실행이 됩니다
- 랜더링이 일어날 동안에 실행되어서는 안될 작업을 useMemo에 넣어서는 안됩니다
- 예를 들어 useEffect에서 실행되어야 할 side effect 함수 중에서 랜더링 동안에 실행되어서는 안되는 것들은 useMemo에 넣으면 안됩니다
- 의존성 배열을 넣지 않을 경우, 매 랜더링마다 함수가 실행됩니다
```
const memoizedValue = useMemo(
  ()=> computeExpensiveValue(a, b)
);
```
- 따라서 의존성 배열을 넣지 않을 경우, 아무 의미가 없습니다
- 의존성 배열이 빈 배열일 경우에는 컴포넌트 마운트 시에만 호출됩니다
```
const memoizedValue = useMemo(
  () => {
    return computeExpensiveValue(a, b);
  }, []
);
```
- 마운트 시에 값을 변경할 필요가 있을 때 사용합니다



- 비효율적인 코드 (useMemo 없이)
- 문제점
  - count가 변경될 때마다 ExpensiveCalculation이 매번 재실행됨
  - 불필요한 성능 낭비 발생

- ExpensiveCalculation.jsx
```javascript
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
      <button onClick={() => setCount(count + 1)}>
        클릭: {count}
      </button>
      <ExpensiveCalculation number={number} />
    </div>
  );
}
```

- index.js
```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from './chapter_07/ExpensiveCalculation';

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
```



- useMemo()로 최적화
- 해결 방법
  - number가 변경될 때만 연산을 수행
  - count 변경 시 불필요한 재계산 방지 

- App.js 
```javascript
import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

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
      <button onClick={() => setCount(count + 1)}>
        클릭: {count}
      </button>
      <h2>결과: {expensiveResult}</h2>
    </div>
  );
}

export default App;
```

- index.js
```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from './chapter_07/App.js';

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
```

- useMemo()로 최적화
  - 객체는 참조형 데이터이므로, 일반적으로 { name }을 직접 전달하면 리렌더링 시 새로운 객체로 인식됨
  - useMemo()를 사용하여 불필요한 객체 재생성 방지

- App2.js
```javascript
import React, { useState, useMemo } from "react";

function App2() {
  const [name, setName] = useState("React");
  const [count, setCount] = useState(0);

  const user = useMemo(() => {
    return { name };
  }, [name]); // name이 바뀔 때만 객체 재생성

  return (
    <div>
      <h1>useMemo로 객체 메모이제이션</h1>
      <button onClick={() => setCount(count + 1)}>
        클릭: {count}
      </button>
      <h2>사용자: {user.name}</h2>
    </div>
  );
}

export default App2;
```

- index.js
```javascript
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
  - 과도한 사용: 모든 값을 memoization하려고 하면 오히려 성능 저하를 유발할 수 있습니다. 필요한 경우에만 사용하는 것이 좋습니다.
  - 의존성 배열: 의존성 배열을 올바르게 지정하여 불필요한 계산을 방지해야 합니다.
  - 순수 함수: 값을 계산하는 함수는 반드시 순수 함수여야 합니다. 즉, 외부 값에 영향을 주거나 외부 값을 변경해서는 안 됩니다


### useCallback() 
- useCallback() Hook은 함수 메모이제이션을 제공합니다
- 메모이제이션이란 특정 함수를 호출했을 때, 해당 함수의 인수가 변경되지 않았다면 이전에 계산된 함수를 재사용하는 것을 의미합니다
- 즉, 컴포넌트가 리렌더링될 때 동일한 함수가 다시 생성되지 않도록 최적화하는 데 사용됩니다
- useCallback() Hook은 컴포넌트가 다시 렌더링될 때마다 불필요하게 새로운 함수를 생성하는 것을 방지하여 성능을 최적화합니다
![image](https://github.com/user-attachments/assets/dedcb6c4-9f4b-4bd8-8f40-00501f2a102f)

![image](https://github.com/user-attachments/assets/374b5f3e-ee28-418c-8d0e-d91c82dc53d5)


- 컴포넌트 내에서 정의한 함수를 자식 컴포넌트에 props로 넘겨서 사용하는 경우에 부모 컴포넌트가 다시 랜더링이 되면 매번 자식 컴포넌트도 다시 랜더링이 됩니다. 하지만 useCallback을 사용하면 특정 변수의 값이 변한 경우에만 함수를 다시 정의하게 되므로 함수가 다시 정의되지 않는 경우에는 자식 컴포넌트도 다시 랜더링이 일어나지 않습니다

```javascript
import { useState } from 'react';

function ParentComponent(props) {
  const [count, setCount] = useState(0);

  // 재렌더링 될 때마다 매번 함수가 새로 생성됨
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
```

```javascript
import { useState, useCallback } from 'react';

function ParentComponent(props) {
  const [count, setCount] = useState(0);

  // 재렌더링될 때마다 함수가 새로 생성되는 것을 방지
  const handleClick = useCallback((event) => {
    // 클릭 이벤트 처리
  }, []);

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
```

- useCallback를 사용하지 않는 경우
- 문제점
  - App 컴포넌트가 리렌더링될 때마다 handleClick 함수가 새롭게 생성됨
  - Child 컴포넌트도 불필요하게 다시 렌더링됨
```javascript
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

- useCallback으로 최적화
- 해결 방법
  - useCallback()을 사용하여 handleClick 함수를 한 번만 생성하고 재사용
  - count 값이 변경되어도 Child 컴포넌트가 불필요하게 다시 렌더링되지 않음
```javascript
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

- useMemo + useCallback 함께 사용
```javascript
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
  }, [query, list]);

  // useCallback으로 이벤트 핸들러 최적화
  const handleChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

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
- 언제 useCallback()을 사용해야 할까?
  - 사용해야 하는 경우
    - 자식 컴포넌트에 함수(props)를 전달할 때
    - 이벤트 핸들러 함수가 불필요하게 재생성될 때
    - 의존성이 자주 바뀌지 않는 경우
  - 사용하지 않아도 되는 경우
    - 단순한 함수는 사용하지 않아도 됨
    - useCallback을 과도하게 사용하면 오히려 성능이 저하될 수 있음
    - 함수를 자주 생성해도 성능에 큰 영향을 주지 않는 경우

- useCallback() Hook 사용 시 주의 사항
  - 과도한 사용: 모든 함수를 useCallback()으로 감싸는 것은 오히려 성능 저하를 유발할 수 있습니다. 필요한 경우에만 사용하는 것이 좋습니다
  - 의존성 배열: 의존성 배열을 올바르게 지정하여 불필요한 함수 생성을 방지해야 합니다.
  - 순수 함수: 함수는 반드시 순수 함수여야 합니다. 즉, 외부 값에 영향을 주거나 외부 값을 변경해서는 안 됩니다

- useCallback() Hook의 장점
  - 렌더링 성능 최적화: 불필요한 함수 생성을 방지하여 컴포넌트 렌더링 성능을 향상시킵니다.
  - 메모리 절약: 함수 재사용을 통해 메모리 사용량을 줄입니다

### useRef()
- Reference란 특정 컴포넌트에 접근할 수 있는 객체를 의미합니다 ex) refObject.current : 현재 참고하고 있는 Element
- useRef는 함수형 컴포넌트에서 DOM 요소에 직접 접근하거나, 값이 변경되더라도 리렌더링을 유발하지 않는 변수를 저장하는 데 사용됩니다
- useRef() Hook은 변경 가능한 ref 객체를 반환합니다
- 이 객체의 .current 속성을 통해 DOM 요소에 직접 접근하거나, 컴포넌트가 다시 렌더링되어도 유지되는 값을 저장할 수 있습니다

![image](https://github.com/user-attachments/assets/21defbb6-e2ab-470d-9675-61b03761808d)

- DOM 요소에 접근하기
```javascript
import { useRef, useEffect } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}
```

- 리렌더링 없이 값 저장하기
```javascript
import { useRef, useState } from "react";

function Counter() {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const increment = () => {
    countRef.current += 1;
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
```javascript
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
      <p>이전 값: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}
```
- DOM 접근: useRef를 사용하여 DOM 요소에 접근할 수 있습니다. 예를 들어, 입력 필드에 포커스를 주거나, 특정 요소의 크기를 측정할 때 유용합니다.
- 값 저장: useRef는 렌더링 간에 값을 유지할 수 있지만, current 프로퍼티를 변경해도 컴포넌트가 다시 렌더링되지 않습니다. 이는 상태(state)와의 차이점입니다.
- 성능 최적화: useRef를 사용하면 불필요한 렌더링을 피할 수 있습니다.

- Focus
```javascript
import { useRef } from 'react';

function TextInputWithFocusButton(props) {
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
### Hook의 규칙 
1. Hook은 무조건 최상위 레벨에서만 호출해야 한다.
  - Hook은 컴포넌트가 랜더링될 때마다 매번 같은 순서로 호출되어야 합니다.
  - 잘못된 Hook 사용법
```
function MyComponent(props) {
  const [name, setName] = useState('Inje');
  if(name !== '') {
    useEffect( () => {
      ...
    });
  }
  ...
}
```
2. 리액트 함수 콤포넌트에서만 Hook을 호출해야 합니다

### Custom Hook
- 이름이 use로 시작하고 내부에서 다른 Hook을 호출하는 하나의 자바스크립트 함수입니다.
- 여러 컴포넌트에서 공통적으로 필요한 로직을 추출하여 코드의 중복을 줄이고, 유지보수를 용이하게 합니다
- 반복적으로 사용되는 로직을 재사용 가능하도록 추출한 함수입니다.
- React의 기본 Hook(useState, useEffect, useRef 등)을 조합하여 새로운 기능을 만들 수 있습니다.
- use로 시작하는 이름을 사용해야 합니다.
- 내부에서 React의 다른 Hook을 사용할 수 있습니다.
- 컴포넌트가 아닌 일반 함수이므로 렌더링과 관련 없는 로직도 포함할 수 있습니다.
- Custom Hook을 활용하면 React 애플리케이션에서 반복되는 로직을 재사용 가능하게 분리할 수 있습니다.
- 컴포넌트의 복잡도를 줄이고 유지보수를 쉽게 만들기 위해 적극적으로 활용하는 것이 좋습니다!

- 기본적인 Custom Hook 예제 (카운터 관)
```javascript
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
```
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
useCounter를 여러 컴포넌트에서 재사용 가능합니다 

- API 호출을 위한 Custom Hook
```
import React from "react";
import useFetch from "./useFetch";

function Users() {
  const { data, loading, error } =
useFetch("https://jsonplaceholder.typicode.com/users");

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

```
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
API 호출 로직을 useFetch로 분리하면 여러 곳에서 재사용할 수 있습니다



- 이전 상태 저장 Custom Hook
```
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
```
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
이전 상태 값을 저장할 때 유용합니다
