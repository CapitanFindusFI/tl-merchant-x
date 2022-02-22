import React from "react";
import "./i18n";
import PageTitle from "./components/page-title";
import SearchForm from "./components/search-form";
import BoxedContainer from "./layout/boxed-container";
import FullwidthContainer from "./layout/fullwidth-container";

const App = () => {
  const onFormSubmit = (value: string) => {
    console.log(`Value set: ${value}`);
  };

  return (
    <FullwidthContainer>
      <BoxedContainer>
        <PageTitle>Pokedex</PageTitle>
        <SearchForm onSubmit={onFormSubmit} />
      </BoxedContainer>
    </FullwidthContainer>
  );
};

export default App;
