import React from "react";

export const rootContextDefaultState = {
    forceAppReRender: () => {},
    dimensions: {
        width: 0,
        height: 0,
    }
};

export const RootContext = React.createContext(rootContextDefaultState);
