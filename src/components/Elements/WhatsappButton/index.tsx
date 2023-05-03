import Link from "next/link";

import { WhatsappIcon } from "@/components/Icons";

import * as S from "./styles";

export function WhatsappButton() {
  const message = () => {
    const number = "+5543991940137";

    let formattedMessage = `
      Olá, *CatPalace* \n
      Gostaria de conhecer mais sobre a loja!`.replace(/^\s+/gm, "");

    let url = `https://api.whatsapp.com/send?phone=${number}`;
    url += `&text=${encodeURI(formattedMessage)}`;

    return url;
  };

  return (
    <S.Wrapper>
      <Link href={message()} target="_blank">
        <WhatsappIcon width="48px" height="48px" color="#936287" />
      </Link>
    </S.Wrapper>
  );
}
