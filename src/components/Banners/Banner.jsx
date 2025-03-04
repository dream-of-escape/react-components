import "./style.css"

export default function Banner({type, text = "", children}) {
    
    
    return (
        <div className={type}>
            {
                // icon and text
            }        
            {children}
        </div>
    )
}