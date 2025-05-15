# Lists & Keys 
- 배열 형태의 데이터를 사용하여 여러 개의 컴포넌트를 효율적으로 렌더링하고, 각 컴포넌트를 고유하게 식별하기 위해 키(key)라는 특별한 속성을 사용

## map() 함수
- map() 함수는 배열(Array)의 각 요소를 변환하여 새로운 배열을 생성하는 JavaScript의 배열 메서드입니다
- map() 함수는 자바스크립트의 배열 메서드 중 하나로, 배열의 각 요소에 대해 주어진 함수를 호출하고, 그 결과로 새로운 배열을 생성합니다
- 이 메서드는 원본 배열을 변경하지 않고, 새로운 배열을 반환합니다
- map()은 배열을 변환하여 새로운 배열을 생성하는 중요한 함수이며, React에서 리스트를 동적으로 렌더링할 때 필수적으로 사용됩니다!

```
array.map(callbackFunction(currentValue, index, array), thisArg);

```
- array: map() 함수를 호출하는 원본 배열입니다
- callbackFunction: 각 요소에 대해 실행할 함수입니다. 이 함수는 세 가지 인수를 받을 수 있습니다
  - currentValue: 현재 처리 중인 배열 요소입니다
  - index (선택 사항): 현재 처리 중인 요소의 인덱스입니다
  - array (선택 사항): map() 함수를 호출한 원본 배열입니다
- thisArg (선택 사항): callbackFunction 내부에서 this로 사용할 값입니다.

## map() 함수 예시
- 기본 사용법
```
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

- 객체 배열 반환 
```
const users = [
{ id: 1, name: 'Alice' },
{ id: 2, name: 'Bob' },
{ id: 3, name: 'Charlie' },
];
const userNames = users.map(user => user.name);
console.log(userNames); // ['Alice', 'Bob', 'Charlie']
```

- 인덱스 사용
```
const numbers = [10, 20, 30];
const indexedNumbers = numbers.map((num, index) => `${index}: ${num}`);
console.log(indexedNumbers); // ['0: 10', '1: 20', '2: 30']
```

- 리액트에서의 사용
```
const items = ['Apple', 'Banana', 'Cherry'];

function ItemList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
    ))}
    </ul>
  );
}
```

## Lists & Keys
- 리스트는 배열 형태의 데이터를 기반으로 여러 개의 컴포넌트를 렌더링할 때 사용됩니다. 예를 들어, 사용자 목록이나 상품 목록을 렌더링할 때 리스트를 활용할 수 있습니다. 리스트를 렌더링할 때는 map() 함수를 사용하여 배열의 각 요소를 컴포넌트로 변환합니다
- 리액트에서 리스트를 렌더링할 때 각 요소에 고유한 "키"를 부여하는 것이 중요합니다. 키는 리액트가 어떤 항목이 변경되었는지, 추가되었는지, 또는 제거되었는지를 식별하는 데 사용됩니다. 키를 사용하면 리액트가 리스트를 효율적으로 업데이트할 수 있습니다
- JSX에서 배열을 .map()을 사용하여 렌더링할 수 있습니다

```
function NameList() {
  const names = ["Alice", "Bob", "Charlie"];

  return (
    <ul>
      {names.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  );
}
```
- 코드는 "Alice", "Bob", "Charlie"를 각각 <li> 태그로 출력합니다. 하지만, 고유한 키(Key)가 없으므로 React에서 경고가 발생할 수 있습니다

- 키는 각 객체나 아이템을 구분할 수 있는 고유한 값입니다
- 리액트에서 키는 아이템들을 구분하기 위한 고유한 문자열입니다
- 리스트의 각 항목에는 고유한 키(key 속성)를 추가해야 합니다
- 키는 React가 리스트 항목을 식별하고 효율적으로 업데이트하는 데 필요합니다

```
function NameList() {
  const names = ["Alice", "Bob", "Charlie"];

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li> // index를 key로 사용 (비추천)
      ))}
    </ul>
  );
}
```

```
function UserList() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li> // ID를 key로 사용 (추천)
      ))}
    </ul>
  );
}
```

## 실습 
- src 폴더에 chapter_10 폴더 생성 후, AttendanceBook.jsx 파일 생성

```
import React from "react";
const students = [
  {
    id: 1,
    name: "Inje",
  },
  {
    id: 2,
    name: "Steve",
  },
  {
    id: 3,
    name: "Bill",
  },
  {
    id: 4,
    name: "Jeff",
  },
  ];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student, index) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}
