import Image from "next/image";
import * as S from "./styles";
import React from "react";

export function Loading() {
  return (
    <S.Loading>
      <Image
        src={"/assets/static/crown-loading.gif"}
        alt={"Carregando..."}
        fill
      />
    </S.Loading>
  );
}
