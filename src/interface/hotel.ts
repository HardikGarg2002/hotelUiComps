// import { ICustomer } from "./customer";

// This hotel will also work as restaurant. So, we can book a table in the hotel.
export interface IHotel {
  _id?: string;
  slug: string;
  title: string;
  desc: string;
  address: IAddress;
  contact_info: IContactInfo;
  website: string;
  associated_branches: IHotel["slug"][]; // slug
  images: string[];
  amenities: string[];
}

export interface IAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface IContactInfo {
  phone: string;
  email: string;
}

export interface Reservation {
  res_no: number;
  //   customer: ICustomer;
  // room: IRoom;
  checkInDate: Date;
  checkOutDate: Date;
}

export interface IHotelMeta {
  data: IHotel[];
  meta: {
    total: number;
  };
}
