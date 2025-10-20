import clsx from "clsx";

export default function ProductCard({
  product,
  isSelected,
  isJustSelected,
  hoveredId,
  onToggle,
  onEnter,
  onLeave,
}) {
  const {
    id,
    title,
    subtitle,
    portions,
    gift,
    additional,
    weight,
    description,
    disabled,
  } = product;

  const hovered = hoveredId === id;

  return (
    <div>
      <div
        className={clsx("card", {
          "card--active": isSelected,
          "card--disabled": disabled,
          "just--selected": isJustSelected,
        })}
        onClick={() => !disabled && onToggle(id)}
        onMouseEnter={() => !disabled && onEnter(id)}
        onMouseLeave={() => !disabled && onLeave(id)}
      >
        <article className="panel" aria-disabled={disabled || undefined}>
          <p className={clsx("slogan", { "slogan--accent": hovered && isSelected })}>
            {hovered && isSelected ? "Котэ не одобряет?" : "Сказочное заморское яство"}
          </p>

          <h2 className="brand">{title}</h2>
          <h3 className="flavor">{subtitle}</h3>

          <ul className="features">
            <li><strong>{portions}</strong> порций</li>
            <li>{gift}</li>
            {additional && <li>{additional}</li>}
          </ul>

          <figure className="figure">
            <img className="cat" src="/cat.svg" alt="Пушистый серый кот" />
            <figcaption aria-hidden="true" className="circle">
              <span className="kg-num">{weight}</span>
              <span className="kg-unit">кг</span>
            </figcaption>
          </figure>
        </article>
      </div>

      {disabled ? (
        <p className="note muted">Печалька, {subtitle} закончилась.</p>
      ) : isSelected ? (
        <p className="note accent">{description}</p>
      ) : (
        <p className="note">
          Чего сидишь? Порадуй котэ,{" "}
          <span className="link" onClick={() => onToggle(id)}>купи</span>
        </p>
      )}
    </div>
  );
}
