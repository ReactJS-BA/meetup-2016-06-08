import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'

import BackgroundImage from './src/components/background-image'
import Row from './src/components/row'
import Overlay from './src/components/overlay'
import CityPicker from './src/components/city-picker'
import WeatherBox from './src/components/weather-box'

import * as weatherService from './src/services/weather'

class App extends Component {
  state = {
    city: 'madrid',
  }

  componentDidMount() {
    this.handleCityChange('buenos+aires')
  }

  handleCityChange(city) {
    this.setState({
      city,
      weather: null
    })

    weatherService
      .getForCity(city)
      .then((weather) => this.setState({ weather }))
  }

  render() {
    return (
      <View style={styles.container}>
        <BackgroundImage city={this.state.city} />
        <Row>
          <Overlay />
          <CityPicker
            selectedValue={this.state.city}
            onValueChange={(city) => this.handleCityChange(city)} />
        </Row>
        <Row>
          <Overlay footer={true} />
          <WeatherBox weather={this.state.weather} />
        </Row>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default App
