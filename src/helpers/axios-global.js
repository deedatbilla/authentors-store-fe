import axios from "axios";

const $API_HOST = "https://backend-authentors.herokuapp.com/api/v1";

export const $AuthHeader = {
  Accept: "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export const AxiosHost = axios.create({
  baseURL: $API_HOST,
  headers: $AuthHeader,
});
export const AxiosHostNoHeaders = axios.create({
  baseURL: $API_HOST,
});
