import Link from "next/link";
import * as S from "./styles";

export function Breadcrumb(props) {
  const { breadcrumb } = props;
  return breadcrumb.map((links) => {
    return (
      <S.Breadcrumb>
        <Link href={links.url}>{links.text}</Link>
      </S.Breadcrumb>
    );
  });
}
