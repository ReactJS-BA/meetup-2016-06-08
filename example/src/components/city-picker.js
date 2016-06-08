import React, { Component } from 'react'
import {
  StyleSheet,
  Picker,
  Platform,
} from 'react-native'

const isAndroid = Platform.OS == 'android'
const isIOS = Platform.OS == 'ios'

const CityPicker = (props) =>
  <Picker
    {...props}
    mode="dialog"
    itemStyle={styles.pickerItem}
    style={[
      styles.picker,
      isAndroid && styles.pickerAndroid,
      isIOS && styles.pickerIOS
    ]}>
    <Picker.Item label="Milan" value="milan" />
    <Picker.Item label="Londres" value="londres" />
    <Picker.Item label="Buenos Aires" value="buenos+aires" />
    <Picker.Item label="Madrid" value="madrid" />
    <Picker.Item label="Paris" value="paris" />
  </Picker>

const styles = StyleSheet.create({
  picker: {
    position: 'absolute',
    marginTop: 10,
  },
  pickerIOS: {
    left: 25,
    right: 25,
  },
  pickerAndroid: {
    left: 20,
    width: 150,
    color: 'white',
  },
  pickerItem: {
    color: 'white',
  },
})

export default CityPicker
