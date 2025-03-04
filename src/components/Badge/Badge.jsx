/*

Component returns badges. Badges are formatted based on two incoming props: color and shape.

Colors can be: gray, red, yellow, green, blue, indigo, purple, or pink.
Shapes can be: square or pill.

*/

import './style.css'

export default function Badges({color = "gray", shape = "square", children}){
    return (
        <div className={`${color} ${shape} badge`}>
            {children}
        </div>
    )
}