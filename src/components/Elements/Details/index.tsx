import { DetailsProps } from "@/common/types";
import * as S from "./styles";

export function Details({ summary, children, className, open }: DetailsProps) {
  return (
    <S.Details className={className} open={open}>
      <summary>{summary}</summary>
      {children}
    </S.Details>
  );
}
