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

const HotelsPage = async () => {
  const hotels = await getAllHotels();
  const updatedHotels = hotels.map((hotel: any) => ({
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
