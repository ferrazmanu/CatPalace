import { DetailsProps } from "@/common/types";
import * as S from "./styles";

export function Details({ summary, children, className }: DetailsProps) {
  return (
    <S.Details className={className}>
      <summary>{summary}</summary>
      {children}
    </S.Details>
  );
}
