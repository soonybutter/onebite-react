import {useState} from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register=()=>{

    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");

    // useState함수: React에서 컴포넌트의 상태를 만들고, 관리함 (값을 기억)
    // set함수: 상태변경함수 (for 렌더링)
    const onChangeName =(e)=>{
        setName(e.target.value);
    };

    const onChangeBirth =(e)=>{
        setBirth(e.target.value);
    }

    const onChangeCountry =(e)=>{
        setCountry(e.target.value);
    }

    const onChangeBio=(e)=>{
        setBio(e.target.value);
    }

    return(
        <div>
            <h1>Sign up!‧｡♥｡‧˚♡˚ ‧｡♥｡‧˚♡˚ </h1>
            <div>
                <input 
                    value ={name}
                    onChange={onChangeName}
                    placeholder={"이름"}
                />
            </div>
            <div>
                <input
                value={birth}
                onChange={onChangeBirth}
                type="date"
                />
            </div>

            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option>한국</option>
                    <option>미국</option>
                    <option>영국</option>
                </select>
            </div>
            
            <div>
                <textarea value={bio} onChange={onChangeBio}/>
                {bio}
            </div>
        </div>
    )
}

export default Register;