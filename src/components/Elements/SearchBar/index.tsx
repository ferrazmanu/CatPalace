import { SearchIcon } from "@/components/Icons";
import * as S from "./styles";

export function SearchBar() {
  return (
    <>
      <S.SearchBar>
        <input type="text" name="search" placeholder="Pesquisar..." />
        <button type="submit">
          <SearchIcon width="22px" height="22px" />
        </button>
      </S.SearchBar>
    </>
  );
}
