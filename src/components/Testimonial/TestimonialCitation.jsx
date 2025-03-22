import React, { useState, useEffect } from "react"

export default function TestimonialCitation( props ){
    return (
        <div className="citation-container">
            <div className="citation-author">
                {props.author}
            </div>
            <div className="desktop-separator">
                /
            </div>
            <div className="citation-title">
                {props.title}
            </div>
        </div>
    )
}