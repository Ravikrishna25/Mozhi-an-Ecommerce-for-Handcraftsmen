import React, { useState, useEffect } from 'react';
import { formatDistanceToNow, addDays, isPast } from 'date-fns';

const DealProduct = ({ product }) => {
  const { name, description, originalPrice, discountedPrice, expiryDate } = product;
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    // Calculate the time remaining until the deal expires
    const interval = setInterval(() => {
      const now = new Date();
      const expires = new Date(expiryDate);
      if (isPast(expires)) {
        setTimeLeft('Deal Expired');
        clearInterval(interval);
      } else {
        const remainingTime = formatDistanceToNow(expires);
        setTimeLeft(remainingTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expiryDate]);

  return (
    <div className="deal-product">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        Original Price: <span className="original-price">${originalPrice}</span>
      </p>
      <p>
        Discounted Price: <span className="discounted-price">${discountedPrice}</span>
      </p>
      <p>
        Deal Expires in: <span className="time-left">{timeLeft}</span>
      </p>
    </div>
  );
};

const DealProductsList = ({ products }) => {
  return (
    <div className="deal-products-list">
      {products.map((product) => (
        <DealProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

const Shome = () => {
  // Sample data for deal products
  const dealProducts = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      originalPrice: 50,
      discountedPrice: 30,
      expiryDate: addDays(new Date(), 2), // 2 days from now
    },
    // Add more deal products as needed
  ];

  return (
    <div>
      <h1>Deal Products</h1>
      <DealProductsList products={dealProducts} />
    </div>
  );
};

export default Shome;
