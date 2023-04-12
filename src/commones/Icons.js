const UserIcons = ({ icons: Icons, className, id, onClick = () => {} }) => {
  return (
    <>{Icons && <Icons className={className} id={id} onClick={onClick} />}</>
  );
};
export default UserIcons;
