import React, {useState, useEffect} from "react"
import OPDOption from "./OPDOption"

export default function main(props){

    const [clicked, setClicked] = useState(false);
    const [showConfirmCard,setShowConfirmCard] = useState(false);

    const onDivClick = () => {
        setShowConfirmCard(true);
    }

    return(
        <>
                <OPDOption
                    open={showConfirmCard} 
                    setOpen={setShowConfirmCard} 
                    img_link={props.img_link}
                    nama={props.nama}
                    alias={props.alias}
                    id={props.id}
                />

            <div key={props.id} 
                className={`p-2 cursor-pointer transition-all md:hover:scale-105 duration-500 border-2 border-gray-400 mr-2 mt-2 rounded-3xl grid grid-cols-4 md:block md:mx-2 `} 
                onClick={setShowConfirmCard} 
            >
                <div className="img mr-2 flex justify-center row-span-2 col-start-1 row-start-1">
                    <img src={props.img_link} alt={props.nama} className="h-14 w-auto md:h-24" />
                </div>
                <div className="Title col-span-3 ">
                    <h2 className="text-lg font-semibold text-black text-left md:text-center">{props.alias}</h2>
                    <p className="text-gray-600 text-left text-sm md:text-center">{props.nama}</p>
                </div>
            </div>
        </>
    )
} 