import Link from "next/link";
import * as S from "./styles";

interface Props {
  children: React.ReactNode;
  className?: string;
  summary: string;
}

export function Details({ summary, children, className }: Props) {
  return (
    <S.Details className={className} open>
      <summary>{summary}</summary>
      {children}
    </S.Details>
  );
}
