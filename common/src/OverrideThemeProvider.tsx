import React, {useContext} from "react";
import { ThemeContext } from "styled-components";
import { omit } from "lodash";
import { IDefaultProps } from "./interfaces/IDefaultProps";

interface Props extends IDefaultProps {
  overrideTheme: object
}

function OverrideThemeProvider(props: Props){
  const theme = useContext(ThemeContext);
  if (!props.children) return null;
  const childrenWithProps = React.Children.map(props.children, (child: any) =>
    React.cloneElement(child, omit(props, ['children', 'overrideTheme']))
  );
  return (
    <ThemeContext.Provider value={!!props.overrideTheme ? props.overrideTheme : theme}>
      {childrenWithProps}
    </ThemeContext.Provider>
  )
}
export default OverrideThemeProvider;
