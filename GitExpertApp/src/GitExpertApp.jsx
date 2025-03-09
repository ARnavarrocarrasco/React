import { useState } from "react"
import { GifGrid, AddCategory} from "./Components"


export const GitExpertApp = () => {
    
    const [categorias, setCategorias] = useState(['One Punch', 'Dragon Ball'])

    const onAddCategory = (newCategory) => {
        if(categorias.includes(newCategory)) return;
        setCategorias([newCategory, ...categorias])
    }


    return (
        <>
            <h1>Git Expert App</h1>
            <AddCategory onNewCategory = {(value) => onAddCategory(value)}/>

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


