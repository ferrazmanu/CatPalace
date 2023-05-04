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
    <>
      {type ? (
        <S.Button
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
      ) : (
        <S.Link
          href={href}
          className="button"
          onClick={onClick}
          background={background}
          color={color}
          border={border}
          aria-label={text}
        >
          {text}
        </S.Link>
      )}
    </>
  );
}
