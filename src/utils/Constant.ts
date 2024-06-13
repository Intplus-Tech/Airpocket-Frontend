import { FLIGHT_TYPES } from "@/types/typs";
import Mimi from "@/pages/Home/assets/Mimi.jpeg";
import Paul from "@/pages/Home/assets/Paul.jpeg";
import Samuel from "@/pages/Home/assets/Samuel.jpeg";
import Chidi from "@/pages/Home/assets/Chidi.jpeg";
import Gulf from "@/components/Table/assets/logo.svg";

export const LIMIT_FIVE = 5;

export const FLIGHT_TYPE: FLIGHT_TYPES = {
  LOCAL: {
    rate: 5,
  },
  INTERENATIONAL: {
    rate: 10,
  },
};

export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  event.currentTarget.src = Gulf;
};

export const TESTIMONIALS = [
  {
    id: "1",
    text: "Airpockets they are your best traveling agent you can ever use right now. Afican founded, African owned one of the bes support us. ",
    img: Chidi,
    name: "Chidi",
    country: "Nigeria",
  },
  {
    id: "2",
    text: "For the best and luxurious hotel reservations, you can ever ask for reach out to Airpockts for your bookings. Their services are 24/7 round the clock super active on whatsApp",
    img: Mimi,
    name: "Mimi",
    country: "Nigeria",
  },
  {
    id: "3",
    text: "For your best traveling experience, honeymooon, church historical traveling they are the best, give them a call today and save cost, reach out to Airpockets",
    img: Samuel,
    name: "Samuel",
    country: "Nigeria",
  },
  {
    id: "4",
    text: "The convenience and constant support is impressive. ",
    img: Paul,
    name: "Paul",
    country: "Nigeria",
  },
];
