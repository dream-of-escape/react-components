import "./style.css"
import { HiOutlineCloudUpload } from "react-icons/hi";
;


export default function Card({ children }){
    return (
        <div className="card-container">
            <div className="card-wrapper">
                <div className="card-icon-container">
                    <HiOutlineCloudUpload className="card-icon"/>
                </div>
                <div className="card-content">
                    {children}
                </div>
            </div>
        </div>
    )
}