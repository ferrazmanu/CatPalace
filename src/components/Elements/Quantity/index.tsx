import * as S from "./styles";

export function Quantity({ incrementQuantity, decrementQuantity, qty }) {
  return (
    <S.Quantity className="quantity">
      <button onClick={decrementQuantity} className="subtract">
        -
      </button>
      <span className="qty">{qty}</span>
      <button onClick={incrementQuantity} className="add">
        +
      </button>
    </S.Quantity>
  );
}
