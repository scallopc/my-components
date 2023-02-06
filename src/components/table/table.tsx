import { Container, Image } from "./styles";
import TableHeader from "./tableHeader";
import TableRows from "./tableRows";

type TableProps = {
  headers?: any;
  items?: any[];
  customRenderers?: any;
  handleClick?: (id: string | undefined) => void;
  data?: any;
  columns?: any;
  field?: any;
  image?: any;
};

export default function Table({
  items,
  handleClick,
  customRenderers,
  data,
  columns,
  field,
  image,
}: TableProps) {

  const headers = columns?.map((col: any, i: any) => {
    return <th key={i}>{col.header}</th>;
  });

  const rows = columns?.map((col: any, i: any) => {
    if (customRenderers) {
      <td>
        <Image src={col.image} />
      </td>;
    }
    return <td key={i}>{col.field}</td>;
  });

  return (
    <Container>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>
        <tr>{rows}</tr>
      </tbody>
    </Container>
  );
}
