declare const Queries: {
    getUser: import("graphql").DocumentNode;
};
declare class Mutations {
}
declare class GridSystem {
}
declare const SharedStyling: {
    Button: string;
};
declare class Font {
    static regular: string;
    static italic: string;
    static bold: string;
}
declare class Theme {
    static breakpoints: Map<any, any>;
    static palette: {
        common: {
            black: string;
            white: string;
        };
        primary: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
        secondary: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
        error: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
        warning: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
        info: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
        success: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
    };
    static text: {
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
        dark: string;
    };
    static divider: string;
    static subtitle: {
        light: string;
        dark: string;
    };
    static background: {
        white: string;
        ghostWhite: string;
        whiteSmoke: string;
        greyWhite: string;
        lightWhite: string;
    };
    static shadows: {
        floatingShadow: string;
        paperShadow: string;
    };
    static typography: {
        htmlFontSize: number;
        pxToRem: (pixels: any) => number;
        h1: {
            fontFamily: any;
            fontSize: number;
            letterSpacing: string | undefined;
            lineHeight: number | undefined;
        };
        h2: {
            fontFamily: any;
            fontSize: number;
            letterSpacing: string | undefined;
            lineHeight: number | undefined;
        };
        h3: {
            fontFamily: any;
            fontSize: number;
            letterSpacing: string | undefined;
            lineHeight: number | undefined;
        };
        h4: {
            fontFamily: any;
            fontSize: number;
            letterSpacing: string | undefined;
            lineHeight: number | undefined;
        };
        h5: {
            fontFamily: any;
            fontSize: number;
            letterSpacing: string | undefined;
            lineHeight: number | undefined;
        };
        h6: {
            fontFamily: any;
            fontSize: number;
            letterSpacing: string | undefined;
            lineHeight: number | undefined;
        };
        "h1-subtitle": {
            fontFamily: any;
            fontSize: number;
            letterSpacing: string | undefined;
            lineHeight: number | undefined;
        };
        "h2-subtitle": {
            fontFamily: any;
            fontSize: number;
            letterSpacing: string | undefined;
            lineHeight: number | undefined;
        };
        "h3-subtitle": {
            fontFamily: any;
            fontSize: number;
            letterSpacing: string | undefined;
            lineHeight: number | undefined;
        };
        "h4-subtitle": {
            fontFamily: any;
            fontSize: number;
            letterSpacing: string | undefined;
            lineHeight: number | undefined;
        };
        "h5-subtitle": {
            fontFamily: any;
            fontSize: number;
            letterSpacing: string | undefined;
            lineHeight: number | undefined;
        };
        "h6-subtitle": {
            fontFamily: any;
            fontSize: number;
            letterSpacing: string | undefined;
            lineHeight: number | undefined;
        };
        body: {
            fontFamily: any;
            fontSize: number;
            letterSpacing: string | undefined;
            lineHeight: number | undefined;
        };
        button: {
            fontFamily: any;
            fontSize: number;
            letterSpacing: string | undefined;
            lineHeight: number | undefined;
        };
    };
    static zIndex: Map<any, any>;
}
declare class Mixins {
    static errorText: {
        fontWeight: string;
        color: string;
    };
}
export { Queries, Mutations, GridSystem, SharedStyling, Theme, Font, Mixins };
