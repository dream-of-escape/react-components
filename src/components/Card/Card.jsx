import "./style.css"
import { IoCloudUploadOutline } from "react-icons/io5";


export default function Card({ children }){
    return (
        <div className="card-container">
            <div className="card-wrapper">
                <div className="card-icon">
                    <IoCloudUploadOutline />
                </div>
                <div className="card-content">
                    {children}
                </div>
            </div>
        </div>
    )
}