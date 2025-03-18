import { IconContext } from "react-icons";

export default function CardIcon({ children }){
    return (
        <div className="card-icon-container">
            <div className="card-icon">
                    <IconContext.Provider value={{className: "card-icon"}}>
                        {children}
                    </IconContext.Provider>
            </div>
        </div>
    )
}