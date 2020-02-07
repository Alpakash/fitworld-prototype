import { Col, Row, Grid } from "react-native-easy-grid";

export const GRID = () => {
  <View>
    <Grid>
      <Col style={styles.color}>hi</Col>
      <Col style={styles.blue}>bye</Col>
    </Grid>
  </View>
}

const styles = StyleSheet.create({
  purple: {
    backgroundColor: "rgb(142, 68, 173)"
  },
  blue: {
    backgroundColor: "rgb(12,24,173)"
  }
});