export default AttendanceBook;
```

# Forms 
- 사용자의 입력을 처리하고 데이터를 서버로 전송하는 데 사용

## Form 
- Form은 사용자 입력을 관리하고, 제출(submit) 이벤트를 처리하는 중요한 요소입니다

- 리액트 Form은 일반 HTML Form과 유사하지만, 리액트의 상태 관리 및 이벤트 처리 기능을 활용하여 더욱 강력하고 유연하게 작동합니다

- 리액트 Form은 다음과 같은 요소로 구성됩니다
  - form 태그: Form 전체를 감싸는 태그입니다.
  - input, textarea, select 등의 입력 요소: 사용자로부터 데이터를 입력받는 요소입니다.
  - onChange 이벤트 핸들러: 입력 요소의 값이 변경될 때 호출되는 함수입니다.
  - onSubmit 이벤트 핸들러: Form이 제출될 때 호출되는 함수입니다.
  - 상태 (State): 입력 요소의 값을 저장하고 관리하는 변수입니다.

- 리액트 Form의 작동 방식
- 1. 초기 상태 설정: 각 입력 요소의 초기값을 상태로 설정합니다.
- 2. 입력 요소 렌더링: 상태를 기반으로 입력 요소를 렌더링합니다.
- 3. onChange 이벤트 처리: 사용자가 입력 요소의 값을 변경하면 onChange 이벤트 핸들러가 호출되고, 상태를 업데이트합니다.
- 4. onSubmit 이벤트 처리: 사용자가 Form을 제출하면 onSubmit 이벤트 핸들러가 호출되고, 상태에 저장된 데이터를 서버로 전송합니다.
- 5. 상태 업데이트 및 렌더링: 서버 응답에 따라 상태를 업데이트하고, UI를 다시 렌더링합니다

## HTML form vs Controlled Component

```
import React, { useState } from "react";

function NameForm(props) {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    alert("입력한 이름 : " + value);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름 :
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}
export default NameForm;
```

![image](https://github.com/user-attachments/assets/17869ad1-9de5-4fcf-bdbe-badb6dde1b7b)

## Form 
- 기본적인 Form 사용법
  -  React에서는 onSubmit 이벤트 핸들러를 사용하여 폼 데이터를 처리할 수 있습니다

```
import { useState } from "react";
function SimpleForm() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    alert(`입력된 이름: ${name}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}
export default SimpleForm;

```

- TextArea : 여러 줄에 걸쳐 긴 텍스트를 입력받기 위한 HTML 태그
```
import { useState } from "react";

function RequestForm(props) {
  const [value, setValue] = useState("요청사항을 입력하세요:");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    alert("입력한 요청사항: " + value);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        요청사항:
        <textarea value={value} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}
export default RequestForm;
```

- Select 태그 : Drop-down 목록을 보여주기 위한 HTML 태그

```
import React, { useState } from "react";

function FruitSelect(props){
  const [value, setValue] = useState('grape');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('선택한 과일: ' + value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        과일을 선택하세요:
        <select value={value} onChange={handleChange}>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="grape">포도</option>
          <option value="watermelon">수박</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default FruitSelect;

```

- input/ textarea/ select 태그 사용 방법 유사
```
// input 태그
<input type="text" value={value} onChange={handleChange} />
// textarea 태그
<textarea value = {value} onChange = {handleChange} />
// select 태그
<select value={value} onChange={handleChange}>
<option value="apple">사과</option>
...
```

- Multiple Inputs : 여러 개의 state를 선언하여 각각의 입력에 대해 사용!
```
import React, { useState } from "react";

function Reservation(props) {
  const [haveBreakfast, setHaveBreakfast] = useState(true);
  const [numberOfGuest, setNumberOfGuest] = useState(2);

  const handleSubmit = (event) => {
    alert(`아침식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        아침식사 여부:
        <input
          type="checkbox"
          checked={haveBreakfast}
          onChange={(event) => {
            setHaveBreakfast(event.target.checked);
          }}
        />
      </label>
      <br />
      <label>
        방문객 수:
        <input
          type="number"
          value={numberOfGuest}
          onChange={(event) => {
            setNumberOfGuest(Number(event.target.value)); // 문자열을 숫자로 변환
          }}
        />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default Reservation;

```

- 여러 개의 입력 필드 다루기
  - 여러 개의 입력 필드를 관리할 때는 객체 상태(state)를 사용하면 효율적입니다

```
import { useState } from "react";
function MultiInputForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("입력된 데이터:", formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:{" "}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        이메일:{" "}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">제출</button>
    </form>
  );
}
export default MultiInputForm;

