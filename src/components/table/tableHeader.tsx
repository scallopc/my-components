
type TableHeaderProps = {
  columns: any;
};

export default function TableHeader({ item }) {
  return (
    <th>{item.heading}</th>
  );
}
