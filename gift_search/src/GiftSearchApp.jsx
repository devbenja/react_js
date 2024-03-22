import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiftSearchApp = () => {

    const [ categories, setCategories ] = useState([ 'Naruto', 'One Piece' ]);

    const addNewCategory = () => {
        // Usamos el operador spread para clonar los demas elementos del array
        setCategories([ 'Champions League', ...categories ]);
    };

  return (
    <>
        <h1>Gift Search 😜</h1>

        <AddCategory/>

        <button onClick={ addNewCategory }>Add Category</button>

        <ul>
            {
                categories.map( category => {
                    return <li key={ category }>{ category }</li>
                })
            }
        </ul>
    </>
  );

};
 