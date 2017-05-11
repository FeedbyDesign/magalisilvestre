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
      <div
        dangerouslySetInnerHTML={{
          __html: this.props.data.underConstruction.html,
        }}
        />
    )
  }
}

export default Index

export const pageQuery = graphql`
query Index {
  underConstruction: markdownRemark (id: {regex: "data/underConstruction/i"}){
    html
    frontmatter {
      name
    }
  }
}
`
