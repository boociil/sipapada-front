import React from "react";

export default function BabDiv(props) {
    return (
        <>
            <div className="bg-black w-full h-1 mt-4 mb-1"></div>
            <div className="title w-full text-center">
                <h1 className="font-bold">{props.text}</h1>
            </div>
            <div className="bg-black w-full h-1 mb-4 mt-1"></div>
        </>
    )
}