import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function App() {
  const [selected, setSelected] = useState([]);
  const [justSelected, setJustSelected] = useState([]);
  const [hovered, setHovered] = useState(null);

  const isDisabled = (id) =>
    products.find((p) => p.id === id)?.disabled ?? false;

  const toggle = (id) => {
    if (isDisabled(id)) return;
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
    setJustSelected((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const handleEnter = (id) => {
    if (isDisabled(id)) return;
    if (selected.includes(id) && !justSelected.includes(id)) setHovered(id);
  };

  const handleLeave = (id) => {
    if (isDisabled(id)) return;
    setHovered(null);
    setJustSelected((prev) => prev.filter((x) => x !== id));
  };

  return (
    <>
      <h1 className="header-title">Ты сегодня покормил кота?</h1>

      <section className="cards">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={selected.includes(product.id)}
            isJustSelected={justSelected.includes(product.id)}
            hoveredId={hovered}
            onToggle={toggle}
            onEnter={handleEnter}
            onLeave={handleLeave}
          />
        ))}
      </section>
    </>
  );
}
