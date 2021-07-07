import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ReactNativeFusionCharts from 'react-native-fusioncharts';

export default class Widgets extends Component {
  constructor(props) {
    super(props);

    const chartConfig = {
      type: 'angulargauge', // your chart type goes here
      width: '100%',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        chart: {
          caption: 'Customer Satisfaction Score',
          subcaption: 'Last week',
          lowerLimit: '0',
          upperLimit: '100',
          lowerLimitDisplay: 'Bad',
          upperLimitDisplay: 'Good',
          showValue: '1',
          valueBelowPivot: '1',
          theme: 'fusion',
        },
        colorRange: {
          color: [
            {
              minValue: '0',
              maxValue: '50',
              code: '#e44a00',
            },
            {
              minValue: '50',
              maxValue: '75',
              code: '#f8bd19',
            },
            {
              minValue: '75',
              maxValue: '100',
              code: '#6baa01',
            },
          ],
        },
        dials: {
          dial: [
            {
              value: '67',
            },
          ],
        },
      },
    };
    this.state = {
      chartConfig,
    };
  }

  render() {
    const modules = ['widgets']; // module names goes here
    return (
      <View style={styles.container}>
        <View style={styles.chartContainer}>
          <ReactNativeFusionCharts
            chartConfig={this.state.chartConfig}
            modules={modules}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
