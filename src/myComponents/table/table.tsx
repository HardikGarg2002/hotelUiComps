import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { MyPagination } from "./pagination";
import { MyTableHeader } from "./tableHeader";

export default function MyTable({ data, columns, totalCount }: any) {
  return (
    <>
      <div className="rounded-xl border my-3">
        <Table>
          <MyTableHeader columns={columns} />
          <TableBody>
            {data.length ? (
              data.map((row: any) => (
                <TableRow key={row.slug}>
                  {columns.map((column: any) => (
                    <TableCell key={column.accessor}>
                      {row[column.accessor]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <MyPagination totalCount={totalCount} />
    </>
  );
}
