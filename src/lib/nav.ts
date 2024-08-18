import {
  IconArrowLeft,
  IconBedFilled,
  IconBrandTabler,
  IconBuildings,
  IconBuildingSkyscraper,
  IconDesk,
  IconToolsKitchen2,
  IconUserBolt,
} from "@tabler/icons-react";
import { BiFoodMenu } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosRestaurant } from "react-icons/io";

export const getNavItems = () => {
  return [
    {
      label: "hello",
      href: "/hello",
      icon: IconBrandTabler,
    },
    {
      label: "Dashboard",
      href: "/",
      icon: IconBrandTabler,
    },
    {
      label: "Profile",
      href: "#",
      icon: IconUserBolt,
    },
    {
      label: "All Hotels",
      href: "/hotels",
      icon: IconBuildings,
    },
    {
      label: "Hotel",
      href: "#",
      icon: IconBuildingSkyscraper,
    },
    {
      label: "Rooms",
      href: "/room",
      icon: IconBedFilled,
    },
    {
      label: "Bookings",
      href: "/booking",
      icon: FaRegCalendarAlt,
    },
    {
      label: "All Restautants",
      href: "/restaurant",
      icon: IoIosRestaurant,
    },
    {
      label: "Restautant",
      href: "#",
      icon: IconToolsKitchen2,
    },
    {
      label: "Floor and Tables",
      href: "#",
      icon: IconDesk,
    },
    {
      label: "Menu",
      href: "#",
      icon: BiFoodMenu,
    },
    {
      label: "Reservations",
      href: "/reservation",
      icon: FaRegCalendarAlt,
    },
    {
      label: "Kitchen Order Tickets",
      href: "#",
      icon: FaRegCalendarAlt,
    },
  ];
};
