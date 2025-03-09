import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs";




export const useFetchGifs = (category) => { 

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);    
        setImages(newImages);
        setIsLoading(false);
    }
    
    // Se ejecuta solo cuando la categoría cambia
    useEffect(() => {
        getImages();
    }, [category]);


    return {
        images,
        isLoading,
    }

}