```

- 체크박스, 라디오 버튼, 드롭다운 다루기
```
import { useState } from "react";
function AdvancedForm() {
  const [form, setForm] = useState({
    username: "",
    gender: "male",
    agree: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("폼 데이터:", form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:{" "}
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        성별:
        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>
      </label>
      <br />
      <label>
        동의:{" "}
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">제출</button>
    </form>
  );
}
export default AdvancedForm;
```

- useRef를 활용한 비제어 컴포넌트 (uncontrolled component)
  - useState 대신 useRef를 사용하여 입력 값을 직접 참조할 수도 있다

```
import { useRef } from "react";
function UncontrolledForm() {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`입력된 값: ${inputRef.current.value}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">제출</button>
    </form>
  );
}
export default UncontrolledForm;

```

## 실습 
- src 폴더에 chapter_11 폴더 생성 후, SignUp.jsx 파일 생성

```
import React, { useState } from "react";
function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자");
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleSubmit = (event) => {
    alert(`이름: ${name}, 성별: ${gender}`);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label>
        성별:
        <select value={gender} onChange={handleChangeGender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}
export default SignUp;

```

# Lifting State Up 
- 상태를 부모 컴포넌트로 올려서 중앙에서 관리하는 방식

## Lifting State Up(상태 끌어올리기) 
- 하위 컴포넌트의 상태를 부모 컴포넌트로 이동시키는 패턴입니다
- 이는 여러 하위 컴포넌트가 동일한 상태를 공유하거나, 하위 컴포넌트의 변경 사항을 부모 컴포넌트에서 처리해야 할 때 유용합니다
- 리액트는 단방향 데이터 흐름을 따르기 때문에, 하위 컴포넌트에서 부모 컴포넌트의 상태를 직접 변경할 수 없습니다
- 따라서 하위 컴포넌트의 상태를 부모 컴포넌트에서 관리하고, 필요한 경우 부모 컴포넌트에서 하위 컴포넌트로 데이터를 전달해야 합니다
- Lifting State Up 구현 방법
1. 상태 정의: 하위 컴포넌트에서 사용될 상태를 부모 컴포넌트에 정의합니다.
2. 상태 변경 함수 전달: 부모 컴포넌트에서 상태를 변경하는 함수를 정의하고, 이 함수를 하위 컴포넌트에 props로 전달합니다.
3. 상태 변경 함수 호출: 하위 컴포넌트에서 이벤트 발생 시 props로 전달받은 상태 변경 함수를 호출하여 부모 컴포넌트의 상태를 변경합니다
4. 상태 전달: 부모 컴포넌트에서 변경된 상태를 props를 통해 하위 컴포넌트에 전달합니다

## Lifting State Up(상태 끌어올리기) 
- 하위 컴포넌트가 공통된 부모 컴포넌트의 state를 공유하여 사용하는 것.
- 아래는 자식 컴포넌트가 값을 가지고 있을 필요없이 부모 컴포넌트의 값을 자식 컴포넌트가 이용하는 경우입니다.
- 각 컴포넌트의 값을 상위 컴포넌트로 옮겨서 공유하는 방식입니다

![image](https://github.com/user-attachments/assets/f009292a-d417-4ff6-9b7c-5ea695a9cabe)


## Lifting State Up이 필요한 이유
- 예를 들어, 두 개의 자식 컴포넌트가 동일한 데이터를 공유해야 하는 경우, 각 자식 컴포넌트가 별도로 상태를 관리하면 데이터 동기화 문제가 발생할 수 있습니다
- 잘못된 예시: 개별적으로 상태를 관리하는 경우

```
function ChildA() {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>입력 값: {text}</p>
    </div>
  );
}
```

```
function ChildB() {
  const [text, setText] = useState("");

  return (
    <div>
      <p>ChildA와 같은 데이터를 보여줘야 하지만, 현재 별도 상태 관리 중: {text}</p>
    </div>
  );
}

function Parent() {
  return (
    <div>
      <ChildA />
      <ChildB />
    </div>
  );
}
```

- 상태를 부모 컴포넌트로 끌어올리기 (Lifting State Up)
- 해결 방법: 부모에서 상태를 관리하고, props로 내려주기

```
import { useState } from "react";

function Parent() {
  const [text, setText] = useState("");

  return (
    <div>
      <ChildA text={text} setText={setText}/>
      <ChildB text={text} />
    </div>
  );
}
```

```
function ChildA({ text, setText }) {
  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>입력 값: {text}</p>
    </div>
  );
}

function ChildB({ text }) {
  return (
    <div>
      <p>ChildA에서 입력한 값: {text}</p>
    </div>
  );
}
export default Parent;
```
- Parent에서 text 상태를 관리하고, setText 함수와 함께 ChildA로 전달합니다.
- ChildA에서 입력하면 Parent의 상태가 업데이트되고, ChildB도 동일한 상태를 공유하여 반영됩니다

## 실습 
- src 폴더에 chapter_12 폴더 생성 후, TemperatureInput.jsx와 Calculator.jsx 파일 생성
```
const scaleNames = {
  c: "섭씨",
  f: "화씨",
};
function TemperatureInput(props) {
  const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  };
  return (
    <fieldset>
      <legend>온도를 입력해주세요(단위:{scaleNames[props.scale]}):</legend>
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
}
export default TemperatureInput;

```
```
import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>물이 끓습니다.</p>;
  }
  return <p>물이 끓지 않습니다.</p>;
}
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
function Calculator(props) {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");
  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale("c");
  };
  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale("f");
  };
  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}
export default Calculator;
```

![image](https://github.com/user-attachments/assets/b4affc43-0f65-484e-a474-a8d574105c75)

## Composition vs Inheritance 
- "컴포넌트가 자신의 출력에 다른 컴포넌트를 참조" 하는 

## 합성과 상속
- 리액트에서 컴포넌트 간 관계를 설정하는 두 가지 주요 방법은 Composition(합성)과 Inheritance(상속)입니다
- 리액트 공식 문서에서는 상속보다는 합성을 사용하여 컴포넌트 간 코드를 재사용하는 것을 권장합니다
- 합성은 컴포넌트를 조합하여 더 복잡한 UI를 만드는 방법입니다. 합성은 컴포넌트를 조합하여 재사용하는 방식입니다
- 리액트에서는 props를 사용하여 컴포넌트 간에 데이터를 전달하고, children props를 통해 다른 컴포넌트를 포함할 수 있습니다
- 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것입니다

```
function Button({ children, color }) {
  return <button style={{ backgroundColor: color }}>{children}</button>;
}

function App() {
  return (
    <div>
      <Button color="blue">파란 버튼</Button>
      <Button color="red">빨간 버튼</Button>
    </div>
  );
}
export default App;
```

- React는 전통적인 객체지향 프로그래밍(OOP) 방식의 상속을 잘 사용하지 않습니다.
- React에서는 컴포넌트를 상속(Inheritance)하는 대신, Composition을 사용하는 것이 일반적입니다

```
class ParentButton extends React.Component {
  render() {
    return <button>{this.props.text}</button>;
  }
}

class ChildButton extends ParentButton {
  render() {
    return <button style={{ color: "red" }}>{this.props.text}</button>;
  }
}

function App() {
  return <ChildButton text="빨간 버튼" />;
}
export default App;
```
컴포넌트 간의 관계가 복잡해짐 \n
부모 컴포넌트가 변경되면, 자식 컴포넌트에도 영향이 미침 \n
React에서는 상속보다 Composition을 권장 \n




