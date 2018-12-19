import React from "react";
import { StyledHeader } from "./styles";

const Header = ({ text, fontSize }) => (
  <StyledHeader fontSize={fontSize}>{text}</StyledHeader>
);

export default Header;
