import "./style.css"

export default function Card({ children }){
    return (
        <div className="card-container">
            <div className="card-wrapper">
                {children}
            </div>
        </div>
    )
}