import { IBooking, IBookingMeta } from "@/interface/booking";
import { getAllBookings } from "@/lib/booking";
import MyTable from "@/myComponents/table/table";

const columns = [
  {
    accessor: "room_slug",
    header: "Room Slug",
  },
  {
    accessor: "date",
    header: "Booking Date",
  },
  {
    accessor: "check_in",
    header: "Check In",
  },
  {
    accessor: "check_out",
    header: "Check Out",
  },
  {
    accessor: "total_price",
    header: "Total Price",
  },
  {
    accessor: "status",
    header: "Status",
  },
  {
    accessor: "guests",
    header: "Guests",
  },
];

const BookingsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "5";

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  const { data: bookings }: IBookingMeta = await getAllBookings();
  const updatedBookings = bookings.slice(start, end).map((booking: any) => ({
    ...booking,
    guests: booking.guests.map((guest: any) => guest.name).join(", "),
  }));

  return (
    <div className="rounded-xl ">
      <MyTable data={updatedBookings} columns={columns} />
    </div>
  );
};

export default BookingsPage;
