import * as S from "./styled";

interface ButtonProps {
  href: string;
  text: string;
  type?: string;
}

export function Button({ href, text, type }: ButtonProps) {
  return (
    <S.Button href={href} className="button" type={type}>
      {text}
    </S.Button>
  );
}
