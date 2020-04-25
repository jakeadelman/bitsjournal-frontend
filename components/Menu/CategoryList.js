import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { wideFont } from "../shared/helpers";
import Datepicker from "./Datepicker";

const SidebarCategoryList = inject("store")(
  observer(({ store }) => {
    const [customClicked, setCustomClicked] = useState(false);

    function handleClick(value) {
      store.resetPnl();
      store.changeDate(value);
      console.log(store);
    }

    function handleCustomClicked() {
      if (customClicked == true) {
        setCustomClicked(false);
      } else {
        setCustomClicked(true);
      }
    }

    return (
      <div>
        <CategoryList>
          {store.date == "Today" && customClicked == false ? (
            <ItemActive onClick={() => handleClick("Today")}>Today</ItemActive>
          ) : (
            <Item onClick={() => handleClick("Today")}>Today</Item>
          )}
          {store.date == "Yesterday" && customClicked == false ? (
            <ItemActive onClick={() => handleClick("Yesterday")}>
              Yesterday
            </ItemActive>
          ) : (
            <Item onClick={() => handleClick("Yesterday")}>Yesterday</Item>
          )}
          {store.date == "This Week" && customClicked == false ? (
            <ItemActive onClick={() => handleClick("This Week")}>
              This Week
            </ItemActive>
          ) : (
            <Item onClick={() => handleClick("This Week")}>This Week</Item>
          )}
          {store.date == "This Month" && customClicked == false ? (
            <ItemActive onClick={() => handleClick("This Month")}>
              This Month
            </ItemActive>
          ) : (
            <Item onClick={() => handleClick("This Month")}>This Month</Item>
          )}

          {customClicked == true || store.date == "Custom" ? (
            <ItemActive onClick={() => handleCustomClicked()}>
              Custom
            </ItemActive>
          ) : (
            <Item onClick={() => handleCustomClicked()}>Custom</Item>
          )}
        </CategoryList>
        {customClicked ? <Popup /> : null}
      </div>
    );
  })
);

const Popup = () => {
  const [entered, setEntered] = useState(false);
  return (
    <PopupTop>
      <PopContain>
        <Row1>
          <PopLabel>start:</PopLabel>
          <Datepicker start={true} set={entered} />
        </Row1>
        <Row1>
          <PopLabel>end:</PopLabel>
          <Datepicker start={false} set={entered} />
        </Row1>
        <PopEnter onClick={() => setEntered(true)}>Set Date</PopEnter>
      </PopContain>
    </PopupTop>
  );
};

export default SidebarCategoryList;

const Row1 = styled.div`
  margin-bottom: 5px;
`;
const PopContain = styled.div`
  margin: 5px;
`;
const PopLabel = styled.div`
  color: #fff;
`;
const PopEnter = styled.button`
  margin-top: 5px;
  background: #fff;
  padding: 2px;
  border-radius: 1px;
`;

const PopupTop = styled.div`
  position: absolute;
  background: #000;
  z-index: 1;
  margin: 5px;
  padding: 2px;
  border-radius: 2px;
`;

const PopupItem = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

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
  font-weight: 300;
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
