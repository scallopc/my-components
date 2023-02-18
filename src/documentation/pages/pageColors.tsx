import Line from "../../components/line/line";
import colors from "../../styles/colors";
import {
  Box,
  Container,
  Content,
  H2,
} from "../styles";

export default function PageColors() {
  const setColors = () => {
    let colorsNames = Object.keys(colors);
    let colorsCategory = Object.values(colors);

    const divs = colorsNames?.map((item, index) => {
      let colorskeys = Object.keys(colors[item]);
      let colorsValues: any = Object.values(colors[item]);
      return (
        <div key={index}>
          <h3 style={{ marginBottom: "10px" }}>{item.toUpperCase()}</h3>
          {colorskeys?.map((c, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                padding: "10px 0",
                //background: i % 2 == 0 ? "#e5e3e3" : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontWeight: "500" }}>{c}</span>
                <input
                  type="color"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                  }}
                  value={colorsValues[i]}
                  readOnly
                />
              </div>
              <Line direction="horizontal" />
            </div>
          ))}
        </div>
      );
    });
    return divs;
  };

  return (
    <Container>
      <H2>Colors of System</H2>
      <Content>{setColors()}</Content>
      <Box></Box>
    </Container>
  );
}