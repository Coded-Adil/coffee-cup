/* eslint-disable react/prop-types */
const Card = ({ coffee }) => {
    const { name, image, category, origin, type, id, rating, popularity } = coffee || {}
    return (
        <div>
            {name}
        </div>
    );
};

export default Card;