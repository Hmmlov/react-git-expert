import React, { useEffect, useState } from 'react'
/* import { getGif } from '../helpers/gefGifs'; */
import useFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem';

export function GifGrid({category}) {

    const {images, isLoading} = useFetchGifs(category);
    /* no debe de volverse a disparar la petición, no es una buena práctica */
    //const [images, setImages] = useState([]);
    //const [isLoading, setIsLoading] = useState(true);

    /* useEffect es un hook de react que sirve para disparar efectos secundarios */
    /* ascync no puede ser useEffect */
    /* const getImagenes = async() => {
      const newImages = await getGif(category);
      setImages(newImages);
      setIsLoading(false)
    }
    useEffect(()=>{
      getImagenes()
    }, [ ]) */
    
    return (
    <>
        <h3>{category}</h3>
        {/* Se puede reducir la veríficación con un "AND Lógico &&" */}
        {
          isLoading 
            && ( <h2>Cargando...</h2> )
            
        }
        <div className='card-grid'>
          {/* desestructuramos el imagenes a (id y title) */}
          {/* esparcir las props */}
          {/* solo cuando se tienen muchas propiedades */}
          {images.map((image) => (
              <GifItem key={image.id}
              { ...image }
              />
          ))}
        </div>

    </>
  )
}
