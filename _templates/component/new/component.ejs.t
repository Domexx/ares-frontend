---
to: src/components/<%= h.path.dirname(name) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>.tsx
unless_exists: true
sh: yarn prettier --write "src/components/<%= h.path.dirname(name) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>/*"
---
import React from 'react';
import s from "./<%= h.changeCase.pascal(h.path.basename(name)) %>.module.css";

export type Props = {};

const <%= h.changeCase.pascal(h.path.basename(name)) %>: React.FC<Props> = () => {
  return (
        <div className={s["<%= h.changeCase.paramCase(h.path.basename(name)) %>"]}>
            <%= h.changeCase.pascal(h.path.basename(name)) %> Works!
        </div>
  );
};

export default <%= h.changeCase.pascal(h.path.basename(name)) %>;