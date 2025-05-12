import axios from "axios";

export const rentalCarApi = axios.create({
  baseURL: (axios.defaults.baseURL = "https://car-rental-api.goit.global"),
});
