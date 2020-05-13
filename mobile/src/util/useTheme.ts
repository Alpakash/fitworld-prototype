import {ThemeContext} from 'styled-components';
import {useContext} from "react";

export const useTheme = () => useContext(ThemeContext);
