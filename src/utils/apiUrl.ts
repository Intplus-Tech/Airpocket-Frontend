export const SERVER_URL =
  import.meta.env.NODE_ENV === "production"
    ? import.meta.env.VITE_API_BASE_URL
    : import.meta.env.VITE_API_BASE_URL_DEV;

export const CLOUDINARY =
  "https://res.cloudinary.com/dtsfzkvwb/image/upload/v1718114177/Airlines";
