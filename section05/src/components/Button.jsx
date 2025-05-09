const Button = ({ text, color="black", children }) => {
    // 이벤트 객체 (SyntheticBaseEvent- 콘솔창)
    const onClickButton = (e) => {
      console.log(e);
      console.log(text);
    };
  
    return (
      <button
        onClick={onClickButton}
        //onMouseEnter={onClickButton}
        style={{ color: color }}
      >
        {text} - {color.toUpperCase()}
        {children}
      </button>
    );
  };
  
  /* React 19버전 이후부터는 무시되는 경향ㅇ
  Button.defaultProps = {
    color: "black",
  };
  */
  
  export default Button;