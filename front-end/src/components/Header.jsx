import React from "react";
import { StyledHeader } from "./styled";

var CreateHeader = function({ text, fontSize}) {
	return <StyledHeader fontSize={fontSize} > {text} </StyledHeader>;
}
export default CreateHeader;
