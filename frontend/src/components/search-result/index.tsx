import React from "react";
import { PokemonResponse } from "../../types";
import * as S from "./styles";

type PropsType = {
  pokemon: PokemonResponse;
};

const SearchResult: React.FC<PropsType> = ({ pokemon }: PropsType) => {
  const { name, sprite, description } = pokemon;
  return (
    <S.Wrapper id="search-result">
      <S.Name>{name}</S.Name>
      <S.Sprite
        imageSrc={sprite}
        imageAlt={name}
        fallbackText={name.substring(0, 2)}
      />
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
};

export default SearchResult;
