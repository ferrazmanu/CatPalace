import Link from "next/link";

import { WhatsappIcon } from "@/components/Icons";

import * as S from "./styles";

export function WhatsappButton() {
  return (
    <S.Wrapper>
      <Link
        href={
          "https://wa.me/5543991498444?text=Ol%C3%A1%2C%20Atendimento%20Cat%20Palace!"
        }
        target="_blank"
      >
        <WhatsappIcon width="48px" height="48px" color="#936287" />
      </Link>
    </S.Wrapper>
  );
}
