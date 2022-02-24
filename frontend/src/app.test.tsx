import React from "react";
import { mount } from "@cypress/react";
import App from "./app";
import { PokemonResponse } from "./types";
import { faListNumeric } from "@fortawesome/free-solid-svg-icons";

describe("app test suite", () => {
  const testPokemon: PokemonResponse = {
    name: "charizard",
    description: "very nice pokemon wow",
    sprite: "https://placecage.com/300/300",
  };

  it("should actually work", () => {
    cy.intercept(
      {
        method: "GET",
        url: "/pokemon/*",
      },
      testPokemon
    ).as("getPokemon");

    const store = cy.window().its("store");

    mount(<App />);

    const $form = cy.get("form");
    const $input = $form.get("input[type='text']");
    const $submit = $form.get("button[type='button']");

    $submit.should("have.prop", "disabled", true);
    $submit.should("have.prop", "aria-disabled", true);

    $input.type("charizard");

    store.invoke("getState").should("deep.equal", {
      isLoading: false,
      error: false,
      query: "charizard",
      result: null,
    });

    $submit.should("have.prop", "disabled", false);
    $submit.should("have.prop", "aria-disabled", false);

    $form.submit();

    store.invoke("getState").should("have.property", "isLoading", true);

    cy.wait("@getPokemon");

    store.invoke("getState").should("deep.equal", {
      isLoading: false,
      error: false,
      query: "charizard",
      result: testPokemon,
    });

    const $result = cy.get("#search-result");
    
  });
});
