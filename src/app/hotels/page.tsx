import { getAllHotels } from "@/lib/hotels";
import MyTable from "@/myComponents/table/table";
import { access } from "fs";

const columns = [
  {
    accessor: "slug",
    header: "Slug",
  },
  {
    accessor: "title",
    header: "Title",
  },
  {
    accessor: "desc",
    header: "Description",
  },
  {
    accessor: "address",
    header: "Address",
  },
];

const HotelsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "5";

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  const hotels = await getAllHotels();
  const updatedHotels = hotels.slice(start, end).map((hotel: any) => ({
    ...hotel,
    address: hotel.address.street,
  }));

  return (
    <div className="rounded-xl ">
      <MyTable data={updatedHotels} columns={columns} />
    </div>
  );
};
export default HotelsPage;
