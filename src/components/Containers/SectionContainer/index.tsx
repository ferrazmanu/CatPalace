import { SectionContainerProps } from "@/common/types";
import * as S from "./styles";

export function SectionContainer({
  children,
  id,
  className,
  sectionTitle,
}: SectionContainerProps) {
  return (
    <S.Section
      id={id}
      className={`${className ? className : ""} section-container`}
    >
      {sectionTitle && <S.SectionTitle>{sectionTitle}</S.SectionTitle>}
      {children}
    </S.Section>
  );
}
