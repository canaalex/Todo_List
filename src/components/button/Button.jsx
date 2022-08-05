
const Button = (props) => {

    const { label,handleClick,style} = props;
    return(
        <button className={style} onClick={handleClick} >
        {label}
        </button>
        

    );
}
export default Button;