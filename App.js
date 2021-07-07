import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Widgets from './Components/Widgets';
import ScrollChart from './Components/ScrollChart';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          FusionCharts Integration with React Native
        </Text>
        <View>
          {/* <Widgets /> */}
          <ScrollChart />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  chartContainer: {
    height: 400,
  },
});
