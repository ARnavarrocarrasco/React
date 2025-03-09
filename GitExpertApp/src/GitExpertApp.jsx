import { useState } from "react"
import { AddCategoty } from "./Components/AddCategoty"
import { GifGrid } from "./Components/GifGrid"


export const GitExpertApp = () => {
    
    const [categorias, setCategorias] = useState(['One Punch', 'Dragon Ball'])

    const onAddCategory = (newCategory) => {
        if(categorias.includes(newCategory)) return;
        setCategorias([newCategory, ...categorias])
    }


    return (
        <>
            <h1>Git Expert App</h1>
            <AddCategoty onNewCategory = {(value) => onAddCategory(value)}/>

            {categorias.map((categoria) => {
                return (
                    <GifGrid 
                        key={categoria} 
                        category={categoria}
                    />
                )       
            })}
        </>
    )
}


