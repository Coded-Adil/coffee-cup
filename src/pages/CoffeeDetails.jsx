import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CoffeeDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [coffee, setCoffee] = useState({});

    useEffect(() => {
        const singleData = data.find(coffee => coffee.id == id);
        setCoffee(singleData);
    }, [data, id]);
    const { name, image, category, origin, type, description, ingredients, making_process, rating, popularity } = coffee || {}
    return (
        <div>
            <h2 className="text-3xl font-thin">{description}</h2>
            <img src={image} alt={name} />
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-thin">{name}</h2>
                    <p>Popularity: {popularity}</p>
                    <p>Rating: {rating}</p>
                </div>
                <div>
                    <button className="btn btn-warning">Add Favorite</button>
                </div>
            </div>
            <h2 className="text-3xl font-thin">Making Process:</h2>
            <p>{making_process}</p>
            <h2 className="text-3xl font-thin">Ingredients:</h2>
            <ul>
                {
                    ingredients && ingredients.map((item, idx) => <li className='list-disc' key={idx}>{item}</li>)
                }
            </ul>
        </div>
    );
};

export default CoffeeDetails;