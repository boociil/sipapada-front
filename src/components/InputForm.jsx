import React from "react";

// props: text, name, value, change, print_info, info

export default function InputForm(props) {

    let half = 0
    if(props.print_info){
        half = Math.ceil(props.info.length/2)
    }

    return (
        <>
            <div className="mb-2 justify-between flex border-b-2 pb-2">
                <label htmlFor={props.name} className="pr-1 pt-2 font-semibold">{props.text}</label>
                <input 
                    type="text" 
                    className={`px-2 h-8 rounded-md mt-1 text-center ${props.print_info ? " w-16" : ""}`} 
                    name={props.name} 
                    id={props.name}
                    value={props.value}
                    onChange={props.change}
                />
            </div>
            {
                props.print_info && (
                    <div className="text-xs w-fit">
                        <div>
                        {
                            props.info.slice(0, half).map((item, i) => (
                                <div key={`${item}-${i}`} className="flex justify-between">
                                <div>{item}</div>
                                <div className="ml-2">- {i+1}</div>
                                </div>
                            ))                      
                        }
                        </div>
                        <div>
                        {
                            props.info.slice(0, half).map((item, i) => (
                                <div key={`${item}-${i}`} className="flex justify-between">
                                <div>{item}</div>
                                <div className="ml-2">- {i+1+half}</div>
                                </div>
                            ))
                            
                        }
                        </div>
                    </div>
                )
            }
            
        </>
    )
}
