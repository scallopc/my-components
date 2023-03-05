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

export default function Table({ data, column }) {
  return (
    <Container>
      <thead>
        <tr>
          {column.map((item, index) => (
            <TableHeader item={item} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRows item={item} column={column} />
        ))}
      </tbody>
    </Container>
  );
}
