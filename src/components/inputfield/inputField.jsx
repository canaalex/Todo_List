const InputField = ({ label, type, onChange, style, value ,title}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={label}
        className={style}
        onChange={onChange}
        value={value}
        title={title}
      />
    </div>
  );
};

export default InputField;
