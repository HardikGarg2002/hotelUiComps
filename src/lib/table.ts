const url = process.env.NEXT_PUBLIC_URL;
const apiURL = process.env.NEXT_PUBLIC_URL + "/table";

export const getAllTables = async () => {
  const response = await fetch(apiURL);
  const data = await response.json();
  return data;
};

export const getTableByHotel = async (hotelSlug: string) => {
  const response = await fetch(`${url}/hotel/${hotelSlug}/table`);
  const data = await response.json();
  return data;
};
export const getTable = async (id: string) => {
  const response = await fetch(`${apiURL}/${id}`);
  const data = await response.json();
  return data;
};
