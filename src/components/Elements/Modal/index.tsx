import { ModalProps } from "@/common/types";

import { CloseIcon } from "@/components/Icons";

import * as S from "./styles";

export function Modal({
  modalHeader,
  modalBody,
  modalFooter,
  onClick,
}: ModalProps) {
  return (
    <S.ModalWrapper>
      <S.ContentBox>
        <button type="button" className="close-modal" onClick={onClick}>
          <CloseIcon />
        </button>
        <div className="modal-header">{modalHeader}</div>
        <div className="modal-body">{modalBody}</div>
        <div className="modal-footer">{modalFooter}</div>
      </S.ContentBox>
    </S.ModalWrapper>
  );
}
