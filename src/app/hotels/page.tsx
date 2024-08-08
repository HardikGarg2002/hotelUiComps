import { getAllHotels } from "@/lib/hotels";
import MyTable from "@/myComponents/table/table";
import { access } from "fs";

const columns = [
  {
    accessor: "title",
    header: "Title",
  },
  {
    accessor: "desc",
    header: "Description",
  },
];

const HotelsPage = async () => {
  const hotels = await getAllHotels();
  return (
    <div>
      <MyTable data={hotels} columns={columns} />
    </div>
  );
};
export default HotelsPage;
