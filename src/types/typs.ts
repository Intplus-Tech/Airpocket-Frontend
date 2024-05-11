export type PassengersProps = {
  id: string;
  text: string;
  value?: string;
}[];

export type SearchResult = {
  message: string;
  data: { [x: string]: any }[];
  meta: { [x: string]: any }[];
  // Add other properties as needed
} | null;

export type SingleSearchResult = {
  data: { [x: string]: any };
} | null;

export type TestimonialsType = {
  id: string;
  text: string;
  img: any;
  name: string;
  country: string;
}[];

export type User = {
  [x: string]: any;
};

export type Generic = {
  [x: string]: any;
};

export interface countryList {
  value: string;
  label: string;
}
[];

export type UserDetail = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  verified: boolean;
};
