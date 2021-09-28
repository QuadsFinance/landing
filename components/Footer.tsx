import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { footerMenu } from "../constants/menus";

const StyledFooter = styled.div`
  background-color: #161c2d;
  padding: 0 1em;
  @media screen and (min-width: 768px) {
    padding: 0 2em;
  }
  @media screen and (min-width: 1024px) {
    padding: 0 4em;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 12em;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 20em;
  }
`;

const StyledBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(27, 42, 78, 0.5);
  padding: 3em 0;
`;
const StyledGroup = styled.div``;
const StyledBannerTitle = styled.div`
  color: white;
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0.25em;
`;
const StyledBannerSubTitle = styled.div`
  font-size: 1.1em;
  color: #869ab8;
`;

const StyledButton = styled.div`
  padding: 1.5em 1.5em;
  font-size: 1em;
  border-radius: 0.375em;
  color: #fff;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  background-color: #3ce39b;
  &:hover {
    color: #fff;
    background-color: #28d98d;
  }
`;

const StyledMenu = styled.div`
  padding: 6em 0;
  display: flex;
  justify-content: flex-start;
`;
const StyledMenuCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 10em;
`;
const StyledMenuColLabel = styled.div`
  color: #506690;
  font-weight: 600;
  font-size: 0.8em;
  margin-bottom: 0.75em;
`;
const StyledMenuColItem = styled.div`
  font-weight: 400;
  color: #869ab8;
  margin-bottom: 0.75em;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10em;
`;

const StyledImage = styled.svg`
  width: auto;
  height: 50px;
  max-width: inherit;
`;

const StyledBottom = styled.div`
  border-top: 1px solid rgba(27, 42, 78, 0.5);
  padding: 1em 0;
  color: #869ab8;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledBanner>
        <StyledGroup>
          <StyledBannerTitle>QUAD token now live on Pangolin</StyledBannerTitle>
          <StyledBannerSubTitle>
            Head over to Pangolin exchange and get some tokens to stake.
          </StyledBannerSubTitle>
        </StyledGroup>
        <StyledButton>Buy QUAD</StyledButton>
      </StyledBanner>
      <StyledMenu>
        <StyledGroup>
          <StyledInfo>
            <StyledImage
              xmlns="http://www.w3.org/2000/svg"
              width="505.801"
              height="512"
              viewBox="0 0 505.801 512"
            >
              <g id="lego" transform="translate(-0.5)">
                <path
                  id="Path_145"
                  data-name="Path 145"
                  d="M271.559,21.516.5,178.012V376.473L235.242,512,506.3,355.5V157.043Zm0,0"
                  fill="#28d98d"
                />
                <path
                  id="Path_146"
                  data-name="Path 146"
                  d="M235.242,313.539.5,178.012l271.059-156.5L506.3,157.043Zm0,0"
                  fill="#61f7b6"
                />
                <path
                  id="Path_147"
                  data-name="Path 147"
                  d="M155.492,117.539c-.309-6.582-4.469-12.828-12.633-17.539-18.746-10.824-51.488-9.465-73.133,3.031C58,109.8,51.953,118.445,51.836,126.668l-.016,0V172.4h.016c.23,6.66,4.391,12.988,12.641,17.754,18.746,10.824,51.488,9.465,73.133-3.031,11.711-6.762,17.762-15.4,17.895-23.617h.012V117.535Zm0,0"
                  fill="#3ce39b"
                />
                <path
                  id="Path_148"
                  data-name="Path 148"
                  d="M64.477,145.254c-18.746-10.824-16.395-29.727,5.25-42.223S124.117,89.176,142.859,100s16.4,29.73-5.25,42.227S83.223,156.078,64.477,145.254Zm0,0"
                  fill="#61f7b6"
                />
                <path
                  id="Path_149"
                  data-name="Path 149"
                  d="M294.531,197.813c-.312-6.582-4.469-12.828-12.633-17.539-18.746-10.824-51.488-9.465-73.133,3.031-11.723,6.766-17.773,15.414-17.895,23.637h-.012v45.734h.012c.23,6.656,4.391,12.988,12.645,17.754,18.742,10.824,51.488,9.465,73.133-3.031,11.711-6.762,17.762-15.4,17.891-23.617h.016V197.809Zm0,0"
                  fill="#3ce39b"
                />
                <path
                  id="Path_150"
                  data-name="Path 150"
                  d="M203.516,225.527c-18.746-10.824-16.4-29.727,5.25-42.223s54.387-13.855,73.133-3.035S298.293,210,276.648,222.5,222.258,236.352,203.516,225.527Zm0,0"
                  fill="#61f7b6"
                />
                <path
                  id="Path_151"
                  data-name="Path 151"
                  d="M455.078,105.121c-.312-6.582-4.469-12.828-12.633-17.543-18.746-10.82-51.488-9.465-73.133,3.035-11.723,6.766-17.773,15.41-17.891,23.637h-.016v45.734l.016,0c.227,6.66,4.387,12.992,12.641,17.758,18.742,10.82,51.488,9.465,73.133-3.035,11.711-6.758,17.762-15.395,17.891-23.613h.016V105.117Zm0,0"
                  fill="#3ce39b"
                />
                <path
                  id="Path_152"
                  data-name="Path 152"
                  d="M364.059,132.836c-18.742-10.824-16.395-29.727,5.254-42.223s54.387-13.855,73.133-3.035,16.395,29.73-5.25,42.227S382.8,143.656,364.059,132.836Zm0,0"
                  fill="#61f7b6"
                />
                <path
                  id="Path_153"
                  data-name="Path 153"
                  d="M316.039,24.848c-.309-6.582-4.469-12.828-12.633-17.539C284.66-3.516,251.918-2.156,230.273,10.34c-11.723,6.766-17.77,15.414-17.891,23.637h-.016V79.711l.016,0c.23,6.66,4.391,12.992,12.641,17.758,18.746,10.82,51.488,9.465,73.133-3.031,11.711-6.762,17.762-15.4,17.895-23.617h.012V24.844Zm0,0"
                  fill="#3ce39b"
                />
                <path
                  id="Path_154"
                  data-name="Path 154"
                  d="M225.023,52.563c-18.746-10.824-16.395-29.727,5.25-42.223S284.664-3.516,303.406,7.3s16.4,29.727-5.25,42.227S243.77,63.387,225.023,52.563Zm0,0"
                  fill="#61f7b6"
                />
                <path
                  id="Path_155"
                  data-name="Path 155"
                  d="M235.242,512,506.3,355.5V157.043l-271.059,156.5Zm0,0"
                  fill="#3ce39b"
                />
              </g>
            </StyledImage>
          </StyledInfo>
        </StyledGroup>
        {footerMenu.map((group) => {
          return (
            <StyledMenuCol>
              <StyledMenuColLabel>{group.label}</StyledMenuColLabel>
              {group.items.map((item) => {
                return <StyledMenuColItem>{item.name}</StyledMenuColItem>;
              })}
            </StyledMenuCol>
          );
        })}
      </StyledMenu>
      <StyledBottom>Built with love on Avalanche 🔺.</StyledBottom>
    </StyledFooter>
  );
};
