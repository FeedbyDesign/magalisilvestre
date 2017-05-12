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

// const contact = {
//   phone: typeof window !== 'undefined' ? "+2304004040": "Phone Number",
//   email: typeof window !== 'undefined' ? "my@email.com": "Email"
// }

window.serverContactInfo = {
  phone: process.env.phone,
  email: process.env.email
}
const devContactInfo = {
  phone: '+32999888777',
  email: 'dev@email.xyz',
}

class Index extends React.Component {
  render() {

    let contact = window.serverContactInfo.email ? window.serverContactInfo : devContactInfo
    let contactInfo
    if (typeof window !== 'undefined') {
      let phone
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        phone = <a href={`tel:${contact.phone}`}>{contact.phone}</a>
      } else {
        phone = <a>{contact.phone}</a>
      }
      const email = <a href={`mailto:${contact.email}`} target="_top">{contact.email}</a>
      contactInfo = (
        <div id="contactInfo">
          {email}
          <span>{' • '}</span>
          {phone}
        </div>
      )
    } else {
      contactInfo = <div id="contactInfo">Nothing to show</div>
    }

    console.log(window.serverContactInfo.email)

    return (
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: this.props.data.underConstruction.html,
          }}
          />

        {contactInfo}

        <div id="feedbydesignFooter">
          Feed by Design aide ce projet à voir le jour.<br/>
          Notre portfolio est sur <a href='http://www.feedbydesign.com' target="_blank">feedbydesign.com</a> et on a une page <a href="https://www.facebook.com/feedbydesign/" target="_blank">Facebook</a>
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
