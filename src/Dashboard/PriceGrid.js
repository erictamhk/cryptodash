import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import PriceTile from "./PriceTile";

const PriceGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`;

function PriceGrid() {
  return (
    <AppContext.Consumer>
      {({ prices }) => (
        <PriceGridStyled>
          {prices.map((price, index) => (
            <PriceTile key={index} price={price} index={index} />
          ))}
        </PriceGridStyled>
      )}
    </AppContext.Consumer>
  );
}

export default PriceGrid;
