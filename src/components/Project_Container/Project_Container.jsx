import { project_list } from "../../data/projects"
import './Project_Container.css'
import React, { useEffect } from "react"


const Project_Container = (
    {   filtCategory,
        page,
        setPage
    }) =>{
    const data = filtCategory == "All" ? project_list : project_list.filter(e=> e.category == filtCategory);
    
    const itemsPerPage = 6;

    useEffect(() => {
        // Seleccionar el elemento con la clase p_container
        const container = document.querySelector(".p_container");
        // Agregarle la clase imgs-charge
        setTimeout(()=> container.classList.add("imgs-charge"), 1000);
      }, []); // Array vacío para que solo se ejecute una vez

        const getPaginatedData = () => {
        const startIndex = (page-1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
        }

        const changePage = (newPage)=>{
        if (newPage > 0 && newPage <= Math.ceil(data.length / itemsPerPage)){
            setPage(newPage)
            }
        } 

        const getPageNumbers = ()=>{
            const totalPages = Math.ceil(data.length / itemsPerPage);
            // const pageNumbers = Array.from({length: totalPages},(_,i)=> i +1);
            const pageNumbers = [];
            const range = 2;
            const min = Math.max(1,page - range);
            const max = Math.min(totalPages, page + range);
            for(let x = min; x <= max; x++){
                pageNumbers.push(x)
            };
            return pageNumbers           
        }

        return (
        <>
            <section className="p_container">
                {getPaginatedData().map((item,i)=>(
                    <div className="item" key={item.name[0]+i}>
                        <div className="item-content">
                            <img src={item.imgsrc} alt={item.name+i} key={item.name[1]+i}/>
                        </div>
                    </div>))
                }
            </section>
            <div className={data.length <= itemsPerPage ? "inactive":"pagination"}> {/* Agregar unos botones para cambiar la página */}
                <div className={"grid-item1"}>
                {getPageNumbers()
                    .map(number=>(
                        <button
                        key={number}
                        onClick={()=>changePage(number)}
                        className={number == page ? "paginationNumberBtn active": "paginationNumberBtn"}>
                            {number}
                        </button>
                    ))}
                </div>
                <button 
                className="paginationStepBtn grid-item2"
                onClick={() => changePage(page - 1)}
                disabled = {page == 1}
                >
                    <span className="span-mother">
                        <span>P</span>
                        <span>r</span>
                        <span>e</span>
                        <span>v</span>  
                    </span>
                    <span className="span-mother2">
                        <span>P</span>
                        <span>r</span>
                        <span>e</span>
                        <span>v</span>  
                    </span>
                </button>
                
                
                
                <button 
                className="paginationStepBtn grid-item3"
                onClick={() => changePage(page + 1)}
                disabled={page == getPageNumbers()[getPageNumbers().length-1]}
                >
                    <span className="span-mother">
                        <span>N</span>
                        <span>e</span>
                        <span>x</span>
                        <span>t</span>  
                    </span>
                    <span className="span-mother2">
                        <span>N</span>
                        <span>e</span>
                        <span>x</span>
                        <span>t</span>  
                    </span>
                </button>
            </div>
        </>
    )
}

export { Project_Container }




