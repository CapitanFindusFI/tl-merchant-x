import { PokemonResponse } from "../../src/types";

describe("app test suite", () => {
    const testPokemon: PokemonResponse = {
        name: "charizard",
        description: "very nice pokemon wow",
        sprite: "https://www.placecage.com/300/300",
    };

    it("should actually work and display a pokemon", () => {
        cy.visit("/")
        cy.intercept(
            {
                method: "GET",
                url: "/pokemon/*",
            },
            {
                body: testPokemon,
                delay: 2000
            }
        ).as("getPokemon");

        cy.get("form").then(() => {
            cy.get("button[type='submit']").should("be.disabled")
            cy.get("input[type='text']").should("not.be.disabled")
            cy.get("input[type='text']").focus().type("charizard").blur();

            cy.window().its("store").invoke("getState").should("deep.equal", {
                search: {
                    isLoading: false,
                    error: false,
                    query: "charizard",
                    result: null,
                }
            });

            cy.get("form").submit();

            cy.window().its("store").invoke("getState").should("deep.equal", {
                search: {
                    isLoading: true,
                    error: false,
                    query: "charizard",
                    result: null,
                }
            });

            cy.wait("@getPokemon");

            cy.window().its("store").invoke("getState").should("deep.equal", {
                search: {
                    isLoading: false,
                    error: false,
                    query: "charizard",
                    result: testPokemon,
                }
            });
        })
    });
});
