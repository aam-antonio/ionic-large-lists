export class Group {
  id: number;
  title: string;
  subgroups: SubGroup[];
  show: boolean;
}

export class SubGroup {
  id: number;
  title: string;
  items: Item[];
  show: boolean;
}

export class Item {
  id: number;
  title: string;
}
