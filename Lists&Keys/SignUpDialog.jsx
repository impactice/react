const { useState } = require("react");

function SignUpDialog(props) {
    const [nickname, setNickname] = useState(''); 

    const handleChange = (event) => {
        setNickname(event.target.value);
    } 

    const handleSignUp = ( ) => {
        alert('어서 오세요, ${nickname}님!');
    } 

    return (
        <Dialog 
            title="화성 탐사 프로그램" 
            message="닉네임을 입력해 주세요.">
            <input 
                value={nickname} 
                onChange={handleChange} />
            <button onClick={handleSignUp}>
                가입하기기
            </button>
        </Dialog>
    );
}