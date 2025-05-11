import useInput from "./../hooks/useInput";
// 3가지 hook 관련된 팁
// 1. 함수 텀포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다
// 3. 나만의 훅(Cutsom Hook)을 직접 만들 수 있다.
// 커스텀 훅 만드는법: 함수 앞에 use를 붙인다. ex) useInput()
// 커스텀 훅: 보통 components가 아닌, 'hooks'폴더 생성 후 함수 이름으로 보관함.



const HookExam =() =>{
    const [input, onChange] = useInput();

    return (
        <div>
            <input value ={input} onChange={onChange}/>
        </div>
    )
};

export default HookExam;