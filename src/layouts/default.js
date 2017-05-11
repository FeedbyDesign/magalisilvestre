import React from 'react'
// Load font CSS
import 'typeface-montserrat'

import { rhythm, scale } from "../utils/typography"
import presets from '../utils/presets'
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"


class DefaultLayout extends React.Component {

  render() {

    return (
      <div css={{position: `relative`}}>

        {this.props.children}

      </div>
    )
  }
}

export default DefaultLayout
