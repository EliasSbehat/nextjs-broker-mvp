// components/SuccessPage.js
import { Box, Heading, Text, Container, GridItem } from "@chakra-ui/react";
import PaperPlane from "../icons/PaperPlane";
import HeaderWrap from "../content/HeaderWrap";

const SuccessPage = () => {
  return (
    <HeaderWrap bg="white" pt={[10]} pb={[0, 0, 0]}>
      <PaperPlane />
      <Heading as="h1" size="h1" mt={6} maxW={"580px"} className="hero-success-h1">
        Done! YOUR ENQUIRY HAS BEEN SENT
      </Heading>
      <Text mt={8} maxW={"580px"} className="hero-success-text">
        You&apos;ll recieve an email from CGU confirming your enquiry with a
        short breakdown for what you should expect at your consultation. Our
        broker partners will aim to get back to you in the next 2-3 days. If you
        have an urgent request, contact CGU directly here.
      </Text>
    </HeaderWrap>
  );
};

export default SuccessPage;
