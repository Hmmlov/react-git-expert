import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components/index'
export const GifExperApp = () => {
    /* para almacenar información y necesita actualizar el html */
    /* inicialziar como un arreglo [] */
    /* Prohibido colocar condiconales en los hooks */ //Recuerdalo siempre
    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) =>{
        /* buena forma de agregar un elemento*/
       /*  categories.push(newCategory) */
       /* console.log(newCategory); */
       if(categories.includes(newCategory)) return alert('Ya existe');
        setCategories([newCategory, ...categories])
        /* si se quiere que el nuevoe elemento registrado aparezca al inicio solo se le coloca lo que queremos al inicio */
        /* setCategories([newCategory, ...categories]) */

    }   

    return (
    <>
        <h1>GifExpertApp</h1>
        
        
        <AddCategory onNewCategory={ onAddCategory } />
        {/* Listado de Gifs */}

        {/* <button onClick={onAddCategory}>Agregar</button> */}
        {/* deben de ser list item, no solo arreglos */}
        {/* tenemos que proporcionarle un key si o si es obligatorío */}
        {/* los hooks trabajan en react basados en su posición */}
        {/* el ol no tiene razón de ser */}

        {/* se vuelve a crear este componente, pero no los anteriores */}
        {/* Gracias al useEffect en el componente GifGrid solo se dispara una vez, y se evita repetir 1 o 2 veces siempre que sucede algo */}
        {categories.map((category) => (
                <GifGrid 
                    key={category} 
                    category={category}
                />
            ))
        }
    </>
  )
}
