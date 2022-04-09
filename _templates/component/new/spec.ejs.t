---
to: src/components/<%= h.path.dirname(name) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>.spec.tsx
unless_exists: true
---

import React from "react";

import { render } from "@testing-library/react";

import <%= h.changeCase.pascal(h.path.basename(name)) %> from "./<%= h.changeCase.pascal(h.path.basename(name)) %>";

describe("<%= h.changeCase.title(h.path.basename(name)) %> Component", () => {

  it("should render properly", () => {
    const { container } = render(
      <<%= h.changeCase.pascal(h.path.basename(name)) %> />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});