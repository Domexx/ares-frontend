import React from "react";

import { render } from "@testing-library/react";

import Header from "./Header";

describe("Header Component", () => {

  it("should render properly", () => {
    const { container } = render(
      <Header text="Test Text" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});