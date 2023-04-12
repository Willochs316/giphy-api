const Input = ({
  type,
  className,
  name,
  placeholder,
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  value,
}) => {
  return (
    <>
      <input
        type={type}
        className={className}
        name={name}
        placeholder={placeholder}
        required
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
      />
    </>
  );
};
export default Input;
