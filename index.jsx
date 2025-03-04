import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./src/components/Menu/index"
import Star from "./src/components/Star"
import Badge from "./src/components/Badge/Badge"

const badgeColors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
const badgeShapes = ["square", "pill"]
const squareBadges = badgeColors.map(color => <Badge color={color} shape="square">{color} square</Badge>)
const pillBadges = badgeColors.map(color =>  <Badge color={color} shape="pill">{color} pill</Badge>)



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
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);