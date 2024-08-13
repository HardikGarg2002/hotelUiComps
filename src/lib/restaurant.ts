import { IRestaurant } from "@/interface/restaurant";
const apiURL = "http://localhost:6005/api/restaurant";

export const getAllRestaurants = async (): Promise<IRestaurant[]> => {
  const response = await fetch(apiURL);
  const data = await response.json();
  return data;
};

export const getRestaurant = async (id: string): Promise<IRestaurant> => {
  const response = await fetch(`${apiURL}/${id}`);
  const data = await response.json();
  return data;
};
