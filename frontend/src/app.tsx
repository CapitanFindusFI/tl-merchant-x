import React from "react";
import "./i18n";
import BoxedContainer from "./layout/boxed-container";
import FullwidthContainer from "./layout/fullwidth-container";
import Pokedex from "./components/pokedex";

const App = () => {
  return (
    <FullwidthContainer>
      <BoxedContainer>
        <Pokedex />
      </BoxedContainer>
    </FullwidthContainer>
  );
};

export default App;
