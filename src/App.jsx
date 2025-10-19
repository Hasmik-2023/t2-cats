import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import clsx from "clsx";

function App() {
  const [selected, setSelected] = useState([]);
  const [justSelected, setJustSelected] = useState([]);
  const [hovered, setHovered] = useState(null);

  const isDisabled = (id) => id === 3;

  const toggle = (id) => {
    if (isDisabled(id)) return;
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((el) => id !== el);
      return [...prev, id];
    });
    justSelected((prev) => [...prev, id]);
  };

  const handleLeave = (id) => {
    if (isDisabled(id)) return;
    setHovered(null);
    setJustSelected((prev) => {
      return prev.filter((el) => el !== id);
    });
  };

  const handleEnter = (id) => {
    if (isDisabled(id)) return;
    if (selected.includes(id) && !justSelected.includes(1)) setHovered(id);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Ты сегодня покормил кота?</h1>
      {/* <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "center",
        }}
      > */}
      <div style={{display: "flex",justifyContent:"space-evenly"}}>
        <div>
          <div
            className={clsx("card", {
              "card--active": selected.includes(1),
              "just--selected": justSelected.includes(1),
            })}
            onClick={() => toggle(1)}
            onMouseLeave={() => handleLeave(1)}
            onMouseEnter={() => handleEnter(1)}
          >
            {hovered === 1 && selected.includes(1) ? (
              <h3 style={{ color: "grey" }}>Котэ не одобряет?</h3>
            ) : (
              <h3 style={{ color: "grey" }}>Сказочное заморское яство</h3>
            )}

            <h1 style={{ color: "black" }}>Нямушка</h1>
            <h2 style={{ color: "black" }}>с фуа-гра</h2>
            <h3 style={{ color: "grey" }}>10 порций</h3>
            <h3 style={{ color: "grey" }}>мышь в подарок</h3>
            <img src="/cat.svg" alt="Кот" />
            <div
              className={clsx("circle", {
                "circle--active": selected.includes(1),
              })}
            >
              0,5 кг
            </div>
          </div>
          {selected.includes(1) ? (
            <p className="title"> Печень утки разварная с артишоками </p>
          ) : (
            <p className="title">
              Чего сидишь? Порадуй котэ,{" "}
              <span className="link" onClick={() => toggle(1)}>
                купи
              </span>
            </p>
          )}
        </div>

        <li>
          <div
            className={clsx("card", { "card--active": selected.includes(2) })}
            onClick={() => toggle(2)}
            onMouseLeave={() => handleLeave(2)}
            onMouseEnter={() => handleEnter(2)}
          >
            {hovered === 2 && selected.includes(2) ? (
              <h3 style={{ color: "grey" }}>Котэ не одобряет?</h3>
            ) : (
              <h3 style={{ color: "grey" }}>Сказочное заморское яство</h3>
            )}

            <h1 style={{ color: "black" }}>Нямушка</h1>
            <h2 style={{ color: "black" }}>с рыбой</h2>
            <h3 style={{ color: "grey" }}>40 порций</h3>
            <h3 style={{ color: "grey" }}>2 мыши в подарок</h3>
            <img src="/cat.svg" alt="Кот" />
            <div
              className={clsx("circle", {
                "circle--active": selected.includes(2),
              })}
            >
              2 кг
            </div>
          </div>
          {selected.includes(2) ? (
            <p className="title">
              {" "}
              Головы щучьи с чесноком да свежайшая сёмгушка.{" "}
            </p>
          ) : (
            <p className="title">
              Чего сидишь? Порадуй котэ,{" "}
              <span className="link" onClick={() => toggle(2)}>
                купи
              </span>
            </p>
          )}
        </li>
        {/* <li>
          <div className="card card--disabled">
            <h3 style={{ color: "grey" }}>Сказочное заморское яство</h3>
            <h1 style={{ color: "black" }}>Нямушка</h1>
            <h2 style={{ color: "black" }}>с курой</h2>
            <h3 style={{ color: "grey" }}>100 порций</h3>
            <h3 style={{ color: "grey" }}>5 мышей в подарок</h3>
            <h3 style={{ color: "grey" }}>заказчик доволен</h3>
            <img src="/cat.svg" alt="Кот" />
            <div
              className={clsx("circle", {
                "circle--active": selected.includes(3),
                "circle--disabled": isDisabled(3),
              })}
            >
              5 кг
            </div>
          </div>

          <p className="title"> Печалька, с курой закончился </p>
        </li> */}
        {/* <li>

          <div
            className={clsx("card", { "card--active": selected.includes(3) })}
            onClick={() => toggle(3)}
            onMouseLeave={() => handleLeave(3)}
            onMouseEnter={() => handleEnter(3)}
          >
            {hovered === 3 && selected.includes(3) ? (
              <h3 style={{ color: "grey" }}>Котэ не одобряет?</h3>
            ) : (
              <h3 style={{ color: "grey" }}>Сказочное заморское яство</h3>
            )}

            <h1 style={{ color: "black" }}>Нямушка</h1>
            <h2 style={{ color: "black" }}>с курой</h2>
            <h3 style={{ color: "grey" }}>100 порций</h3>
            <h3 style={{ color: "grey" }}>5 мышей в подарок</h3>
            <h3 style={{ color: "grey" }}>заказчик доволен</h3>
            <img src="/cat.svg" alt="Кот" />
            <div
              className={clsx("circle", {
                "circle--active": selected.includes(3),
              })}
            >
              5 кг
            </div>
          </div>
          {selected.includes(3) ? (
            <p className="title"> Печень утки разварная с артишоками </p>
          ) : (
            <p className="title">
              Чего сидишь? Порадуй котэ,{" "}
              <span className="link" onClick={() => toggle(3)}>
                купи
              </span>
            </p>
          )}
        </li> */}
        <li>
          <div
            className={clsx("card", { "card--active": selected.includes(3) })}
            onClick={() => toggle(3)}
            onMouseLeave={() => handleLeave(3)}
            onMouseEnter={() => handleEnter(3)}
          >
            {hovered === 3 && selected.includes(3) ? (
              <h3 style={{ color: "grey" }}>Котэ не одобряет?</h3>
            ) : (
              <h3 style={{ color: "grey" }}>Сказочное заморское яство</h3>
            )}

            <h1 style={{ color: "black" }}>Нямушка</h1>
            <h2 style={{ color: "black" }}>с рыбой</h2>
            <h3 style={{ color: "grey" }}>100 порций</h3>
            <h3 style={{ color: "grey" }}>2 мыши в подарок</h3>
            <img src="/cat.svg" alt="Кот" />
            <div
              className={clsx("circle", {
                "circle--active": selected.includes(3),
              })}
            >
              5 кг
            </div>
          </div>
          {selected.includes(3) ? (
            <p className="title">
              {" "}
              Головы щучьи с чесноком да свежайшая сёмгушка.{" "}
            </p>
          ) : (
            <p className="title">
              Чего сидишь? Порадуй котэ,{" "}
              <span className="link" onClick={() => toggle(3)}>
                купи
              </span>
            </p>
          )}
        </li>

        {/* </ul> */}
      </div>
    </>
  );
}

export default App;
