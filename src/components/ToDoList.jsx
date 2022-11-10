import React from 'react';

const ToDoList = () => {
    
    const productsList = [
        {
          id: 1,
          name: "Mayonesa",
          category: "Food",
          price: 1,
          isAvailable: true
        },
        {
          id: 2,
          name: "Playstation",
          category: "Videgames",
          price: 800,
          isAvailable: false
        }
      ];

    return (
        <ul>
        {productsList.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <div>
              <b>Category:</b>
              {product.category}
            </div>
            <div>
              <b>Price:</b> ${product.price}
            </div>
            <div>
              <b>Is Available:</b> {product.isAvailable.toString()}
            </div>
          </li>
        ))}
      </ul>
    );
};

export default ToDoList;