import styled from "styled-components";
import React from "react";
import { inject, observer } from "mobx-react";

const SidebarCategoryList = inject("store")(
  observer(({ store }) => {
    function handleClick(value) {
      store.resetPnl();
      store.changeDate(value);
      console.log(store);
    }
    return (
      <CategoryList>
        {store.date == "Today" ? (
          <ItemActive onClick={() => handleClick("Today")}>Today</ItemActive>
        ) : (
          <Item onClick={() => handleClick("Today")}>Today</Item>
        )}
        {store.date == "Yesterday" ? (
          <ItemActive onClick={() => handleClick("Yesterday")}>
            Yesterday
          </ItemActive>
        ) : (
          <Item onClick={() => handleClick("Yesterday")}>Yesterday</Item>
        )}
        {store.date == "This Week" ? (
          <ItemActive onClick={() => handleClick("This Week")}>
            This Week
          </ItemActive>
        ) : (
          <Item onClick={() => handleClick("This Week")}>This Week</Item>
        )}
        {store.date == "This Month" ? (
          <ItemActive onClick={() => handleClick("This Month")}>
            This Month
          </ItemActive>
        ) : (
          <Item onClick={() => handleClick("This Month")}>This Month</Item>
        )}
        {store.date == 5 ? (
          <ItemActive onClick={() => handleClick(5)}>Custom</ItemActive>
        ) : (
          <Item onClick={() => handleClick(5)}>Custom</Item>
        )}
      </CategoryList>
    );
  })
);

export default SidebarCategoryList;

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
