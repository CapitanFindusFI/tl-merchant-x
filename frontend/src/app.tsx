import React from "react";
import "./i18n";
import PageTitle from "./components/page-title";
import SearchForm from "./components/search-form";
import BoxedContainer from "./layout/boxed-container";
import FullwidthContainer from "./layout/fullwidth-container";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import httpClient from "./lib/api";

const App = () => {
  const dispatch = useAppDispatch();
  const { error, result, query, isLoading } = useAppSelector(
    (state) => state.search
  );

  const setLoading = (loading: boolean) =>
    dispatch({
      type: "@search/setLoading",
      payload: loading,
    });

  const onFormSubmit = async () => {
    console.log(`Value set: ${query}`);
    try {
      setLoading(true);

      const { data } = await httpClient.get<any>(`/pokemon/${query}`);
      console.log(data);
    } catch (e) {
      dispatch({
        type: "@search/setError",
        payload: e,
      });
    }
  };

  return (
    <FullwidthContainer>
      <BoxedContainer>
        <PageTitle>Pokedex</PageTitle>
        <SearchForm onFormSubmit={onFormSubmit} />
      </BoxedContainer>
    </FullwidthContainer>
  );
};

export default App;
