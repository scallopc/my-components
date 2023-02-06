
type TableHeaderProps = {
  columns: any;
};

export default function TableHeader({ columns }: TableHeaderProps) {

  const headers = columns?.map((column: any, index: any) => {
    return <th key={index}>{column.header}</th>;
  });

  return (
    <thead>
      <tr>{headers}</tr>
    </thead>
  );
}
