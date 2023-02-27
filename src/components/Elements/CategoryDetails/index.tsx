import Link from "next/link";
import * as S from "./styles";

export function Details() {
  return (
    <S.Details>
      <summary>Acessórios</summary>
      <ul>
        <li>
          <Link href={""}>Canecas</Link>
        </li>
        <li>
          <Link href={""}>Fonte</Link>
        </li>
        <li>
          <Link href={""}>Caminhas</Link>
        </li>
        <li>
          <Link href={""}>Playground</Link>
        </li>
        <li>
          <Link href={""}>Arranhadores</Link>
        </li>
      </ul>
    </S.Details>
  );
}
