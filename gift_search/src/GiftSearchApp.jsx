import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GiftSearchApp = () => {

    // State que guarda las categorias
    const [categories, setCategories] = useState(['Naruto']);

    // Fn Agregar nuenva categoria con la Prop que retorna el input
    const addNewCategory = ( newCategory ) => {

        if ( categories.includes( newCategory ) ) return;

        // Usamos el operador spread para clonar los demas elementos del array
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>Gift Search😜</h1>

            <AddCategory onNewCategory={ event => addNewCategory(event) } />

            {
                categories.map(category => (
                    <GiftGrid key={ category } category={ category } />
                ))
            }
        </>
    );

};
