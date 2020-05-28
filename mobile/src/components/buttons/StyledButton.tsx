import styled from "styled-components/native";
import {TouchableHighlight, TouchableOpacity} from "react-native";

export const StyledButton = styled(TouchableOpacity)<{border?: string | undefined}>`
    padding: 10px 10px;
    background-color: #212121;
    border-radius: 5px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    ${({border}) => !!border ? `border: ${border}` : ""}
`;
