/**
 * Tests if the passed string is linking to an external site or if it
 * links to the current domain.
 *
 * This is used in the menu links to open external links in a new tab
 * and add the proper security attributes.
 */
export const isExternalLink = (urlString: string) => {
  try {
    const url = new URL(urlString);

    if (url.origin !== new URL(document.URL, document.baseURI).origin) {
      return true;
    }
  } catch (e) {
    // We don't care about the error
  }

  return false;
};
