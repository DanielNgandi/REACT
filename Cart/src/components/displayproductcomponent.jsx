import { useContext, useState } from 'react';
import '../App.css';
import { CartContext } from './cartcontext';

const DisplayComponent = ({ shoe }) => {
    const [selectedColor, setSelectedColor] = useState(shoe.availableColors[0] || 'Black'); // Default to the first color or 'Black'
    const { addToCart } = useContext(CartContext);

    const colors = shoe.availableColors || [];
    const colorToImageMap = {
        Black: '/images/jordan_black.png',
        Red: '/images/jordan_red.png',
        Orange: '/images/jordan_orange.png'
    };

    const changeBgColorAndImage = (color) => {
        setSelectedColor(color);
    };

    const imageSrc = colorToImageMap[selectedColor] || '/images/red.png'; // Default image

    return (
        <div className='product'style={{ backgroundColor: selectedColor }}>
                <div className='image ' style={{ backgroundColor: selectedColor }}>
                    <img src={imageSrc} alt={`${shoe.title} - ${selectedColor}`} />
                </div>
                <div className='bodys'>
                <h1>{shoe.title}</h1>
                <h3>{shoe.collection}</h3>
                <p>{shoe.description}</p>
                <b>Available Colors:</b>
                <p>
                    {colors.map((color, index) => (
                        <button
                            key={index}
                            onClick={() => changeBgColorAndImage(color)}
                            style={{
                                backgroundColor: color.toLowerCase(),
                                padding: '10px',
                                borderRadius: '100%',
                                border: 'none',
                                margin: '5px'
                            }}
                        ></button>
                    ))}
                </p>
                <p>Price: Kshs {shoe.price}</p>
                <button onClick={() => addToCart(shoe)}>Add to Cart</button>
                </div>
        </div>
    );
};

export default DisplayComponent;