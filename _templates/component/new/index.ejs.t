---
to: src/components/<%= h.path.dirname(name) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>/index.ts
unless_exists: true
---
import loadable from '@loadable/component';

export default loadable(() => {
  return import('./<%= h.changeCase.pascal(h.path.basename(name)) %>');
});