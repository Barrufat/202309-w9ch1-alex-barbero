import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  type: "button" | "submit";
  actionOnClick?: () => void;
  title: string;
  text: string;
}

const Button = ({
  title,
  text,
  type,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      type={type}
      onClick={actionOnClick}
      title={title}
      children={text}
    />
  );
};

export default Button;
