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

enum TitleFontSizes {
    H1 = 28,
    H2 = 24,
    H3 = 22,
    H4 = 20,
    H5 = 18,
    H6 = 16,
    Button = 14,
    Body = 12
}

enum SubtitleFontSizes {
H1 = 26,
H2 = 22,
H3 = 20,
H4 = 18,
H5 = 16,
H6 = 14
}

class FontTypography {
    fontType: FontTypes.REGULAR | string | undefined;
    fontSize: number | undefined;
    uppercase: "uppercase" | undefined;

    isUppercase = () => {
        this.uppercase = "uppercase";
        return this;
    };

    isH1Size = () => {
        this.fontSize = TitleFontSizes.H1;
        return this;
    };

    isH2Size = () => {
        this.fontSize = TitleFontSizes.H2;
        return this;
    };

    isH3Size = () => {
        this.fontSize = TitleFontSizes.H3;
        return this;
    };

    isH4Size = () => {
        this.fontSize = TitleFontSizes.H4;
        return this;
    };

    isH5Size = () => {
        this.fontSize = TitleFontSizes.H5;
        return this;
    };

    isH6Size = () => {
        this.fontSize = TitleFontSizes.H6;
        return this;
    };

    isButtonSize = () => {
        this.fontSize = TitleFontSizes.Button;
        return this;
    };

    isBodySize = () => {
        this.fontSize = TitleFontSizes.Button;
        return this;
    };

    isH1SubtitleSize = () => {
      this.fontSize = SubtitleFontSizes.H1;
      return this;
    };

    isH2SubtitleSize = () => {
      this.fontSize = SubtitleFontSizes.H2;
      return this;
    };

    isH3SubtitleSize = () => {
      this.fontSize = SubtitleFontSizes.H3;
      return this;
    };

    isH4SubtitleSize = () => {
      this.fontSize = SubtitleFontSizes.H4;
      return this;
    };

    isH5SubtitleSize = () => {
      this.fontSize = SubtitleFontSizes.H5;
      return this;
    };

    isH6SubtitleSize = () => {
      this.fontSize = SubtitleFontSizes.H6;
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

    r = (props: { children: any }) => {
        return React.createElement(Text, {
            ...props,
            style: {
                fontSize: this.fontSize,
                fontFamily: this.fontType,
                textTransform: this.uppercase
            }
        }, props.children);
    }
}

const t = (cb: (e: FontTypography) => FontTypography) => {
    return cb(new FontTypography()).r;
};

// H1 Typography
export const H1 =  t(e => e
    .isH1Size());

export const H1Subtitle = t(e => e
    .isH1SubtitleSize());

export const H1Bold = t(e => e
    .isH1Size()
    .isBold());

export const H1BoldItalic = t(e => e
    .isH1Size()
    .isBoldItalic());

export const H1Italic =  t(e => e
    .isH1Size()
    .isItalic());

export const H1Light =  t(e => e
    .isH1Size()
    .isLight());

export const H1LightItalic =  t(e => e
    .isH1Size()
    .isLightItalic());

// H2 Typography
export const H2 =  t(e => e
    .isH2Size());

export const H2Subtitle = t(e => e
    .isH2SubtitleSize());

export const H2Bold = t(e => e
    .isH2Size()
    .isBold());

export const H2BoldItalic = t(e => e
    .isH2Size()
    .isBoldItalic());

export const H2Italic = t(e => e
    .isH2Size()
    .isItalic());

export const H2Light = t(e => e
    .isH2Size()
    .isLight());

export const H2LightItalic = t(e => e
    .isH2Size()
    .isLightItalic());

// H3 Typography
export const H3 =  t(e => e
    .isH3Size());

export const H3Subtitle = t(e => e
    .isH3SubtitleSize());

export const H3Bold = t(e => e
    .isH3Size()
    .isBold());

export const H3BoldItalic = t(e => e
    .isH3Size()
    .isBoldItalic());

export const H3Italic = t(e => e
    .isH3Size()
    .isItalic());

export const H3Light = t(e => e
    .isH3Size()
    .isLight());

export const H3LightItalic = t(e => e
    .isH3Size()
    .isLightItalic());

// H4 Typography
export const H4 =  t(e => e
    .isH4Size());

export const H4Subtitle = t(e => e
    .isH4SubtitleSize());

export const H4Bold = t(e => e
    .isH4Size()
    .isBold());

export const H4BoldItalic = t(e => e
    .isH4Size()
    .isBoldItalic());

export const H4Italic = t(e => e
    .isH4Size()
    .isItalic());

export const H4Light = t(e => e
    .isH4Size()
    .isLight());

export const H4LightItalic = t(e => e
    .isH4Size()
    .isLightItalic());

// H5 Typography
export const H5 =  t(e => e
    .isH5Size());

export const H5Subtitle = t(e => e
    .isH5SubtitleSize());

export const H5Bold = t(e => e
    .isH5Size()
    .isBold());

export const H5BoldItalic = t(e => e
    .isH5Size()
    .isBoldItalic());

export const H5Italic = t(e => e
    .isH5Size()
    .isItalic());

export const H5Light = t(e => e
    .isH5Size()
    .isLight());

export const H5LightItalic = t(e => e
    .isH5Size()
    .isLightItalic());

// H6 Typography
export const H6 =  t(e => e
    .isH6Size());

export const H6Subtitle = t(e => e
    .isH6SubtitleSize());

export const H6Bold = t(e => e
    .isH6Size()
    .isBold());

export const H6BoldItalic = t(e => e
    .isH6Size()
    .isBoldItalic());

export const H6Italic = t(e => e
    .isH6Size()
    .isItalic());

export const H6Light = t(e => e
    .isH6Size()
    .isLight());

export const H6LightItalic = t(e => e
    .isH6Size()
    .isLightItalic());

// button and body typography
export const ButtonText = t(e => e
    .isButtonSize()
    .isUppercase());

export const BodyText = t(e => e
    .isBodySize());



