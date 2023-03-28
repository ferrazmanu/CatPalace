import { GridContainerProps } from "@/common/types";
import * as S from "./styles";

export function GridContainer({ children, responsive }: GridContainerProps) {
  return (
    <S.Grid className="grid-container" responsive={responsive}>
      {children}
    </S.Grid>
  );
}
