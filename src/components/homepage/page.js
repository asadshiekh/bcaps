import React from 'react'
import Header from '../global/header'
import About from './about/page'
import Features from './features/page'
import Slider from './slider/page'
import Information from './information/page'
import FleetSection from './fleet/page'
import WhyChooseUsSection from './whychoosesection/page'
import TickerSection from './tickersection/page'
import FaqSection from './faqsection/page'
import ThreeBlockSection from './threeblocksection/page'
import TrustedPartners from './trustedpatner/page'
import Footer from '../global/footer'
import BannerSlider from './banner-slider/page'
import FullWidthVideoSection from './video-section/page'
import Newsletter from './newsletter/page'
import Reviews from './review/page'







const Homepage = () => {

  const images = [
    { src: '/images/assets/1.jpg', alt: 'Image 1' },
    { src: '/images/assets/2.jpg', alt: 'Image 3' },
    { src: '/images/assets/3.jpg', alt: 'Image 4' },
    { src: '/images/assets/4.jpg', alt: 'Image 5' },
    { src: '/images/assets/5.jpg', alt: 'Image 6' },
    { src: '/images/assets/6.jpg', alt: 'Image 7' },
    { src: '/images/assets/7.jpg', alt: 'Image 8' },
    { src: '/images/assets/8.jpg', alt: 'Image 9' },
    { src: '/images/assets/9.jpg', alt: 'Image 10' },
  ];

  return (
    <div>
        <Header />
        <BannerSlider></BannerSlider>
        <Reviews></Reviews>
        <About />
        <Features />
        <Slider></Slider>
        <TickerSection></TickerSection>
        <Information></Information>
        <FleetSection></FleetSection>
        <WhyChooseUsSection/>
        <FaqSection></FaqSection>
        <FullWidthVideoSection></FullWidthVideoSection>
        <ThreeBlockSection></ThreeBlockSection>
        <Newsletter />
        <TrustedPartners images={images}></TrustedPartners>
        <Footer></Footer>
   
    </div>
  )
}

export default Homepage