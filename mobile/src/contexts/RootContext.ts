import React from "react";

export const rootContextDefaultState = {
    forceAppReRender: () => {}
};

export const RootContext = React.createContext(rootContextDefaultState);
