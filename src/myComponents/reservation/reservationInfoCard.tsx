import { Button } from "@/components/ui/button";
import { ReservationStatus } from "@/interface/reservation";
import React from "react";

function ReservationInfoCard({ status }: { status: ReservationStatus }) {
  return (
    <div>
      <div className="bg-gray-100 p-4 flex justify-between items-center">
        <div>
          <p className="text-gray-600">M-3 Floor</p>
          <p className="text-gray-600">Guests: 2 Persons</p>
          <p className="text-gray-600">Time: 17:30</p>
        </div>
        <div>
          {status === ReservationStatus.CONFIRMED && (
            <Button variant="outline">Checked-In</Button>
          )}
        </div>
      </div>
      {status === ReservationStatus.PENDING && (
        <div className="flex">
          <div className="bg-yellow-100 text-yellow-800 px-4 py-2 text-right rounded-b-lg">
            Accept
          </div>
          <div className="bg-yellow-100 text-yellow-800 px-4 py-2 text-right rounded-b-lg">
            Reject
          </div>
        </div>
      )}
      {status === ReservationStatus.CANCELLED && (
        <div className="bg-red-100 text-red-800 px-4 py-2 text-right rounded-b-lg">
          Cancelled
        </div>
      )}
      <div className="bg-green-100 text-green-800 px-4 py-2 text-right rounded-b-lg">
        {status}
      </div>
    </div>
  );
}

export default ReservationInfoCard;
