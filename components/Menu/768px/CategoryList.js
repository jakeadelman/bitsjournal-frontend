import styled from "styled-components";
import React, { useState } from "react";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { wideFont } from "../../shared/helpers";

const SidebarCategoryList = inject("store")(
  observer(({ store }) => {
    const [dropdown, setDropdown] = useState(false);

    function clicked(value) {
      store.resetPnl();
      store.changeDate(value);
      console.log(store);
    }
    function showDropdown() {
      if (dropdown == true) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    }

    return (
      <Contain>
        <SetSymbol
          onClick={() => {
            showDropdown();
          }}
        >
          {dropdown == true ? (
            <FontAwesomeIcon
              icon={faCaretUp}
              style={{
                transition: "none",
                marginRight: "4px",
                marginLeft: "3px",
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{
                transition: "none",
                marginRight: "4px",
                marginLeft: "3px",
              }}
            />
          )}
          {store.date}
        </SetSymbol>
        {dropdown == true ? (
          <DropdownListContainer>
            <DropdownListItem onClick={() => clicked("Today")}>
              Today
            </DropdownListItem>
            <DropdownListItem onClick={() => clicked("Yesterday")}>
              Yesterday
            </DropdownListItem>
            <DropdownListItem onClick={() => clicked("This Week")}>
              This Week
            </DropdownListItem>
            <DropdownListItem onClick={() => clicked("This Month")}>
              This Month
            </DropdownListItem>
          </DropdownListContainer>
        ) : null}
      </Contain>
    );
  })
);

export default SidebarCategoryList;

const Contain = styled.div``;

const CategoryList = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  padding: 12px;
  font-size: 15px;
  text-decoration: none;
  color: ${(props) => props.theme.normalText};
  color: white;
  ::after {
    left: -1px;
    top: 0;
    bottom: 0;
    border-left: 3px solid ${(props) => props.theme.accent};
  }
  &:hover {
    background-color: #fff;
    color: #212529;
    cursor: pointer;
  }
`;
const ItemActive = styled.div`
  padding: 12px;
  font-size: 15px;
  text-decoration: none;
  color: ${(props) => props.theme.normalText};
  color: white;
  ::after {
    left: -1px;
    top: 0;
    bottom: 0;
    border-left: 3px solid ${(props) => props.theme.accent};
  }

  background-color: #fff;
  color: #212529;
  cursor: pointer;
`;

const SetSymbol = styled.div`
  font-size: 15px;
  color: #fff;
  :hover {
    cursor: pointer;
  }
`;

const DropdownContainer = styled.div`
  height: 100px;
`;
const DropdownListContainer = styled.ul`
  list-style-type: none;
`;
const DropdownListItem = styled.li`
  text-align: center;
  font-size: 15px;
  color: #fff;
  :hover {
    cursor: pointer;
    color: #000;
    background-color: #fff;
  }
`;
