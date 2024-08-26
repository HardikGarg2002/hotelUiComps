import { ITableMeta } from "@/interface/table";
import { getAllTables } from "@/lib/table";
import NavTabs from "@/myComponents/navbars/navTabs";
import MyTable from "@/myComponents/table/table";

const columns = [
  {
    accessor: "slug",
    header: "Slug",
  },
  {
    accessor: "restaurant_slug",
    header: "Managing Hotel",
  },
  {
    accessor: "capacity",
    header: "Capacity",
  },
  {
    accessor: "status",
    header: "Status",
  },
  {
    accessor: "floor",
    header: "Floor",
  },
];

const TablesPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["pageSize"] ?? "10";

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  const { data: tables, meta }: ITableMeta = await getAllTables();
  const updatedTables = tables.slice(start, end);
  const navTabs = ["All", "Available", "Booked", "Blocked", "Maintenance"];

  return (
    <>
      <NavTabs tabs={navTabs} defaultTab="All" className="w-[60%]" />
      <div className="rounded-xl ">
        <MyTable
          data={updatedTables}
          columns={columns}
          totalCount={meta.total}
        />
      </div>
    </>
  );
};
export default TablesPage;
