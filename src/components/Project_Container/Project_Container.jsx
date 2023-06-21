import { project_list } from "../../data/projects"
import './Project_Container.css'
import React, { useEffect } from "react"


const Project_Container = () =>{
    const data = project_list;
    useEffect(() => {
        // Seleccionar el elemento con la clase p_container
        const container = document.querySelector(".p_container");
        // Agregarle la clase imgs-charge
        setTimeout(()=> container.classList.add("imgs-charge"), 1500);
      }, []); // Array vacío para que solo se ejecute una vez

    return (
        <section className="p_container">
            {data.map((item,i)=>(
                <div className="item">
                    <div className="item-content">
                        <img src={item.imgsrc} alt={item.name+i} key={i}/>
                    </div>
                </div>))
            }
        </section>
    )
}

export { Project_Container }




