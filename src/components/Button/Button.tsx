import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  type: "button" | "submit";
  actionOnClick?: () => void;
  text: string;
}

const Button = ({
  text,
  type,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return <ButtonStyled type={type} onClick={actionOnClick} children={text} />;
};

export default Button;
