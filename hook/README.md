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
