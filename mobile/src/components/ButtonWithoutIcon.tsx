import React from 'react';
import styled from 'styled-components';
import { Button } from "react-native";

const StyledButton = styled(Button)`
    color: yellow;
`;

interface IButtonProps {
    title: string;
    click: any;
}

const ButtonWithoutIcon: React.FC<IButtonProps> = (props: any) => {
    return (
        <>
            <StyledButton title={props.title} onPress={props.click}/>
        </>
    );
};

export default ButtonWithoutIcon;
