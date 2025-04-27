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








