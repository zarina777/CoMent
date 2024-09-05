import cn from "./style.module.scss";

const Card = ({ type, name, about, img }) => {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className={cn.Card}>
      <span className={cn.type}>{type}</span>
      <div className={cn.info}>
        <h3>{name}</h3>
        <p>{about}...</p>
        <button>Learn more...</button>
      </div>
    </div>
  );
};

export default Card;
