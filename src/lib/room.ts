const apiURL = "http://localhost:6005/api/room";
const url = "http://localhost:6005/api";

export const getAllRooms = async () => {
  const response = await fetch(apiURL);
  const data = await response.json();
  return data;
};

export const getRoomByHotel = async (hotelSlug: string) => {
  const response = await fetch(`${url}/hotel/${hotelSlug}/room`);
  const data = await response.json();
  return data;
};
export const getRoom = async (id: string) => {
  const response = await fetch(`${apiURL}/${id}`);
  const data = await response.json();
  return data;
};