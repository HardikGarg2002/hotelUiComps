import { IRestaurant } from "@/interface/restaurant";

const apiURL: string = process.env.NEXT_PUBLIC_URL + "/restaurant";

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
