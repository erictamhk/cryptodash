import React from "react";
import { AppContext } from "../App/AppProvider";

function Content(props) {
  return (
    <AppContext.Consumer>
      {({ coinList, prices, firstVisit }) => {
        if (!coinList) {
          return <div>Loading Coins</div>;
        }
        if (!firstVisit && !prices) {
          return <div>Loading Prices</div>;
        }
        return <div>{props.children}</div>;
      }}
    </AppContext.Consumer>
  );
}

export default Content;
