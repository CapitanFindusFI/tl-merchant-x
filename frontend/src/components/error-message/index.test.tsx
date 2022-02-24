import React from "react";
import { mount } from "@cypress/react";
import ErrorMessage from ".";
import i18next from "i18next";

i18next.init({ resources: {} });
i18next.addResourceBundle("en", "translation", {
  "test.stuff": "replace with {{lyrics}}",
});

describe("Error Message", () => {
  it("should render a missing translation message", () => {
    mount(<ErrorMessage label="rick.astley" />);

    cy.get("h4").should("have.text", "missing translation for rick.astley");
  });

  it("should render an existing translation replacing text", () => {
    mount(
      <ErrorMessage
        label="test.stuff"
        replace={{ lyrics: "never gonna give you up" }}
      />
    );

    cy.get("h4").should("have.text", "replace with never gonna give you up");
  });
});
