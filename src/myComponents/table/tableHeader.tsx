import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const MyTableHeader = ({ columns }: any) => (
  <TableHeader>
    <TableRow>
      {columns.map((column: any, idx: number) => (
        <TableHead key={idx}>
          <TableCell>{column.header}</TableCell>
        </TableHead>
      ))}
    </TableRow>
  </TableHeader>
);
