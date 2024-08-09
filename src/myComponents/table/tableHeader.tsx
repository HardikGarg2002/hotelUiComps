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
    <TableRow className="rounded-ss-md bg-muted/75">
      {columns.map((column: any, idx: number) => (
        <TableHead key={idx}>{column.header}</TableHead>
      ))}
    </TableRow>
  </TableHeader>
);
