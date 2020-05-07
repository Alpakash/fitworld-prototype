import styled from "styled-components/native";
import IntroBackground from "../assets/svg/intro-background.svg";
import {View} from "react-native";

export const BaseContainer = styled(View)`
  background-color: ${({theme}) => theme.background.ghostWhite}
`;
