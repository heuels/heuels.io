export interface ITimeline {
  id: string;
  name: string;
  shortName: string;
  groups: IGroup[];
}

export interface IGroup {
  name: string;
  date?: string;
  color: string;
  events: IEvent[];
  images: {
    icon: ImageSet | null;
    logo: ImageSet | null;
  };
}

export interface IEvent {
  name: string | null;
  text: string | null;
  date?: string;
}

export type ImageSet = {
  dark: string | null;
  light: string | null;
};
