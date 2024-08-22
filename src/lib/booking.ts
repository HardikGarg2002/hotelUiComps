import { IBooking } from "@/interface/booking";

const apiURL: string = process.env.NEXT_PUBLIC_URL + "/booking";

export const getAllBookings = async () => {
  const response = await fetch(apiURL);
  const data = await response.json();
  return data;
};

export const getBooking = async (id: string) => {
  const response = await fetch(`${apiURL}/${id}`);
  const data = await response.json();
  return data;
};

export const createBooking = async (booking: IBooking) => {
  const response = await fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(booking),
  });
  const data = await response.json();
  return data;
};

export const updateBooking = async (id: string, booking: IBooking) => {
  const response = await fetch(`${apiURL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(booking),
  });
  const data = await response.json();
  return data;
};
