import React, {useState, useEffect} from "react"

export default function main(props){

    const [clicked, setClicked] = useState(false);

    const div_click = () => {
        if (clicked){
            setClicked(false)
        }else{
            setClicked(true);
        }
        console.log(props.id, " is clicked");
        
    }

    return(
        <>
        <div key={props.id} 
            className={` ${clicked ? '' : ''} p-2 transition-all md:hover:scale-105 duration-500 border-2 border-gray-400 mr-2 mt-2 rounded-3xl grid grid-cols-4 md:block md:mx-2 `}
            onClick={div_click}    
        >
            <div className="img mr-2 flex justify-center row-span-2 col-start-1 row-start-1">
                <img src={props.img_link} alt={props.nama} className="h-14 w-auto md:h-24" />
            </div>
            <div className="Title col-span-3 ">
                <h2 className="text-lg font-semibold text-black text-left md:text-center">{props.alias}</h2>
                <p className="text-gray-600 text-left text-sm md:text-center">{props.nama}</p>
            </div>
        </div>

            {/* <div className="bagian-hover flex col-span-3 row-start-2">
                <div className="mr-2 hover:bg-blue-300 cursor-pointer h-fit mt-2 bg-blue-500 text-white w-fit px-2 py-1 rounded-lg">
                    Metadata
                </div>
                <div className="mr-2 hover:bg-blue-300 cursor-pointer mt-2 h-fit bg-blue-500 text-white w-fit px-2 py-1 rounded-lg">
                    DDA
                </div>
                <div className="mr-2 hover:bg-blue-300 cursor-pointer mt-2 bg-blue-500 text-white w-fit px-2 py-1 rounded-lg">
                    Rekomendasi Statistik
                </div>
            </div> */}
        </>
    )
} 