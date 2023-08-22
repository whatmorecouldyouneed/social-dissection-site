import React, { useState } from 'react';

function Shop() {
    const [size, setSize] = useState('Small');

    const handleSizeChange = (selectedSize) => {
        setSize(selectedSize);
    }

    return (
        <div style={{ backgroundColor: 'black', width: '100vw', height: '100vh' }}>
            <style jsx>{`
                button:focus {
                    outline: 2px solid black;
                    box-shadow: none;
                }

                @media (max-width: 768px) {
                    h1 {
                        fontSize: '30px';
                    }
                    .product-title {
                        fontSize: '30px';
                    }
                    p {
                        fontSize: '16px';
                    }
                }
            `}</style>
            <div className="container d-flex flex-column align-items-center">
                <h1 className="text-center" style={{ color: 'white', paddingTop: '20px' }}>Shop</h1>

                <div className="card mt-4 text-center">
                    <div className="card-body">
                        <img src="/src/assets/product-tee.png" alt="Tee-shirt" className="img-fluid mb-3" />

                        <h1 className="product-title" style={{ fontSize: '45px' }}>Mental Health Awareness Tee</h1>
                        <p>Choose your size:</p>
                        <div className="mb-3 d-flex justify-content-center">
                            <button onClick={() => handleSizeChange('Small')} style={size === 'Small' ? { backgroundColor: 'black', color: 'white', marginRight: '5px' } : { backgroundColor: 'white', color: 'black', marginRight: '5px' }}>Small</button>
                            <button onClick={() => handleSizeChange('Medium')} style={size === 'Medium' ? { backgroundColor: 'black', color: 'white', marginRight: '5px' } : { backgroundColor: 'white', color: 'black', marginRight: '5px' }}>Medium</button>
                            <button onClick={() => handleSizeChange('Large')} style={size === 'Large' ? { backgroundColor: 'black', color: 'white', marginRight: '5px' } : { backgroundColor: 'white', color: 'black', marginRight: '5px' }}>Large</button>
                            <button onClick={() => handleSizeChange('Extra Large')} style={size === 'Extra Large' ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' }}>Extra Large</button>
                        </div>

                        <h4 className="mb-4">$50.00</h4>

                        <div className="d-flex justify-content-center">
                            <button className="btn" style={{ backgroundColor: 'black', color: 'white', marginRight: '20px' }}>Buy Now</button>
                            <button className="btn" style={{ backgroundColor: 'white', color: 'black' }}>Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <p style={{ fontSize: '22px' }}>
                        established in 1995 by pharaoh, who drew inspiration from personal experiences, this platform aims to rehabilitate individuals grappling with trauma, depression, anxiety, and various mental illnesses, including epilepsy. by fostering understanding and self-awareness, social dissection empowers troubled hearts to heal and find solace, while encouraging a broader understanding of the significance of mental health in human growth and development
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Shop;
