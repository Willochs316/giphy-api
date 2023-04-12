const Paragraph = ({ className, title, text, content }) => {
  return (
    <>
      <h2 className={className}>{content}</h2>
      <p className={className}>{title}</p>
      <span className={className}>{text}</span>
    </>
  );
};

export default Paragraph;
