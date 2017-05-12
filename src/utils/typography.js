import Typography from "typography"
// import CodePlugin from "typography-plugin-code"
import {
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from "typography-breakpoint-constants"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "./colors"


const options = {
  baseFontSize: `16px`,
  baseLineHeight: 1.382,
  scaleRatio: 2.618,
  // blockMarginBottom: 0.809, // Default to 1 rhythm = baseLineHeight
  headerFontFamily: [`Montserrat`, `sans-serif`],
  bodyFontFamily: [`Montserrat`, `sans-serif`],
  headerColor: COLOR4,
  bodyColor: COLOR4,
  headerWeight: 300,
  bodyWeight: 400,
  // plugins: [new CodePlugin()],
  overrideStyles: ({ rhythm, scale }, options) => ({
    html: {
      background: COLOR2,
    },
    body: {
      padding: `50px`,
      margin: `auto`,
      maxWidth: `800px`,
    },
    h2: {
      marginBottom: 0,
      fontWeight: 400,
    },
    "h1,h2,h3,h4,h5,h6": {
      textAlign: `center`,
      lineHeight: 1.168,
      textTransform: `uppercase`
    },
    p: {
      textAlign: `center`,
    },
    // a: {
    //   color: `inherit`,
    //   textDecoration: `none`,
    //   cursor: `pointer`,
    // },
    // 'a:hover': {
    //   borderColor: COLOR2,
    // },
    ".gatsby-resp-image-link": {
      width: `500px`,
      margin: `auto`,
      pointerEvents: `none`,
      cursor: `default`,
    },
    "#contactInfo": {
      textAlign: `center`,
      // fontWeight: `bold`,
    },
    "#feedbydesignFooter": {
      position: `fixed`,
        bottom: `20px`,
        left: 0,
      textAlign: `center`,
      color: `white`,
      padding: rhythm(1/2),
      background: `rgb(43, 201, 175)`,
      width: `100vw`,

    },
    "#feedbydesignFooter a": {
      color: `inherit`,
      fontWeight: `bold`,
      textDecoration: `none`,
      ':hover': {
        textDecoration: `underline`
      }
    },
    "#feedbydesignFooter a:hover": {
      borderBottom: `thick solid`
    }
    // [TABLET_MEDIA_QUERY]: {
    //   // Make baseFontSize on mobile 18px.
    //   html: {
    //     fontSize: `${18 / 20 * 100}%`,
    //   },
    // },
    // [MOBILE_MEDIA_QUERY]: {
    //   // Make baseFontSize on mobile 16px.
    //   html: {
    //     fontSize: `${16 / 16 * 100}%`,
    //   },
    // },

    // "h1,h2,h4,h5,h6": {
    //   color: `#4c4b38`,
    //   lineHeight: 1.075,
    //   marginTop: rhythm(1.5),
    //   marginBottom: rhythm(3 / 4),
    // },
    // ul: {
    //   marginTop: rhythm(1 / 2),
    // },
    // h3: {
    //   ...scale(2 / 5),
    //   fontStyle: `italic`,
    //   lineHeight: 1,
    //   marginTop: rhythm(1),
    //   marginBottom: rhythm(1 / 2),
    // },
    // "tt,code": {
    //   background: `hsla(23, 60%, 97%, 1)`,
    //   fontFamily: `"Space Mono",Consolas,"Roboto Mono","Droid Sans Mono","Liberation Mono",Menlo,Courier,monospace`,
    //   fontSize: `80%`,
    //   // Disable ligatures as they look funny w/ Space Mono as code.
    //   fontVariant: `none`,
    //   WebkitFontFeatureSettings: `"clig" 0, "calt" 0`,
    //   fontFeatureSettings: `"clig" 0, "calt" 0`,
    //   paddingTop: `0.1em`,
    //   paddingBottom: `0.1em`,
    // },
    // pre: {
    //   background: `hsla(23, 60%, 97%, 1)`,
    //   border: `1px solid #eddad4`,
    //   fontSize: `100%`,
    //   lineHeight: 1,
    // },
    // "pre code": {
    //   lineHeight: 1.32,
    // },
    // ".main-body a": {
    //   color: `inherit`,
    //   textDecoration: `none`,
    //   transition: `background 0.4s ease-out`,
    //   borderBottom: `1px solid #d7e7ee`,
    //   boxShadow: `inset 0 -5px 0px 0px #d7e7ee`,
    // },
    // ".main-body a:hover": {
    //   background: `#d7e7ee`,
    // },
    // ".main-body a.anchor": {
    //   color: `inherit`,
    //   textDecoration: `none`,
    //   borderBottom: `none`,
    //   boxShadow: `none`,
    // },
    // ".main-body a.anchor:hover": {
    //   background: `none`,
    // },
    // ".main-body a.gatsby-resp-image-link": {
    //   boxShadow: `none`,
    // },
    // ".main-body a.gatsby-resp-image-link:hover": {
    //   background: `none`,
    //   boxShadow: `none`,
    // },
    // "div + em": {
    //   ...scale(-1 / 5),
    //   lineHeight: 1.4,
    //   display: `block`,
    //   textAlign: `center`,
    // },
    // ".gatsby-resp-image-link": {
    //   marginLeft: rhythm(-3 / 4), // 3/4 rhythm is amount of padding on mobile.
    //   marginRight: rhythm(-3 / 4),
    // },
    // video: {
    //   width: `100%`,
    //   marginBottom: rhythm(options.blockMarginBottom),
    // },
    // [TABLET_MEDIA_QUERY]: {
    //   // Make baseFontSize on mobile 17px.
    //   html: {
    //     fontSize: `${17 / 16 * 100}%`,
    //   },
    // },
    // [MOBILE_MEDIA_QUERY]: {
    //   // Make baseFontSize on mobile 16px.
    //   html: {
    //     fontSize: `${16 / 16 * 100}%`,
    //   },
    // },
  }),
}

  const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography