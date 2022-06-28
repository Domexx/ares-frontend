export interface StaffGridItem {
  title: string;
  members: Member[];
}

export interface Member {
  look: string;
  motto: string;
  name: string;
  online: boolean;
  rank: string;
}
