import { useEffect } from "react";
import { getGifs } from "../Helpers/getGifs";

export const GifGrid = ({category}) => {

    // Se ejecuta solo cuando la categoría cambia
    useEffect(() => {
        getGifs(category);
    }, [category]);

    return (
        <>
            <h3>{category}</h3>     
        </>
    )
}