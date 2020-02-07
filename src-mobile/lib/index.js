// Queries
var Queries = /** @class */ (function () {
    function Queries() {
        this.getDogs = function () {
            return ("{\n    dogs {\n      id\n      breed\n    }\n  }\n");
        };
    }
    return Queries;
}());
// Mutations
var Mutations = /** @class */ (function () {
    function Mutations() {
    }
    return Mutations;
}());
// Column lib: grid size 12 column + gutter size 5px
var GridSystem = /** @class */ (function () {
    function GridSystem() {
    }
    return GridSystem;
}());
// Helpers for colors and fonts in theme
var colorHelper = function (light, main, dark, contrastText) { return ({ light: light, main: main, dark: dark, contrastText: contrastText }); };
var fontHelper = function (fontFamily, fontSize, letterSpacing, lineHeight) {
    return ({ fontFamily: fontFamily, fontSize: fontSize, letterSpacing: letterSpacing, lineHeight: lineHeight });
};
// shared-component styling
var SharedStyling = /** @class */ (function () {
    function SharedStyling() {
    }
    return SharedStyling;
}());
export { SharedStyling };
var Font = /** @class */ (function () {
    function Font() {
    }
    Font.regular = "Liberation Sans";
    Font.italic = "Liberation Sans Italic";
    Font.bold = "Liberation Sans Bold";
    return Font;
}());
export { Font };
var Theme = /** @class */ (function () {
    function Theme() {
    }
    // Breakpoints for different device sizes
    Theme.breakpoints = new Map()
        .set("xs", 0)
        .set("sm", 600)
        .set("md", 960)
        .set("lg", 1280)
        .set("xs", 1920);
    // Color palette
    Theme.palette = {
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
    };
    // Color of texts, what color to display when disabled etc.
    Theme.text = {
        primary: "#212121",
        secondary: "#FFFFFF",
        disabled: "#F5F5F5",
        hint: "#E0E0E0",
        dark: "#FFF",
    };
    // Color of the divider
    Theme.divider = "#797979";
    // Different subtitle color for theme
    Theme.subtitle = {
        light: "#AAAAAA",
        dark: "#F4F4F4"
    };
    // Different white backgrounds (pastel colours)
    Theme.background = {
        white: "#FFF",
        ghostWhite: "#F8F8FF",
        whiteSmoke: "#F5F5F5",
        greyWhite: "#E0E0E0",
        lightWhite: "#F5F5F5"
    };
    // Different shadows for giving depth
    Theme.shadows = {
        floatingShadow: "",
        paperShadow: ""
    };
    Theme.typography = {
        htmlFontSize: 16,
        pxToRem: function (pixels) { return Number(pixels) * Theme.typography.htmlFontSize; },
        h1: fontHelper(Font.regular, 28),
        h2: fontHelper(Font.regular, 24),
        h3: fontHelper(Font.regular, 22),
        h4: fontHelper(Font.regular, 20),
        h5: fontHelper(Font.regular, 18),
        h6: fontHelper(Font.regular, 16),
        // Every title has a correctly sized subtitle
        "h1-subtitle": fontHelper(Font.regular, 26),
        "h2-subtitle": fontHelper(Font.regular, 22),
        "h3-subtitle": fontHelper(Font.regular, 20),
        "h4-subtitle": fontHelper(Font.regular, 18),
        "h5-subtitle": fontHelper(Font.regular, 16),
        "h6-subtitle": fontHelper(Font.regular, 14),
        body: fontHelper(Font.regular, 12, "", 16),
        button: fontHelper(Font.bold, 14, "5%"),
    };
    // Add values for the specific component z-index
    Theme.zIndex = new Map()
        .set("mobileStepper", 1000);
    return Theme;
}());
var Mixins = /** @class */ (function () {
    function Mixins() {
        this.errorText = {
            fontWeight: "700",
            color: "red",
        };
    }
    return Mixins;
}());
export { Queries, Mutations, GridSystem, Theme, Mixins };
//# sourceMappingURL=index.js.map