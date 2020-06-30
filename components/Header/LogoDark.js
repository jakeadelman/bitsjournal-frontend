import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { headerItem, wideFont } from "../shared/helpers";

const HeaderLogo = () => (
  <LogoDark>
    <Link prefetch href="/">
      <span>₿itsjournal</span>
    </Link>
  </LogoDark>
);

export default HeaderLogo;

const LogoDark = styled.div`
  ${headerItem}

  margin-right: 0;
  font-size: 26px;
  font-weight: 500;
  color: ${(props) => props.theme.normalText};
  text-decoration: none;

  @media (max-width: 425px) {
    padding: 0 8px 0 16px;
    font-size: 19px;
  }
`;

// display: flex;
// align-items: center;
// flex-shrink: 0;
// padding: 0 16px;
// @media (max-width: 425px) {
//   padding: 0 8px;
// }
