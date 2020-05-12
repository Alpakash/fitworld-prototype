// Helpers for colors and fonts in theme
const colorHelper = (light: string, main: string, dark: string, contrastText: string) => ({
    light,
    main,
    dark,
    contrastText
});
const fontHelper = (fontFamily: any, fontSize: number, letterSpacing?: string | undefined, lineHeight?: number | undefined) =>
    ({fontFamily, fontSize, letterSpacing, lineHeight});

export default {
    // appTheming and customTheming for individual components
    theme: {
        light: {
            "main": "#546e7a",
            "bgColor": "gray",
            "color": "#fff"
        },
        dark: {
            "main": "blue",
            "bgColor": "#000",
            "color": "#fff"
        },
        brown: {
            "main": "red",
            "bgColor": "brown",
            "color": "#fff"
        }
    },
    palette: {
        common: {
            black: "#000",
            white: "#FFF",
        },
        primary: colorHelper("#2D475A", "#012031", "#00000A", "#FFF"),
        secondary: colorHelper("#FFBC44", "#F58B00", "#F58B00", "#FFF"),
        error: colorHelper("#FF867C", "#EF5350", "#B61827", "#FFF"),
        warning: colorHelper("#FFFF73", "#FFEE58", "#EBDB1E", "#212121"),
        info: colorHelper("#A16BFF", "#673AB7", "#36186B", "#FFFFFF"),
        success: colorHelper("#6FCF97", "#219653", "#398258", "#FFFFFF"),
    },
    // random colours:
    //    background: linear-gradient(to top, #8a2387, #e94057, #f27121);
    // #251D34 als background voor die gradient
    pastel: {
      purple: "#6e5773",
      pink: "#d45079",
      orange: "#ea9085",
      lightYellow: "#e9e1cc"
    },
    // Color of texts, what color to display when disabled etc.
    text: {
        primary: "#212121",
        secondary: "#FFFFFF",
        disabled: "#F5F5F5",
        hint: "#E0E0E0",
        dark: "#FFF",
    },
    divider: "#797979",
    breakpoints: new Map()
        .set("xs", 0)
        .set("sm", 600)
        .set("md", 960)
        .set("lg", 1280)
        .set("xs", 1920),
    subtitle: {
        light: "#AAAAAA",
        dark: "#F4F4F4"
    },
    background: {
        white: "#FFF",
        ghostWhite: "#F8F8FF",
        whiteSmoke: "#F5F5F5",
        greyWhite: "#E0E0E0",
        lightWhite: "#F5F5F5"
    },
    shadows: {
        floatingShadow: "",
        paperShadow: ""
    },
    zIndex: new Map()
        .set("mobileStepper", 1000)
        .set("background", -1),
    font: {
        regular: "Liberation Sans",
        italic: "Liberation Sans Italic",
        bold: "Liberation Sans Bold"
    }
}
