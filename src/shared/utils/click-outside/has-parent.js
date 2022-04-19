/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import isInDOM from './is-in-dom';

export default function hasParent(element, root) {
  return root && root.contains(element) && isInDOM(element);
}
