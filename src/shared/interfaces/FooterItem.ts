export interface FooterListItem {
  headline: string;
  children: FooterListChildren[];
}

export interface FooterListChildren {
  link: string;
  name: string;
}
