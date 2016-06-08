import React from 'react'
import { Image } from 'react-native'

const Overlay = (props) =>
  <Image
    source={ props.footer ?
      require('../images/footer-background.png') :
      require('../images/header-background.png')
    }
    resizeMode={Image.resizeMode.stretch}
    style={{ flex: 1, backgroundColor: 'transparent' }} />

export default Overlay