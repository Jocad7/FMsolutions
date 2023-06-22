import './Categories.css'
import { useState } from "react"


const Categories = ({categ})=> {
    const [selected, setSelected] = useState(null)
    const ct = [...categ]

    const handleClick = (index) => setSelected(index);

    return(
        <ul className="Category_List">
            {categ.map((cat,i)=>{
                return (
                <li key={i}
                onClick={()=>handleClick(i)}
                className={i==selected ? "li_selected":""}
                >
                    <a href="#">
                        {cat}
                    </a>
                </li>)
            })}
        </ul>
    )
}

export { Categories }