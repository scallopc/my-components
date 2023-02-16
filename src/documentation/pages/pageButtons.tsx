
import Button from "../../components/button/button";
import Line from "../../components/line/line";
import {
  Box,
  Components,
  Container,
  Content,
  Detail,
  DocumentationContainer,
  H2,
  H5,
  SmallDetail,
  Table,
  TableRow,
} from "../styles";

export default function PageButtons() {
  const primary = '<Button variant="primary" size="small" label="button name" />'
  const outline = '<Button variant="outline" size="medium" label="button name" />'
  const text = '<Button variant="text" size="large" />'
  const textIcon = '<Button variant="text" size="small" label="button name" icon="fa-regular fa-plus" />'
  const disabled = '<Button variant="primary" size="small" label="button name" disabled />'


  return (
    <Container>
      <H2>Botões</H2>
      {/* <Box>
        <h3>Com ícones / sem ícones</h3>
        <Components>
          <div>
            <Content>
              <Button variant="primary" size="small" label="Pequeno" />
              <Button variant="primary" size="medium" label="Médio" />
              <Button variant="primary" size="medium" label="Grande" />
            </Content>
          </div>
          <div>
            <Content>
              <Button variant="outline" size="small" label="Pequeno" />
              <Button variant="outline" size="medium" label="Médio" />
              <Button variant="outline" size="medium" label="Grande" />
            </Content>
          </div>
          <div>
            <Content>
              <Button
                variant="primary"
                size="small"
                label="Desabilitado"
                disabled
              />
              <Button
                variant="text"
                size="small"
                label="Pequeno"
                icon="fa-regular fa-plus"
              />
            </Content>
          </div>
          <div>
            <Content>
              <Button
                variant="primary"
                size="small"
                label="Pequeno"
                icon="fa-regular fa-circle-notch"
              />
              <Button
                variant="text"
                size="small"
                label="Pequeno"
                icon="fa-regular fa-check"
              />
            </Content>
          </div>
        </Components>
      </Box> */}

      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          {/* <p>Templates</p>
          <SmallDetail>
            Pagination has two modes; "Label", "Icon" and "Image".
          </SmallDetail>
          <Content>
            <Components>
              <Detail>
              {primary}
              </Detail>
            </Components>
            <Components>
              <Detail>
              {outline}
              </Detail>
            </Components>
            <Components>
              <Detail>
              {text}
              </Detail>
            </Components>
          </Content>
          <br />

          <p>Button icon</p>
          <SmallDetail>
            To display only an icon, leave children as undefined. The library
            used for icons is"FontAwesomeIcon"
          </SmallDetail>
          <Content>
            <Components>
              <Detail>
                {textIcon}
              </Detail>
            </Components>
          </Content>
          <br />

          <p>Button disabled</p>
          <SmallDetail>To set the button as disabled</SmallDetail>
          <Content>
            <Components>
              <Detail>
                {disabled}
              </Detail>
            </Components>
          </Content> */}
          <SmallDetail>O que é o component</SmallDetail>
          <Content>
            <h3>Basic primary</h3>
            <SmallDetail>
              It is with the label property, showing only the user's initials.
            </SmallDetail>
            <SmallDetail><code>{primary}</code></SmallDetail>
            <div className="flex align-items-center gap-3">
              <Button outline small label="Pequeno" />
              {/* <Button variant="primary" size="medium" label="Médio" />
              <Button variant="primary" size="medium" label="Grande" /> */}
            </div>
          </Content>

          <Content>
            <h3>Basic outline</h3>
            <SmallDetail>
            Outline buttons display a border without a background initially.
            </SmallDetail>
            <SmallDetail><code>{primary}</code></SmallDetail>
            <div className="flex align-items-center gap-3">
           <Button outline size="small" label="Pequeno" />
              <Button outline size="medium" label="Médio" />
              <Button outline size="medium" label="Grande" /> 
            </div>
          </Content>

          <br />
          <p>Properties </p>
          <SmallDetail>
            We use some attributes to compose the component
          </SmallDetail>
          <Content>
            <Table>
              <TableRow>
                <b>Name</b>
                <b>Type</b>
                <b>Description</b>
              </TableRow>
              <Line direction="horizontal" />
              <TableRow>
                <div>variant</div>
                <div>string</div>
                <div>
                  Defines the button type, valid options are "primary",
                  "outline" and "text"
                </div>
              </TableRow>
              <Line direction="horizontal" />
              <TableRow>
                <div>disabled</div>
                <div>boolean</div>
                <div>
                  Defines if the button is disabled, valid options are "true" or
                  "false"
                </div>
              </TableRow>
              <Line direction="horizontal" />
              <TableRow>
                <div>size</div>
                <div>string</div>
                <div>
                  Size of the element, valid options are "small", "medium" and
                  "large"
                </div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
