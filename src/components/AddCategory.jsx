import React, { useState } from 'react';

export function AddCategory({ onNewCategory }) {
    const [inputValue, setInputValue] = useState('');
    /* se desestructura y en vez de tener un event, colocan un {target} para desestructurarlo y sea más simple */

    const handleChangeInput = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1)return;
        /* console.log(inputValue); */
        /* setCategories(categories => [inputValue, ...categories]); */
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
  return (
    /* solo utilizar fragment cuando sea más de un elemento y si este estará fuera del formulario
    pero, en este caso solo es necesario el form ya que es el unico que va a renderizar */
    <form onSubmit={ onSubmit }>
        <input
                type="text"
                style={{maxWidth : '250px'}}
                placeholder='Serach Gif'
                value={inputValue}
                onChange={handleChangeInput}
            />
    </form>
       
  )
}
