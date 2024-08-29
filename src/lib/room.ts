const url = process.env.NEXT_PUBLIC_URL;
const apiURL = process.env.NEXT_PUBLIC_URL + "/room";

export const getAllRooms = async (filters: any) => {
  const urlFilters = toQueryString(filters);
  const response = await fetch(apiURL + `?filters${urlFilters}`);
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

function toQueryString(obj: any, prefix = ""): any {
  const queryString = Object.keys(obj)
    .map((key) => {
      const value = obj[key];
      const prefixedKey = prefix ? `[${prefix}][${key}]` : key;

      if (typeof value === "object" && value !== null) {
        return toQueryString(value, prefixedKey);
      } else {
        return `${encodeURIComponent(prefixedKey)}=${encodeURIComponent(
          value
        )}`;
      }
    })
    .join("&");

  return queryString;
}

const input = { status: { eq: "AVAILABLE" } };
const result = toQueryString(input);

console.log(result); // Output: [status][eq]=AVAILABLE
