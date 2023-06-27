import RightArrow from "../../icons/RightArrow";
import LeftArrow from "../../icons/LeftArrow";
import InformationCircle from "../../icons/InformationCircle";
import { Button, Link } from "@chakra-ui/react";
import { forwardRef } from "react";

export const NextButton = forwardRef(function NextButton(props, ref) {
  return (
    <Button
      ref={ref}
      variant="solid"
      size="md"
      className="next-button"
      rightIcon={<RightArrow />}
      iconSpacing={4}
      {...props}
    >
      {props.children}
    </Button>
  );
});

export const LinkButton = (props) => {
  return (
    <Button
      variant="link"
      size="sm"
      leftIcon={
        props.icon ? props.icon : <InformationCircle color="currentColor" />
      }
      iconSpacing={1}
      justifyContent="flex-start"
      {...props}
    >
      {props.children}
    </Button>
  );
};

export const PrevButton = (props) => {
  return (
    <Button
      variant="link"
      size="sm"
      fontWeight="600"
      color="grey.300"
      leftIcon={<LeftArrow color="currentColor" />}
      iconSpacing={2}
      justifyContent="flex-start"
      {...props}
    >
      {props.children}
    </Button>
  );
};
export const BetaButton = (props) => {
  return (
    <Button variant="beta" size="sm" justifyContent="flex-start" {...props}>
      {props.children}
    </Button>
  );
};

export const BannerButton = (props) => {
  return (
    <Button
      variant="navy"
      size="md"
      rightIcon={props.icon}
      iconSpacing={2}
      justifyContent="space-between"
      {...props}
      as={Link}
    >
      {props.children}
    </Button>
  );
};
