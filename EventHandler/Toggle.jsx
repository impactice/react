import React, { useState } from "react";

function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);

    // 방법 1. 함수 안에 함수로 정의
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    // 방법 2. arrow function으로 정의하는 방법 (위와 동일 기능)
    // const handleClick = () => {
    //     setIsToggleOn((isToggleOn) => !isToggleOn);
    // };

    return (
        <button onClick={handleClick}>
            {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    );
}

export default Toggle;
