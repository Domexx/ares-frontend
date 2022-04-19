/* eslint-disable @typescript-eslint/no-unsafe-call */
export default function isInDom(obj) {
  return Boolean(obj.closest('body'));
}
