import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GiftGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h2>{category}</h2>

            {
                isLoading && ( <h2>Loading</h2> )
            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        // El operador ... mandara todas las propiedades de image
                        <GiftItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>
    );

};
