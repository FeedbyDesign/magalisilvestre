import React from 'react'

import { rhythm, scale } from "../utils/typography"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"

// Import for Open Graph image
// import '../../static/images/fb.png'

const contact = {
  phone: typeof window !== 'undefined' ? "+2304004040": "Phone Number",
  email: typeof window !== 'undefined' ? "my@email.com": "Email"
}

class Index extends React.Component {
  render() {

    return (
      <div>

        THE DUCK IS COOKED

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
