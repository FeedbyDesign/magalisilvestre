import React from 'react'
import Helmet from 'react-helmet'
import Link from "gatsby-link"
// Load font CSS
import 'typeface-quicksand'
import 'typeface-permanent-marker'

import Modal from '../components/Modal'

import { rhythm, scale } from "../utils/typography"
import presets from '../utils/presets'
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"


class DefaultLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalPage: false,
      modalBackground: null,
      topPosition: 0,
      previousLocation: null
    }
  }

  componentDidMount() {
    // Create references to html/body elements
    this.htmlElement = document.querySelector(`html`)
    this.bodyElement = document.querySelector(`body`)

    if (this.props.location.pathname !== "/") {
      this.setState({modalPage: true})
    }

  }

  componentWillReceiveProps(nextProps) {

    // keep previous location in state for modal
    if (this.state.previousLocation !== this.props.location.pathname) {
      this.setState({previousLocation: this.props.location.pathname})
    }

    // console.log('NEXTPROPS', nextProps)
    // console.log('POSITION', this.htmlElement.scrollTop ? this.htmlElement.scrollTop : this.bodyElement.scrollTop);

    // if we are not on homepage, open the page in Modal
    if (nextProps.location.pathname !== `/`) {
      if (this.props.location.pathname === `/`) {
        // keep current page as modal background if we navigate to a modal page
        this.setState({modalBackground: this.props.children})
        // keep the top position in stateso the background is at the same place
        // behind the modal
        this.setState({topPosition: this.htmlElement.scrollTop ? this.htmlElement.scrollTop : this.bodyElement.scrollTop})
      }
      this.setState({modalPage: true})
      typeof window !== 'undefined' ? window.setTimeout(()=>{window.scrollBy(0, this.state.topPosition)}, 0) : null
    } else {
      this.setState({modalBackground: null, modalPage: false})
    }

    // if (
    //   nextProps.location.pathname === `/contact/` &&
    //   !this.modalBackgroundChildren
    // ) {
    //   this.modalBackgroundChildren = this.props.children
    // } else {
    //   delete this.modalBackgroundChildren
    // }

    // // if we're changing to a non-homepage page, put things in
    // // a modal (unless we're on mobile).
    // if (
    //   nextProps.location.pathname !== `/` &&
    //   nextProps.location.pathname !== `/about/` &&
    //   this.windowWidth > 750
    // ) {
    //   // Freeze the background from scrolling.
    //   this.htmlElement.style.overflow = `hidden`
    //   this.bodyElement.style.overflow = `hidden`
    //
    //   // Always set overflow-y to scroll so the scrollbar stays visible avoiding
    //   // weird jumping.
    //   this.htmlElement.style.overflowY = `scroll`
    //
    //   // Save the homepage if we haven't already.
    //   if (!this.modalBackgroundChildren) {
    //     this.modalBackgroundChildren = this.props.children
    //   }
    // } else {
    //   // Otherwise we're navigating back home so delete old home so the
    //   // modal can be destroyed.
    //   delete this.modalBackgroundChildren
    //   this.htmlElement.style.overflow = `visible`
    //   this.bodyElement.style.overflow = `visible`
    //
    //   // Always set overflow-y to scroll so the scrollbar stays visible avoiding
    //   // weird jumping.
    //   this.htmlElement.style.overflowY = `scroll`
    // }

  }


  // toggleModal(title='', text='', imgRef) {
  //   this.setState({modalOpen: !this.state.modalOpen, dialogTitle: title, dialogText: text, dialogImgRef: imgRef})
  //
  //   // this.setState((prevState, props) => {
  //   //   if (!prevState.modalOpen) {
  //   //     // let scrollTop = (this.htmlElement.scrollTop ? this.htmlElement.scrollTop : this.bodyElement.scrollTop)
  //   //     // this.htmlElement.style.top = `${-scrollTop}px`
  //   //     // this.htmlElement.style.position = `fixed`
  //   //
  //   //     // this.bodyElement.style.height = `100vh`
  //   //     // this.bodyElement.style.overflow = `hidden`
  //   //
  //   //     return {modalOpen: !prevState.modalOpen}
  //   //   } else {
  //   //     // let scrollTop = this.htmlElement.style.top
  //   //     // this.htmlElement.style.position = `static`
  //   //     // this.htmlElement.scrollTop = (-scrollTop)
  //   //     // this.bodyElement.scrollTop = (-scrollTop)
  //   //
  //   //     return {modalOpen: !prevState.modalOpen}
  //   //   }
  //   // })
  //
  // }

  render() {

    return (
      <div css={{position: `relative`}}>
        <Helmet
          defaultTitle="La plateforme pour organiser tes soirées jeux | Wanna-Play.be"
          titleTemplate="%s | Wanna-Play.be"
        >
          {/* html attributes: <html lang="en" amp /> */}
          <html lang="fr" />
          {/* body attributes: <body className="root" /> */}
          {/* title attributes and value: <title itemProp="name" lang="en">My Title</title> */}
          {/* base element: <base target="_blank" href="http://mysite.com/" /> */}
          {/* multiple meta elements */}
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://www.wanna-play.be/static/wanna-play.a945f916.jpg" />
          <meta property="og:site_name" content="Wanna Play" />
          {/* multiple link elements */}
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={require(`!file-loader!../../static/images/favicons/favicon-32x32.png`)}
            />
        </Helmet>

        <div
          css={{
            display: `flex`,
            flexFlow: `row wrap`,
            justifyContent: `space-between`,
            padding: rhythm(1),
          }}
        >
          {
            this.props.location.pathname === '/' ?
            (
              <Link
                to={`/contact/`}
                css={{
                  fontWeight: `bold`,
                  height: rhythm(1.2)
                }}
              >
                Contacte-nous !
              </Link>
            ) :
            (
              <Link
                to={`/`}
                css={{
                  fontWeight: `bold`,
                  height: rhythm(1.2)
                }}
              >
                {`< Retour`}
              </Link>
            )
          }
          {
            this.props.location.pathname === '/' ?
            (
              <div
                css={{
                  display: `none`,
                  textAlign: `right`,
                  color: COLOR3,
                  ' a': {
                    border: `none`,
                    display: `block`,
                    ':hover': {
                      '> strong': {
                        color: COLOR1
                      }
                    }
                  },
                  [presets.Mobile]: {
                    display: `block`,
                  },
                }}
              >
                <Link to={`/english/`}>I want this page in <strong>English</strong></Link>
                <Link to={`/dutch/`}>Ik wil deze pagina in <strong>Nederlands</strong></Link>
              </div>
            ) : null
          }
        </div>

        {
          this.state.modalPage && this.state.modalBackground ?
          this.state.modalBackground :
          this.props.children
        }

        {this.state.modalPage && this.state.modalBackground &&
          <Modal
            location={location}
            previousLocation={this.state.previousLocation}
            topPosition={this.state.topPosition}
            style={{
              // backgroundColor: `rgba(25, 255, 255, 0.5)`,
              // backgroundColor: `rgba(255, 255, 255, 0.5)`,
              // border: `none`,
              // width: `100vw`,
              // height: `100vh`,
              // boxSizing: `border-box`,
              // position: `fixed`,
              //   top: 0,
              // display: `flex`,
              // zIndex: 100,
              // '>div': {
              //
              // }
            }}
          >
            {this.props.children}
          </Modal>}

      </div>
    )
  }
}

export default DefaultLayout
