import React from "react";
import styled, { css } from "styled-components";

const CoinTmageTag = styled.img`
  height: 50px;
  ${props =>
    props.spotlight &&
    css`
      height: 200px;
      margin: auto;
      display: block;
    `}
`;

function CoinImage({ coin, spotlight }) {
  return (
    <CoinTmageTag
      spotlight={spotlight}
      alt={coin.CoinSymbol}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
}

export default CoinImage;
