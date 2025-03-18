import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./src/components/Menu/index"
import Star from "./src/components/Star"
import Badge from "./src/components/Badge/Badge"
import Banner from "./src/components/Banner/index"
import Card from "./src/components/Card/index"
import Testimonial from "./src/components/Testimonial/Testimonial"
import { HiOutlineCloudUpload } from "react-icons/hi"


const badgeColors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
const squareBadges = badgeColors.map(color => <Badge key={`${color}-square`} color={color} shape="square">{color} square</Badge>)
const pillBadges = badgeColors.map(color =>  <Badge key={`${color}-pill`} color={color} shape="pill">{color} pill</Badge>)



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
        <Banner>
          <Banner.Header>
            This is the default banner.
          </Banner.Header> 
          <Banner.Content>
            There were no styles selected.
          </Banner.Content>
        </Banner>
        <Banner /> 
        <Banner type="success"> 
        <p>This is the banner for a successful style, and the next is a successful single-line.</p>
        </Banner>
        <Banner type="success" /> 
        <Banner type="warning"> 
        <p>This is the banner for a warning style, and the next is a warning single-line.</p>
        </Banner>
        <Banner type="warning" /> 
        <Banner type="error"> 
        <p>This is the banner for an error style, and the next is an error single-line.</p>
        </Banner>
        <Banner type="error" /> 
        <Banner type="neutral"> 
        <p>This is the banner for a neutral style, and the next is a neutral single-line.</p>
        </Banner>
        <Banner type="neutral" />
        <Banner type="neutral"> 
          <p>This is the banner for a neutral style.</p>
          <span>I wanted to see what would happen with multiple children.</span>
          <h4>Especially with different element types.</h4>
          <h1>H1 is probably pretty bad.</h1>
        </Banner>
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
        <Testimonial img="./src/assets/headshot.jpg" name="May Andersons" role="Workcation, CTO">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.</p>
        </Testimonial>
      </section>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);