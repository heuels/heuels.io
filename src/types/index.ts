export interface ITimeline {
  id: string;
  name: string;
  shortName: string;
  groups: IGroup[];
}

export interface IGroup {
  name: string;
  link: string | null;
  color: string | ColorSet;
  dates?: [string] | [string, string];
  events: IEvent[];
  images: {
    icon: ImageSet | null;
    logo: ImageSet | null;
  };
}

export interface IEvent {
  name: string | null;
  text: string | null;
  dates?: [string] | [string, string];
}

export type ColorSet = {
  dark: string;
  light: string;
};

export type ImageSet = {
  dark: string | null;
  light: string | null;
};
