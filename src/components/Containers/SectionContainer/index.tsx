import * as S from "./styles";

interface Props {
  id?: string;
  sectionTitle?: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionContainer({
  children,
  id,
  className,
  sectionTitle,
}: Props) {
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
