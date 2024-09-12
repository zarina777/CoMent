import cn from "./style.module.scss";

const Card = ({
  type,
  time,
  heading,
  img_host,
  img_guest,
  host,
  host_target,
  guest,
  guest_target,
}) => {
  return (
    <div className={cn.card}>
      <div className={cn.heading}>
        <p className={cn.type}>{type}</p>
        <span className={cn.time}>{time}</span>
        <h3>{heading}</h3>
      </div>
      <ul className={cn.owners}>
        <li>
          <img src={img_host} alt="" />
          <div className={cn.about}>
            <h4>{host}</h4>
            <p>{host_target}</p>
          </div>
        </li>
        <li>
          <img src={img_guest} alt="" />
          <div className={cn.about}>
            <h4>{guest}</h4>
            <p>{guest_target}</p>
          </div>
        </li>
      </ul>
      <div className={cn.play}>
        <span>40 min</span>
        <i className="fa-regular fa-circle-play"></i>
      </div>
    </div>
  );
};

export default Card;
