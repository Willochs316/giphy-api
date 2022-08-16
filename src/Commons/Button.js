const Button = ({ className, title, type }) => {
  return (
    <button className={className} type={type}>
      {title}
    </button>
  );
};

export default Button;
