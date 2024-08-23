import { IRestaurant } from "@/interface/restaurant";
import { getAllRestaurants } from "@/lib/restaurant";
import MyTable from "@/myComponents/table/table";

const columns = [
  {
    accessor: "slug",
    header: "Slug",
  },
  {
    accessor: "hotel_slug",
    header: "Hotel Slug",
  },
  {
    accessor: "title",
    header: "Title",
  },
  {
    accessor: "restaurant_type",
    header: "Restaurant Type",
  },
  {
    accessor: "contact_info",
    header: "Contact Info",
  },
  {
    accessor: "menu",
    header: "Menu",
  },
  {
    accessor: "opening_hours",
    header: "Opening Hours",
  },
  {
    accessor: "floors",
    header: "Floors",
  },
];

const RestaurantsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "5";

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  const { data: restaurants } = await getAllRestaurants();
  const updatedRestaurants = restaurants
    ?.slice(start, end)
    .map((restaurant: IRestaurant) => ({
      ...restaurant,
      contact_info: restaurant.contact_info.phone,
      menu: restaurant.menu?.map((item) => item.title).join(", "),
      floors: restaurant.floors?.length,
    }));

  return (
    <div className="rounded-xl ">
      <MyTable data={updatedRestaurants} columns={columns} />
    </div>
  );
};

export default RestaurantsPage;
