import React from "react";

import { Link } from "gatsby";
import styled from "styled-components";
import Header from "../components/header";

const StyledDiv = styled.div`
  color: green;
`;

const HelloWorld = () => (
  <div style={{ color: "purple" }}>
    <Link to="/contact/">Contact</Link>
    <Header text="this is a header" />
    <StyledDiv>
      <h1>Hello Gatsby!</h1>
    </StyledDiv>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
);
export default HelloWorld;
