import {ReactNode} from "react";
import theme from "fitworld-common/lib/common/src/theming/theme";

export type DefaultProps<T> = T & {
    children?: ReactNode;
    style?: object;
    theme?: typeof theme;
}
