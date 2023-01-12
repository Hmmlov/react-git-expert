/* como luce un custom hook */

import React, { useEffect, useState } from 'react'
import { getGif } from '../helpers/gefGifs';

export default function useFetchGifs(category) {
    const [images, setImages] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    
    const getImagenes = async() => {
        const newImages = await getGif(category);
        setImages(newImages);
        setIsLoading(false)
      }

      useEffect(()=>{
        getImagenes()
      }, [ ])
    return {
        images,
        isLoading
    }
}
