import Link from "next/link";
import * as S from "./styles";

export function Breadcrumb(props) {
  const { breadcrumb } = props;
  return (
    <>
      <S.Breadcrumb>
        {breadcrumb.map((links) => {
          return (
            <Link href={links.url} key={links.url}>
              {links.text}
            </Link>
          );
        })}
      </S.Breadcrumb>
    </>
  );
}
