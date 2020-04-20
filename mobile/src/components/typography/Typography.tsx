import React from 'react';
import { Text } from "react-native";

enum FontTypes {
    REGULAR = "NunitoSans-Regular",
    BOLD = "NunitoSans-Bold",
    BOLDITALIC = "NunitoSans-BoldItalic",
    ITALIC = "NunitoSans-Italic",
    LIGHT = "NunitoSans-Light",
    LIGHTITALIC = "NunitoSans-LightItalic"
}

class FontTypography {
    fontType: FontTypes.REGULAR | string | undefined;
    fontSize: number | undefined;

    isItalic = (): FontTypography => {
        this.fontType = FontTypes.ITALIC;
        return this;
    };

    isBold = (): FontTypography => {
        this.fontType = FontTypes.BOLD;
        return this;
    };

    isBoldItalic = (): FontTypography => {
        this.fontType = FontTypes.BOLDITALIC;
        return this;
    };

    isLight = (): FontTypography => {
        this.fontType = FontTypes.LIGHT;
        return this;
    };

    isLightItalic = (): FontTypography => {
        this.fontType = FontTypes.LIGHTITALIC;
        return this;
    };

    isSize = (size: number) => {
        this.fontSize = size;
        return this;
    };

    result = (props: { children: any }) => {
        return React.createElement(Text, {
            ...props,
            style: {
                fontSize: this.fontSize,
                fontFamily: this.fontType
            }
        }, props.children);
    }
}

export const H1 =  new FontTypography().isSize(28).result;
export const H1Subtitle =  new FontTypography().isSize(26).result;
export const H1Bold =  new FontTypography().isSize(28).isBold().result;
export const H1BoldItalic =  new FontTypography().isSize(28).isBoldItalic().result;
export const H1Italic =  new FontTypography().isSize(28).isItalic().result;
export const H1Light =  new FontTypography().isSize(28).isLight().result;
export const H1LightItalic =  new FontTypography().isSize(28).isLightItalic().result;

export const H2 =  new FontTypography().isSize(24).result;
export const H2Subtitle =  new FontTypography().isSize(24).result;
export const H2Bold =  new FontTypography().isSize(24).isBold().result;
export const H2BoldItalic =  new FontTypography().isSize(24).isBoldItalic().result;
export const H2Italic =  new FontTypography().isSize(24).isItalic().result;
export const H2Light =  new FontTypography().isSize(24).isLight().result;
export const H2LightItalic =  new FontTypography().isSize(24).isLightItalic().result;

export const H3 =  new FontTypography().isSize(22).result;
export const H3Subtitle =  new FontTypography().isSize(22).result;
export const H3Bold =  new FontTypography().isSize(22).isBold().result;
export const H3BoldItalic =  new FontTypography().isSize(22).isBoldItalic().result;
export const H3Italic =  new FontTypography().isSize(22).isItalic().result;
export const H3Light =  new FontTypography().isSize(22).isLight().result;
export const H3LightItalic =  new FontTypography().isSize(22).isLightItalic().result;

export const H4 =  new FontTypography().isSize(20).result;
export const H4Subtitle =  new FontTypography().isSize(20).result;
export const H4Bold =  new FontTypography().isSize(20).isBold().result;
export const H4BoldItalic =  new FontTypography().isSize(20).isBoldItalic().result;
export const H4Italic =  new FontTypography().isSize(20).isItalic().result;
export const H4Light =  new FontTypography().isSize(20).isLight().result;
export const H4LightItalic =  new FontTypography().isSize(20).isLightItalic().result;

export const H5 =  new FontTypography().isSize(18).result;
export const H5Subtitle =  new FontTypography().isSize(18).result;
export const H5Bold =  new FontTypography().isSize(18).isBold().result;
export const H5BoldItalic =  new FontTypography().isSize(18).isBoldItalic().result;
export const H5Italic =  new FontTypography().isSize(18).isItalic().result;
export const H5Light =  new FontTypography().isSize(18).isLight().result;
export const H5LightItalic =  new FontTypography().isSize(18).isLightItalic().result;

export const H6 =  new FontTypography().isSize(16).result;
export const H6Subtitle =  new FontTypography().isSize(16).result;
export const H6Bold =  new FontTypography().isSize(16).isBold().result;
export const H6BoldItalic =  new FontTypography().isSize(16).isBoldItalic().result;
export const H6Italic =  new FontTypography().isSize(16).isItalic().result;
export const H6Light =  new FontTypography().isSize(16).isLight().result;
export const H6LightItalic =  new FontTypography().isSize(16).isLightItalic().result;


