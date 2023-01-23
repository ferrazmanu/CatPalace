import * as S from "./styles";

interface Props {
  id?: string;
  children: React.ReactNode;
}

export function SectionContainer({ children, id }: Props) {
  return <S.Section id={id}>{children}</S.Section>;
}
