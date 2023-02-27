import * as S from "./styles";

interface Props {
  responsive: boolean;
  children: React.ReactNode;
}

export function GridContainer({ children, responsive }: Props) {
  return (
    <S.Grid className="grid-container" responsive={responsive}>
      {children}
    </S.Grid>
  );
}
