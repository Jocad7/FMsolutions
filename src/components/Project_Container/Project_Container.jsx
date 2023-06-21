import { project_list } from "../../data/projects"
import './Project_Container.css'
import React, { useEffect } from "react"
import Muuri from "muuri"


const Project_Container= () => {
    useEffect(() => {
      // Crear el grid de Muuri
    const grid = new Muuri(".grid", {
        layout: {
        rounding: false,
        },
});

 // Actualizar los items y el layout del grid cuando la ventana se cargue
window.addEventListener("load", () => {
    grid.refreshItems().layout();
    document.getElementById("grid").classList.add("imgs-charge");
});
}, []); // Array vacío para que solo se ejecute una vez
const data = project_list;
return (
<section id="grid" className="grid">
    {data.map((item,i)=>(
                <div className="item">
                    <div className="p_image">
                        <img data-src={item.imgsrc} alt={item.name+i} key={i}/>
                    </div>
                </div>))
            }
</section>
);
}


export { Project_Container }



// const ProjectContainer = () =>{
//     const data = project_list;
//     return (
//         <section className="p_container">
//             {data.map((item,i)=>(
//                 <div className="item">
//                     <div className="p_image">
//                         <img src={item.imgsrc} alt={item.name+i} key={i}/>
//                     </div>
//                 </div>))
//             }
//         </section>
//     )
// }

