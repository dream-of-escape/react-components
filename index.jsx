import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./src/components/Menu/index"
import Star from "./src/components/Star"
import Badge from "./src/components/Badge/Badge"
import Banner from "./src/components/Banner/Banner"



const badgeColors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
const badgeShapes = ["square", "pill"]
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
          <p>This is the default banner if no styles are selected. The next is the default no children banner.</p>
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
        <p>This is the banner for a error style, and the next is a error single-line.</p>
        </Banner>
        <Banner type="error" /> 
        <Banner type="neutral"> 
        <p>This is the banner for a neautral style, and the next is a neutral single-line.</p>
        </Banner>
        <Banner type="neutral" />
      </section>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);