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
    fontType: string | undefined;
    fontSize: number | undefined;

    isRegular = (): FontTypography => {
        this.fontType = FontTypes.REGULAR;
        return this;
    };

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

export const H1TitleBigBig =  new FontTypography()
    .isSize(50)
    .isBold()
    .result;

export const H2ItalicNormal =  new FontTypography()
    .isSize(24)
    .isItalic()
    .result;
