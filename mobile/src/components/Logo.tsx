import styled from "styled-components/native";
import {Image, ImageProps} from "react-native";
import React from "react";
import LogoBlackAndWhite from "../assets/png/LOGO_MONOCHROME.png";

const LogoImage = styled(Image)`
  padding:16px;
  width: 250px;
  height: 150px;
`;

export const Logo = (props: Omit<ImageProps, 'source'>) => {
    return (
        <LogoImage {...props} source={LogoBlackAndWhite} resizeMode={"contain"}/>
    )
};
