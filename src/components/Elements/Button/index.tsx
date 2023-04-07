import { ButtonProps } from "@/common/types";
import * as S from "./styles";

export function Button({ href, text, type, onClick }: ButtonProps) {
  return (
    <S.Button href={href} className="button" type={type} onClick={onClick}>
      {text}
    </S.Button>
  );
}
