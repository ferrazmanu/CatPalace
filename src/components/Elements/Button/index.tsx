import { ButtonProps } from "@/common/types";
import * as S from "./styles";

export function Button({
  href,
  text,
  type,
  onClick,
  background,
  color,
  border,
}: ButtonProps) {
  return (
    <S.Button
      href={href}
      className="button"
      type={type}
      onClick={onClick}
      background={background}
      color={color}
      border={border}
      aria-label={text}
    >
      {text}
    </S.Button>
  );
}
