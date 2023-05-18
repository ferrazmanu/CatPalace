import { SearchIcon } from "@/components/Icons";
import * as S from "./styles";

export function SearchBar({ onChange }) {
  return (
    <>
      <S.SearchBar>
        <input
          type="text"
          name="search"
          placeholder="Pesquisar..."
          onChange={onChange}
        />
        <button type="button">
          <SearchIcon width="22px" height="22px" />
        </button>
      </S.SearchBar>
    </>
  );
}
