export type PassengersProps = {
  id: string;
  text: string;
  value?: string;
}[];

export type AvailableFlightProps = {
  [x: string]: any;
  // id: string;
  // airline: string;
  // departureTime: string;
  // arrivalTime: string;
  // departure: string;
  // destination: string;
  // estimatedTime: string;
  // desc: string;
  // price: string;
}[];

export type SearchResult = {
  message: string;
  data: { [x: string]: any }[];
  meta: { [x: string]: any }[];
  // Add other properties as needed
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

interface UserDetial {
  _id: string;
  firstname: string;
  lastname: string;
  gender: string;
  country: string;
  createdAt: string; // Date string
  email: string;
  phone: string;
  role: string;
  verified: boolean;
  // Add other fields if needed
}

interface LoginResponse {
  status: string;
  message: string;
  access_token: string;
  data: {
    user: UserDetial;
    generalToken: string;
    generalTokenExpiration: string; // Date string
    lastLogin: string; // Date string
  };
}

export type UserDetail = {
  _id: string;
  firstname: string;
  lastname: string;
  gender: "male" | "female" | "other"; // Assuming gender can be one of these values
  country: string;
  email: string;
  password: string;
  verified: boolean;
  role: "USER" | "ADMIN"; // Assuming role can be one of these values
  phone: string;
  generalToken: string;
  generalTokenExpiration: string | null; // Assuming it's a string in ISO 8601 format or null
  createdAt: string; // Assuming it's a string in ISO 8601 format
  __v: number;
  lastLogin: string; // Assuming it's a string in ISO 8601 format
};
