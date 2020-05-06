import {ReactNode} from "react";

export type DefaultProps<T> = T & {
    children?: ReactNode;
    style?: object;
}
