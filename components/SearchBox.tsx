import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import styled from "styled-components";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { Action } from "../pages";

type Props = {
  dispatch: React.Dispatch<Action>;
};

export default function SearchBox(props: Props) {
  const { dispatch } = props;
  const handleSort = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "sortBy", value: evt.target.value });
  };
  const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "search", value: evt.currentTarget.value });
  };
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setDrawer(!drawer);
  };

  return (
    <Wrapper>
      <Container
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "center" },
          p: 1,
          justifyContent: { xs: "flex-start", md: "space-between" },
          flexWrap: "wrap",
        }}
      >
        <FlexLeft
          sx={{
            gap: { xs: "0.5rem", md: "1rem" },
          }}
        >
          <Label htmlFor="sort-by">Sort by:</Label>
          <Select id="sort-by" onChange={handleSort}>
            <Option value={"emisNumber"}>EMIS</Option>
            <Option value={"schoolName"}>Name</Option>
            <Option value={"schoolType"}>Type</Option>
            <Option value={"county"}>County</Option>
          </Select>
        </FlexLeft>
        <FlexRight
          sx={{
            justifyContent: { md: "flex-end" },
            gap: { xs: "0.5rem", md: "1rem" },
          }}
        >
          <Input
            onChange={handleSearch}
            placeholder={"search by school name"}
          />
          <MuiButton onClick={(event) => toggleDrawer(event)}>
            search with filters
          </MuiButton>
        </FlexRight>
      </Container>
      <SwipeableDrawer
        anchor={"right"}
        open={drawer}
        onClose={() => setDrawer(false)}
        onOpen={() => setDrawer(true)}
      >
        <Box
          sx={{ width: { xs: 250, lg: 500 } }}
          role="presentation"
          onClick={(event) => toggleDrawer(event)}
          onKeyDown={(event) => toggleDrawer(event)}
        >
          <List></List>

          <List></List>
        </Box>
      </SwipeableDrawer>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  width: 100%;
`;

const Container = styled(Box)`
  display: flex;
  box-shadow: 5px 10px 18px #888888;
  min-height: 8rem;
`;

const FlexLeft = styled(Box)`
  margin: 0;
  padding: 0;
  display: flex;
  margin-bottom: 1rem;
`;

const FlexRight = styled(Box)`
  margin: 0;
  padding: 0;
  display: flex;
`;

const MuiButton = styled(Button)`
  text-transform: lowercase;
  display: flex;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
    background: none;
  }
`;

const Label = styled("label")<{
  htmlFor: string;
}>`
  font-size: 1rem;
  margin: 0;
  padding: 0;
`;

const Select = styled("select")<{
  onChange: React.ChangeEventHandler;
}>`
  border: 0;
  outline: 0;
`;
const Option = styled("option")``;