import React, { useState } from "react";
import PaginationNumber from "../../components/paginationNumber/paginationNumber";
import PaginationText from "../../components/paginationText/paginationText";
import {
  Box,
  Container,
  Content,
  Detail,
  DocumentationContainer,
  H2,
  H5,
} from "../styles";

export default function PagePagination() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [page, setPage] = useState(1);
  const totalPages = 15;
  const handlePages = (updatePage: number) => setPage(updatePage);

  return (
    <Container>
      <H2>Pagination</H2>

      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <p>
            Pagination has two modes; "PaginationText" and "PaginationNumber".
          </p>
          <Content>
            <h3>Pagination Text</h3>
            <Detail><code>
              &lt;PaginationText currentPage={currentPage} totalItems={100}{" "}
              page={10} /&gt;
            </code></Detail>
            <PaginationText
              currentPage={currentPage}
              totalItems={100}
              page={10}
              handlePagination={handlePageChange}
            />
          </Content>

          <Content>
            <h3>Pagination Number</h3>
            <Detail><code>
              &lt;PaginationNumber page={page} totalPages={totalPages} /&gt;
            </code></Detail>
            <PaginationNumber
              page={page}
              totalPages={totalPages}
              handlePagination={handlePages}
            />
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
