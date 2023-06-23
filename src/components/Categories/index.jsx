import './Categories.css'
import { category_list } from '../../data/projects';
import { useState } from "react"


const Categories = ({categ, setFiltCategory, setPage})=> {
    const [selected, setSelected] = useState(0)

    const handleClick = (index) => {
            setSelected(index);
            setFiltCategory(category_list[index]);
            setPage(1);
        };
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