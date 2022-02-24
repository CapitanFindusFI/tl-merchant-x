import React from "react";
import { mount } from "@cypress/react";
import SearchResult from ".";
import { PokemonResponse } from "../../types";

describe("search result test suite", () => {
  const testPokemon: PokemonResponse = {
    name: "charizard",
    description: "very nice pokemon wow",
    sprite: "https://placecage.com/300/300",
  };

  it("should render a pokemon result", () => {
    mount(<SearchResult pokemon={testPokemon} />);

    const $h2 = cy.get("h2");
    $h2.should("have.text", "charizard");

    const $img = cy.get("img");
    $img.should("have.attr", "src", "https://placecage.com/300/300");

    const $p = cy.get("p");
    $p.should("have.text", "very nice pokemon wow");
  });
});
