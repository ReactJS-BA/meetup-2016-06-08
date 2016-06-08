import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Image,
} from 'react-native'

class WeatherBox extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.weather) {
      this.state.opacity.setValue(0)
    }
  }

  componentDidUpdate() {
    if (this.props.weather) {
      Animated.timing(
        this.state.opacity,
        { toValue: 1, duration: 500, easing: Easing.easeIn }
      )
      .start()
    }
  }

  componentDidMount() {
    this.componentDidUpdate()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.weather
  }

  render() {
    const { weather } = this.props

    return (
      <Animated.Text
        style={[ styles.text, { opacity: this.state.opacity } ]}>
        {weather && `${weather.avg}°`}
      </Animated.Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    left: 20,
    bottom: 20,
    backgroundColor: 'transparent',
    fontSize: 100,
    fontWeight: '100',
    fontFamily: 'Helvetica',
    color: 'white',
  },
})

export default WeatherBox
