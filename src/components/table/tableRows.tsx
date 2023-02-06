
type TableRowsProps = {
  data: any;
  columns: any;
};

export default function TableRows({ data, columns }: TableRowsProps) {
  const rows = data.map((row: any, index: any) => {
    return (
      <tr key={index}>
        {columns?.map((column: any, index2: any) => {
          return <td key={index2}>{row[column.key]}</td>;
        })}
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
}
