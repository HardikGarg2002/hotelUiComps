import React from "react";
import CustomerInfoCard from "./customerInfoCard";
import ReservationInfoCard from "./reservationInfoCard";
import { ReservationStatus } from "@/interface/reservation";

function ReservationCard() {
  return (
    <div className="flex mx-auto bg-white shadow-lg rounded-lg  ">
      <CustomerInfoCard />
      <ReservationInfoCard status={ReservationStatus.PENDING} />
    </div>
  );
}

export default ReservationCard;
