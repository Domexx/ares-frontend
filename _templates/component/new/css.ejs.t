---
to: src/components/<%= h.path.dirname(name) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>.module.css
unless_exists: true
---
/* === === === === <%=name%> === === === === */

.<%= h.changeCase.pascal(h.path.basename(name)) %> {
    margin-top: 0;
}