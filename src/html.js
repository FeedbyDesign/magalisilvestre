import React, { Component } from "react"
import { TypographyStyle } from "react-typography"
import * as PropTypes from "prop-types"

import typography from "./utils/typography"
import { meta } from "./utils/metadata"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require("!raw-loader!../public/styles.css")
  } catch (e) {
    console.log(e)
  }
}

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
}

class Html extends Component {
  render() {

    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    return (
      <html lang={`${meta.lang}`}>
        <head>
          <link
            rel="preload"
            href={`/static/montserrat-latin-300.d2ad295b.woff2`}
            as="font"
            crossOrigin
          />
          <link
            rel="preload"
            href={`/static/montserrat-latin-400.240a8444.woff2`}
            as="font"
            crossOrigin
          />
          <link
            rel="preload"
            href={`/static/montserrat-latin-700.7d77e1f0.woff2`}
            as="font"
            crossOrigin
          />

          {this.props.headComponents}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <meta property="og:type" content="website" />
          <meta property="og:image" content={`${meta.url}static${require(`!file-loader!../static/images/fb.png`)}`} />
          <meta property="og:site_name" content={`${meta.name}`} />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={require(`!file-loader!../static/images/favicons/favicon-32x32.png`)}
          />

          <title>{`${meta.title} | ${meta.name}`}</title>
          <meta property="og:title" content={`${meta.title} | ${meta.name}`} />
          <meta name="description" content={`${meta.description}`} />
          <meta property="og:description" content={`${meta.description}`} />
          <link rel="canonical" href={`${meta.url}`} />
          <meta property="og:url" content={`${meta.url}`} />

          <TypographyStyle typography={typography} />
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

Html.propTypes = propTypes

module.exports = Html
