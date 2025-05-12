import axios from "axios";

export const rentalCarApi = axios.create({
  baseURL: "https://car-rental-api.goit.global",
});
