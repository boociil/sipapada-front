import React from "react";

// props: text, name

export default function InputForm(props) {

    return (
        <>
            <div className="mb-2 justify-between flex pb-2">
                <label htmlFor={props.name} className="pr-1 pt-2 font-semibold">{props.text}</label>
            </div>
        </>
    )
}
