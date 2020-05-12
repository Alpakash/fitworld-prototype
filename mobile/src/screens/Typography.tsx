import React from 'react';
import {
    BodyText,
    ButtonText,
    H1,
    H1Bold,
    H1BoldItalic,
    H1Italic,
    H1Light,
    H1LightItalic,
    H1Subtitle,
    H2,
    H2Bold,
    H2BoldItalic,
    H2Italic,
    H2Light,
    H2LightItalic,
    H2Subtitle,
    H3,
    H3Bold,
    H3BoldItalic,
    H3Italic,
    H3Light,
    H3LightItalic,
    H3Subtitle,
    H4,
    H4Bold,
    H4BoldItalic,
    H4Italic,
    H4Light,
    H4LightItalic,
    H4Subtitle,
    H5,
    H5Bold,
    H5BoldItalic,
    H5Italic,
    H5Light,
    H5LightItalic,
    H5Subtitle,
    H6,
    H6Bold,
    H6BoldItalic,
    H6Italic,
    H6Light,
    H6LightItalic,
    H6Subtitle,
} from "../components/typography/Typography";
import {ScrollView} from "react-native";

const Typography = () => {
    return (
        <ScrollView>
            <H1>H1</H1>
            <H2>H2</H2>
            <H3>H3</H3>
            <H4>H4</H4>
            <H5>H5</H5>
            <H6>H6</H6>

            <H1Subtitle>H1Subtitle</H1Subtitle>
            <H2Subtitle>H2Subtitle</H2Subtitle>
            <H3Subtitle>H3Subtitle</H3Subtitle>
            <H4Subtitle>H4Subtitle</H4Subtitle>
            <H5Subtitle>H5Subtitle</H5Subtitle>
            <H6Subtitle>H6Subtitle</H6Subtitle>

            <H1Bold>H1Bold</H1Bold>
            <H2Bold>H2Bold</H2Bold>
            <H3Bold>H3Bold</H3Bold>
            <H4Bold>H4Bold</H4Bold>
            <H5Bold>H5Bold</H5Bold>
            <H6Bold>H6Bold</H6Bold>

            <H1BoldItalic>H1BoldItalic</H1BoldItalic>
            <H2BoldItalic>H2BoldItalic</H2BoldItalic>
            <H3BoldItalic>H3BoldItalic</H3BoldItalic>
            <H4BoldItalic>H4BoldItalic</H4BoldItalic>
            <H5BoldItalic>H5BoldItalic</H5BoldItalic>
            <H6BoldItalic>H6BoldItalic</H6BoldItalic>

            <H1Italic>H1Italic</H1Italic>
            <H2Italic>H2Italic</H2Italic>
            <H3Italic>H3Italic</H3Italic>
            <H4Italic>H4Italic</H4Italic>
            <H5Italic>H5Italic</H5Italic>
            <H6Italic>H6Italic</H6Italic>

            <H1Light>H1Light</H1Light>
            <H2Light>H2Light</H2Light>
            <H3Light>H3Light</H3Light>
            <H4Light>H4Light</H4Light>
            <H5Light>H5Light</H5Light>
            <H6Light>H6Light</H6Light>

            <H1LightItalic>H1LightItalic</H1LightItalic>
            <H2LightItalic>H2LightItalic</H2LightItalic>
            <H3LightItalic>H3LightItalic</H3LightItalic>
            <H4LightItalic>H4LightItalic</H4LightItalic>
            <H5LightItalic>H5LightItalic</H5LightItalic>
            <H6LightItalic>H6LightItalic</H6LightItalic>

            <ButtonText>Button</ButtonText>
            <BodyText>Body text Body text Body text Body text Body text Body text Body text Body text </BodyText>
        </ScrollView>
    );
};

export default Typography;
