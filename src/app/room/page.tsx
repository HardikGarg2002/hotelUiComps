import { IRoomMeta, RoomStatus } from "@/interface/room";
import { getAllRooms } from "@/lib/room";
import NavTabs from "@/myComponents/navbars/navTabs";
import MyTable from "@/myComponents/table/table";

const columns = [
  {
    accessor: "slug",
    header: "Slug",
  },
  {
    accessor: "hotel_slug",
    header: "Managing Hotel",
  },
  {
    accessor: "room_type",
    header: "Room Type",
  },
  {
    accessor: "status",
    header: "Status",
  },
  {
    accessor: "price",
    header: "Price",
  },
  {
    accessor: "amenities",
    header: "Amenities",
  },
  //   {
  //     accessor: "images",
  //     header: "Images",
  //   },
];

const RoomsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["pageSize"] ?? "10";

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...
  const filters = {
    status: {
      eq: searchParams["status"]?.toString().toUpperCase(),
    },
  };
  const { data: rooms, meta }: IRoomMeta = await getAllRooms(filters);

  const updatedRooms = rooms.slice(start, end);
  const defaultTab = "All";
  const navTabs = [defaultTab, ...Object.keys(RoomStatus)];

  return (
    <>
      <NavTabs tabs={navTabs} defaultTab={defaultTab} className="w-[70%]" />
      <div className="rounded-xl ">
        <MyTable
          data={updatedRooms}
          columns={columns}
          totalCount={meta.total}
        />
      </div>
    </>
  );
};
export default RoomsPage;
