import React from "react";
import {
  Flex,
  Heading,
  Box,
  Text,
  Button,
  Container,
  GridItem,
} from "@chakra-ui/react";
import GridWrapper from "../form/shared/GridWrapper";
import { BannerButton } from "../form/shared/Buttons";
import RightArrow from "../icons/RightArrow";

function CGUBanner() {
  return (
    <Box mt={16} bg="primary.500">
      <GridWrapper>
        <GridItem
          colSpan={[6, 6, 12]}
          colStart={["col-start", "col-start", "col-start"]}
          py={[6, 6, 12]}
        >
          <Heading as="h2" size="h2">
            Proudly brought to you by CGU
          </Heading>
          <BannerButton
            href={`https://www.cgu.com.au/`}
            mt={[8, 8, 12]}
            icon={<RightArrow color="currentColor" />}
            data-tracking={`link-click:CGUBanner`}
          >
            Visit our website
          </BannerButton>
        </GridItem>
      </GridWrapper>
    </Box>
  );
}

export default CGUBanner;
