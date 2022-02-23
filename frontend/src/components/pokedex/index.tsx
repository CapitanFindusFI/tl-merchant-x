import React from "react";
import httpClient from "../../lib/api";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { PokemonResponse } from "../../types";
import SearchForm from "../search-form";
import SearchResult from "../search-result";
import Spinner from "../spinner";
import * as S from "./styles";

const Pokedex: React.FC = () => {
  const dispatch = useAppDispatch();
  const { error, result, query, isLoading } = useAppSelector(
    (state) => state.search
  );

  const onFormSubmit = async () => {
    try {
      dispatch({
        type: "@search/setLoading",
      });

      const { data } = await httpClient.get<PokemonResponse>(
        `/pokemon/${query}`
      );
      dispatch({
        type: "@search/setResult",
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: "@search/setError",
      });
    }
  };

  const showingContent = result ? (
    <SearchResult pokemon={result} />
  ) : isLoading ? (
    <Spinner />
  ) : error ? null : null;

  return (
    <S.Wrapper>
      <SearchForm onFormSubmit={onFormSubmit} />
      {showingContent}
    </S.Wrapper>
  );
};

export default Pokedex;
