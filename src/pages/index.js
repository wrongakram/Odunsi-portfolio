import React from "react"
import "../styles/styles.scss"

import Scrollbar from "smooth-scrollbar"

//Import Components
import Header from "../components/header"
import Banner from "../components/banner"
import AboutBlurb from "../components/aboutBlurb"
import VideoSection from "../components/videoSection"
import Footer from "../components/footer"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AboutBlurb />
    <VideoSection />
    <Footer />
  </div>
)

export default IndexPage
