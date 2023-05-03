import { ModalProps } from "@/common/types";

import { CloseIcon } from "@/components/Icons";

import * as S from "./styles";

export function Modal({
  modalHeader,
  modalBody,
  modalFooter,
  close,
}: ModalProps) {
  return (
    <S.ModalWrapper>
      <S.ContentBox>
        <button type="button" className="close-modal" onClick={close}>
          <CloseIcon />
        </button>
        <div className="modal-header">{modalHeader}</div>
        <div className="modal-body">{modalBody}</div>
        <div className="modal-footer">{modalFooter}</div>
      </S.ContentBox>
    </S.ModalWrapper>
  );
}
