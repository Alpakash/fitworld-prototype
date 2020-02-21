import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Col, Grid, Row} from 'react-native-easy-grid';
import styled from 'styled-components';

const GridLayout = () => {
  return (
    <>
      <View>
        <Grid>
          <Col style={styles.purple}>
            <Text>BONJOUR</Text>
          </Col>
          <Col>
            <Row style={styles.blue}>
              <Text>YO</Text>
            </Row>
            <Row>
              <ViewStyle />
            </Row>
            <Row style={styles.yellow}>
              <Text>ALOHA</Text>
            </Row>
          </Col>
          <Col>
            <Text style={[styles.pink, {flex: 1}]}>HALLO</Text>
          </Col>
          <Col>
            <Row style={{backgroundColor: 'brown', height: '30%'}}>
              <Text>EY</Text>
            </Row>
            <Row style={{backgroundColor: 'green'}}>
              <Text>OLA</Text>
            </Row>
          </Col>
        </Grid>
      </View>
    </>
  );
};

export default GridLayout;

const ViewStyle = styled.View`
  height: 200px;
`;

const styles = StyleSheet.create({
  purple: {
    backgroundColor: 'rgb(142, 68, 173)',
    height: 700,
  },
  blue: {
    backgroundColor: 'rgb(0,167,250)',
  },
  pink: {
    backgroundColor: 'rgb(255,117,132)',
  },
  yellow: {
    height: 200,
    backgroundColor: 'rgb(247,255,85)',
  },
});
