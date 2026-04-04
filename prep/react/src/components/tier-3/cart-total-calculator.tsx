import React, { useState } from "react";

const initialCartItems = [
  { id: 1, name: "Wireless Mouse", price: 30, quantity: 2 },
  { id: 2, name: "Mechanical Keyboard", price: 90, quantity: 1 },
  { id: 3, name: "USB-C Hub", price: 45, quantity: 3 },
  { id: 4, name: "Monitor Stand", price: 35, quantity: 1 },
];

export const CartTotalCalculator = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleChangeQuantity = (id: number, by: number = 1) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const nextQuantity = item.quantity + by;

        if (nextQuantity < 1) return item;

        return {
          ...item,
          quantity: nextQuantity,
        };
      }),
    );
  };

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {["Product", "Unit Price", "Quantity", "Subtotal"].map((i) => (
              <th style={{ padding: "0px 10px" }} key={i}>
                {i}
              </th>
            ))}
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.length > 0 ? (
            cartItems.map((ci) => (
              <tr key={ci.id}>
                <td>{ci.name}</td>
                <td>${ci.price.toFixed(2)}</td>
                <td>
                  <button onClick={() => handleChangeQuantity(ci.id, -1)}>
                    -
                  </button>
                  <span
                    style={{
                      paddingInline: "10px",
                    }}
                  >
                    {ci.quantity}
                  </span>
                  <button onClick={() => handleChangeQuantity(ci.id, 1)}>
                    +
                  </button>
                </td>
                <td>${(ci.price * ci.quantity).toFixed(2)}</td>

                <td>
                  <button
                    onClick={() => {
                      const id = ci.id;
                      setCartItems((prev) =>
                        prev.filter((item) => id !== item.id),
                      );
                    }}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>Your cart is empty</td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={{ fontSize: "24px", marginTop: "20px" }}>
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
};
