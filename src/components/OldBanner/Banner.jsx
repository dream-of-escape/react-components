import "./style.css"
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaInfoCircle } from "react-icons/fa"; // <FaCheckCircle />


export default function Banner({type = "neutral", children}) {
    
    const icons = {
        success: FaCheckCircle,
        warning: FaExclamationTriangle,
        error: FaTimesCircle,
        neutral: FaInfoCircle
    }
    const Icon = icons[type]

    const headings = {
        success: "Congratulations!",
        warning: "Attention",
        error: "There is a problem with your application",
        neutral: "Update available"
    }

    const heading = headings[type]

    return (
        <div className={`${type} banner`}>
            <Icon className="icon"/>
            <div className="banner-text">
                <h2 className="banner-headline">{heading}</h2>
                {children ? <div className={`banner-children`}>{children}</div> : null}
            </div>
        </div>
    )
}