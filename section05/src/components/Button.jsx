// '구조 분해 할당'으로 가져옴. 기본값="black"
const Button =({children, text, color ="black"})=>{

return <button style={{color: color}}>
    {text} - {color.toUpperCase()}
    {children}
    </button>;
};

export default Button;