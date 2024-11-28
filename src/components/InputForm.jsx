import React, { useState,useEffect } from "react";

// props: text, name, value, change, print_info, info

export default function InputForm(props) {

    const [disabled, setIsDisabled] = useState(true);

    let half = 0
    if(props.print_info){
        half = Math.ceil(props.info.length/2)
    }

    let font_settings = "font-semibold"
    if (props.font_is_small){
        font_settings = "pl-6"
    }

    const handleMultipleChange = (e) => {
        props.change(e);
        // if (props.multiple){
        //     if(props.value == 2**props.info.length){
        //         setIsDisabled(false)
        //     }else{
        //         setIsDisabled(true)
        //     }
        // }else{
        //     if(props.value == props.info.length){
        //         setIsDisabled(false)
        //     }else{
        //         setIsDisabled(true)
        //     }
        // }
    }

    useEffect(() => {
        if (props.info && props.info.length !== undefined) {
            // Periksa apakah kondisi untuk menonaktifkan input sudah terpenuhi
            
            if (props.multiple) {

                setIsDisabled(props.value != 2 ** props.info.length);
            } else {
                setIsDisabled(props.value != props.info.length+1);
            }
        }

        
    }, [props.value]);
    


    return (
        <>
            <div className={`mb-2 justify-between flex ${!props.not_input_title ? "border-b-2" : ""} pb-2`}>
                <label htmlFor={props.name} className={`pr-1 pt-2 ${font_settings} `}>{props.text}</label>
                {
                    !props.not_input_title && (
                        <>
                            {
                                !props.big_input ? (
                                    <input 
                                        type="text" 
                                        className={`px-2 h-8 rounded-md mt-1 text-center ${props.print_info ? " w-16" : ""}`} 
                                        name={props.name} 
                                        id={props.name}
                                        value={props.value}
                                        onChange={handleMultipleChange}
                                    />
                                ) : (
                                    <textarea
                                        className="px-2 h-32 rounded-md mt-1 text-center"
                                        name={props.name}
                                        id={props.name}
                                        value={props.value}
                                        onChange={handleMultipleChange}
                                    />
                                )
                            }
                            
                        </>
                    )
                }
                
            </div>
            {
                props.print_info && (
                    <div className="text-xs w-fit lg:flex">
                        <div>
                        {
                            props.info.slice(0, half).map((item, i) => (
                                <div key={`${item}-${i}`} className="flex justify-between">
                                <div>{item}</div>
                                <div className="ml-2">- { !props.multiple ? i+1 : 2**i}</div>
                                </div>
                            ))                      
                        }
                        </div>
                        <div className="lg:ml-20">
                        {
                            props.lainnya ? (
                                <>
                                    {
                                        <>
                                            {

                                                props.info.slice(half).map((item, i) => (
                                                        <div key={`${item}-${i}`} className="flex justify-between">
                                                        <div>{item}</div>
                                                        <div className="ml-2">- { !props.multiple ? i+1+half : 2**(i+half)}</div>
                                                    </div>
                                                ))
                                            }
                                        <div className="flex justify-between">
                                            <div>
                                                Lainnya 
                                                <input type="text" name={props.lainnyaName} id="" value={props.lainnyaValue} onChange={props.lainnyaChange} className={`ml-1 rounded-md transition-all duration-500 h-6 px-1 ${disabled ? 'opacity-30 scale-75 pointer-events-none' : ''}`}/>
                                            </div>
                                            <div className="ml-2 pt-1">- {!props.multiple ? props.info.length+1 : 2**props.info.length }</div>
                                        </div>
                                        </>
                                    }
                                </>
                            ) : (
                                <>
                                    {
                                        props.info.slice(half).map((item, i) => (
                                            <div key={`${item}-${i}`} className="flex justify-between">
                                                <div>{item}</div>
                                                <div className="ml-2">- { !props.multiple ? i+1+half : 2**(i+half)}</div>
                                            </div>
                                        ))
                                    }
                                </>
                            )
                        }
                        </div>
                    </div>
                )
            }
            
        </>
    )
}
