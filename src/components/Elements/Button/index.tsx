import { MouseEventHandler } from "react";
import * as S from "./styled";

interface ButtonProps {
  href: string;
  text: string;
  type?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function Button({ href, text, type, onClick }: ButtonProps) {
  return (
    <S.Button href={href} className="button" type={type} onClick={onClick}>
      {text}
    </S.Button>
  );
}
