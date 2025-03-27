import React, { useState, useEffect } from "react"

export default function TestimonialCitation({author, title, children } ){
    
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(()=> {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
            console.log(isMobile)
            console.log(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    },[])
    
    return (
        <div className="citation-container">
            <div className="citation-content">
                {children}
            </div>
            <div className="author-title-wrapper">
                <div className="citation-author">
                    {author}
                </div>
                {isMobile ? null : (<div className="citation-separator">/</div>)}
                <div className="citation-title">
                    {title}
                </div>
            </div>
        </div>
    )
}