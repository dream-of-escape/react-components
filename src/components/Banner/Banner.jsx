import "./style.css"
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaInfoCircle } from "react-icons/fa"; // <FaCheckCircle />

export default function Banner({ type="neutral", children }){
    const icons = {
        success: FaCheckCircle,
        warning: FaExclamationTriangle,
        error: FaTimesCircle,
        neutral: FaInfoCircle
    }
    const Icon = icons[type]

    return (
        <div className={`${type} banner`}>
            <Icon className="icon"/>
            <div>
                {children}
            </div>
        </div>
    )
}