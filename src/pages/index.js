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
  phone: typeof window !== 'undefined' ? "+32 498 808 805": "Phone Number",
  email: typeof window !== 'undefined' ? "coach@magalisilvestre.be": "Email"
}

class Index extends React.Component {
  render() {

    let contactInfo
    if (typeof window !== 'undefined') {
      let phone
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        phone = <a href={`tel:${contact.phone}`}>{contact.phone}</a>
      } else {
        phone = <span>{contact.phone}</span>
      }
      const email = <a href={`mailto:${contact.email}`} target="_top">{contact.email}</a>
      contactInfo = (
        <div
          css={{
            display: `flex`,
            flexFlow: `row wrap`,
            justifyContent: `center`,
            ' > *': {
              margin: `0 5px`
            }
          }}
        >
          {email}
          <span>{' • '}</span>
          {phone}
        </div>
      )
    }

    return (
      <div
        css={{
          display: `flex`,
          flexFlow: `column`,
          minHeight: `100vh`,
        }}
      >
        <div
          css={{
            flexGrow: 1,
            display: `flex`,
            flexFlow: `column`,
            justifyContent: `center`,
            padding: `20px`,
            margin: `auto`,
            maxWidth: `800px`,
          }}
          dangerouslySetInnerHTML={{
            __html: this.props.data.underConstruction.html,
          }}
          />

        {contactInfo}

        <div
          css={{
            textAlign: `center`,
            color: `white`,
            width: `100vw`,
            margin: `50px 0 ${rhythm(1/2)}`,

          }}
        >
          <p
            css={{
              background: COLOR4,
              color: COLOR2,
              padding: rhythm(1/2),
              width: `100%`,
              marginBottom: 0,
              "> a": {
                color: `inherit`,
                fontWeight: `bold`,
                textDecoration: `none`,
                cursor: `pointer`,
                ':hover': {
                  // borderBottom: `thick solid`,
                  color: `rgb(43, 201, 175)`,
                }
              },
            }}
          >
            Feed by Design aide ce projet à voir le jour.<br/>
            Notre portfolio est sur <a href='http://www.feedbydesign.com' target="_blank">feedbydesign.com</a> et on a une page <a href="https://www.facebook.com/feedbydesign/" target="_blank">Facebook</a>
          </p>
        </div>
      </div>
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
