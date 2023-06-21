
const Categories = ({categ})=> {
    const ct = [...categ]
    return(
        <ul className="Category_List">
            {categ.map((cat,i)=>{
                return (
                <li key={i}>
                    <a href="#">
                        {cat}
                    </a>
                </li>)
            })}
        </ul>
    )
}

export { Categories }