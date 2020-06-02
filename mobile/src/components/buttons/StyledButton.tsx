import styled from "styled-components/native";
import {TouchableHighlight, TouchableOpacity} from "react-native";

export const StyledButton = styled(TouchableOpacity)<{border?: string | undefined}>`
    padding: 10px 24px;
    background-color: ${({theme}) => theme.palette.primary.main};
    align-items: center;
    flex-direction: row;
    justify-content: center;
    border-radius: 25px;
    ${({border}) => !!border ? `border: ${border}` : ""}
`;
