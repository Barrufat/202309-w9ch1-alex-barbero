import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  type: "button" | "submit";
  actionOnClick?: () => void;
  title: string;
}

const Button = ({
  type,
  actionOnClick,
  title,
}: ButtonProps): React.ReactElement => {
  return <ButtonStyled type={type} onClick={actionOnClick} title={title} />;
};

export default Button;
