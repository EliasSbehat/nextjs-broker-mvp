import { Box, GridItem } from "@chakra-ui/react";
import NavyBox from "../content/NavyBox";
import GridWrapper from "../form/shared/GridWrapper";
const HeaderWrap = (props) => {
  return (
    <Box
      bg={props.bg ? props.bg : "secondary.50"}
      borderBottom="1px solid"
      borderColor="grey.100"
    >
      <GridWrapper>
        <GridItem
          colSpan={[6, 6, 8]}
          colStart={["col-start", "col-start", 3]}
          pt={[8, 8, 24]}
          pb={[12, 12, 24]}
          {...props}
        >
          <NavyBox.Large>{props.children} </NavyBox.Large>
        </GridItem>
      </GridWrapper>
    </Box>
  );
};
export default HeaderWrap;
