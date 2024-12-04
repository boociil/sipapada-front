export default function LongInput(props) {
    return (
        <div className="mb-2  pb-2">
            <label htmlFor={`${props.var}`} className="px-1 ">{props.nama}</label>
            <input 
                type="text" 
                className="w-full px-2 h-8 rounded-md mt-1" 
                placeholder={`${props.nama}`} 
                name= {`${props.var}`}
                id={`${props.var}`} 
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}