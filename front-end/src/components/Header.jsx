import React from "react";
import { StyledHeader } from "./styled";

export default ({ text, fontSize }) => (<StyledHeader fontSize={fontSize} > {text} </StyledHeader>);