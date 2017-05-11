import React from 'react'
import _ from 'lodash'
import { Helmet } from "react-helmet"

import { rhythm, scale } from "../utils/typography"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"

// Import for Open Graph image
import '../../static/images/magalisilvestre.jpg'

const contact = {
  phone: typeof window !== 'undefined' ? "+2304004040": "Phone Number",
  email: typeof window !== 'undefined' ? "my@email.com": "Email"
}

class Index extends React.Component {
  render() {

    return (
      <div>
        <Helmet>
            <title>La plateforme pour organiser tes soirées jeux</title>
            <meta property="og:title" content="La plateforme pour organiser tes soirées jeux | Wanna-Play.be" />
            <meta name="description" content="Wanna Play rassemble la communauté du jeu de société à Bruxelles. Rejoins-nous pour construire avec nous une communauté qui te ressemble." />
            <meta property="og:description" content="Wanna Play rassemble la communauté du jeu de société à Bruxelles. Rejoins-nous pour construire avec nous une communauté qui te ressemble." />
            <link rel="canonical" href="https://www.wanna-play.be" />
            <meta property="og:url" content="https://www.wanna-play.be" />
        </Helmet>



      </div>
    )
  }
}

export default Index

// export const pageQuery = `
// query {
//   allFile (
//     mediaType: {regex: "/image/i"}
//   ) {
//     edges {
//       node {
//         id
//         ext
//         name
//         base
//         relativePath
//         type
//         mediaType
//         children {
//           ... on ImageSharp {
//             micro: responsiveSizes(maxWidth: 20) {
//               src
//               base64
//               aspectRatio
//             },
//             w110: responsiveSizes(maxWidth: 110) {
//               src
//               srcSet
//               aspectRatio
//             },
//             w350: responsiveSizes(maxWidth: 350) {
//               src
//               srcSet
//               aspectRatio
//             },
//             w410: responsiveSizes(maxWidth: 410) {
//               src
//               srcSet
//               aspectRatio
//             },
//           }
//         }
//       }
//     }
//   }
// }
// `
// sortBy: { order: DESC, fields: [frontmatter___date] },
//     frontmatter: { draft: { ne: true } },
//     fileAbsolutePath: { regex: "/blog/" },

// query Image($name: fileNameQueryString!){
//   file (name: $name) {
//     id
//     ext
//     name
// 		 base
//     relativePath
//     type
//     mediaType
//
//   }
// }
