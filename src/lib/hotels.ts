const apiURL = process.env.NEXT_PUBLIC_URL + "/hotel";

export const getAllHotels = async () => {
  const response = await fetch(apiURL);
  const data = await response.json();
  return data;
};
export const getHotel = async (id: string) => {
  const response = await fetch(`${apiURL}/${id}`);
  const data = await response.json();
  return data;
};
