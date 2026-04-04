import { useState } from "react";

type Category = "All" | "Footwear" | "Fitness" | "Accessories";

const products = [
  {
    id: 1,
    name: "Running Shoes",
    category: "Footwear",
    price: 120,
    inStock: true,
  },
  { id: 2, name: "Yoga Mat", category: "Fitness", price: 35, inStock: false },
  {
    id: 3,
    name: "Dumbbell Set",
    category: "Fitness",
    price: 89,
    inStock: true,
  },
  {
    id: 4,
    name: "Leather Boots",
    category: "Footwear",
    price: 200,
    inStock: true,
  },
  {
    id: 5,
    name: "Water Bottle",
    category: "Accessories",
    price: 20,
    inStock: true,
  },
  {
    id: 6,
    name: "Resistance Band",
    category: "Fitness",
    price: 15,
    inStock: false,
  },
];

const CATEGORIES: Category[] = ["All", "Footwear", "Fitness", "Accessories"];

export const MultiDropdownFilter = () => {
  const [category, setCategory] = useState<Category>("All");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filtered = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      (!inStockOnly || p.inStock),
  );

  return (
    <main>
      <select onChange={(e) => setCategory(e.target.value as Category)}>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={() => setInStockOnly((prev) => !prev)}
        />
        In stock only
      </label>

      <div style={{ color: "gray", margin: "10px 0" }}>
        Showing {filtered.length} of {products.length} products
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>In Stock</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>${p.price}</td>
              <td>{p.inStock ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {filtered.length === 0 && (
        <div style={{ color: "gray" }}>No results found</div>
      )}
    </main>
  );
};
