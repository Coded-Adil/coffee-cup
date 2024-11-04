import { Link, useLocation } from "react-router-dom";
import { IoTrash } from "react-icons/io5";


/* eslint-disable react/prop-types */
const Card = ({ coffee, handleRemove }) => {
    const {pathname} = useLocation()
    const { name, image, category, origin, type, id, rating, popularity } = coffee || {}
    return (
        <div className="flex relative">
            <Link
                to={`/coffee/${id}`}
                className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden"
            >
                <figure className="w-full h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={name} />
                </figure>
                <div className="p-4 space-y-2">
                    <h2 className="text-2xl font-thin">
                        Name: {name}
                    </h2>
                    <p>
                        Category: {category}
                    </p>
                    <p>
                        Type: {type}
                    </p>
                    <p>
                        Origin: {origin}
                    </p>
                    <p>
                        Rating: {rating}
                    </p>
                    <p>
                        Popularity: {popularity}
                    </p>
                </div>
            </Link>
            {pathname === '/dashboard' && <div onClick={() => handleRemove(id)} className="absolute text-3xl p-3 border-2 rounded-full bg-warning cursor-pointer -top-5 -right-5"><IoTrash /></div>}
        </div>
    );
};

export default Card;