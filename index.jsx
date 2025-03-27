import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./src/components/Menu/index"
import Star from "./src/components/Star"
import Badge from "./src/components/Badge/Badge"
import Banner from "./src/components/Banner/index"
import Card from "./src/components/Card/index"
import Testimonial from "./src/components/Testimonial/index"
import { HiOutlineCloudUpload } from "react-icons/hi"


const badgeColors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
const squareBadges = badgeColors.map(color => <Badge key={`${color}-square`} color={color} shape="square">{color} square</Badge>)
const pillBadges = badgeColors.map(color =>  <Badge key={`${color}-pill`} color={color} shape="pill">{color} pill</Badge>)

const bannerStyles = ["neutral", "success", "warning", "error", undefined]
const multiBannerEls = bannerStyles.map( style => {
  return (
    <Banner key={`multi-${style}`} type={style}>
      <Banner.Header>
        Selected style: {style}
      </Banner.Header>
      <Banner.Content>
        This is a multiline banner using this style: {style}
      </Banner.Content>
    </Banner>
  )
})

const singleBannerEls = bannerStyles.map( style => {
  return (
    <Banner key={`single-${style}`} type={style}>
      <Banner.Header>
        Single-line style: {style}
      </Banner.Header>
    </Banner>
  )
})


function App() {
  return (
    <>
      <Badge>default badge</Badge>
      
      <section className='badges'>
        {squareBadges}
      </section>
      
      <section className='badges'>
        {pillBadges}
      </section>
      
      <section className='banners'>
        {multiBannerEls}  
        {singleBannerEls}
      </section>
      
      <section className="cards">
        <Card>
          <Card.Icon>
            <HiOutlineCloudUpload />
          </Card.Icon>
          <Card.Header>
            Easy Deployment
          </Card.Header>
          <Card.Content>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
          </Card.Content>
        </Card>
      </section>
      
      <section className="testimonials">
        <Testimonial>
          <Testimonial.Logo>
            <img src="./src/assets/logo.png" alt="Workcation logo" />
          </Testimonial.Logo>
          <Testimonial.Citation author="May Anderson" title="Workcation, CTO">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
          </Testimonial.Citation>
        </Testimonial>
      </section>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);