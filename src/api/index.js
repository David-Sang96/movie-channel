import axios from "axios";

export const api_key = "6ccf93c480eecb3c971acb3da284a38b";

export const api = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});
