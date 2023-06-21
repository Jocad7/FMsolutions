
const Categories = ({categ})=> {
    const ct = [...categ]
    return(
        <ul className="Category_List">
            {categ.map(cat=>{
                return (
                <li>
                    <a href="#">
                        {cat}
                    </a>
                </li>)
            })}
        </ul>
    )
}

export { Categories }