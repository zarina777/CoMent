import cn from "./style.module.scss";

const CardOfMentor = ({ person }) => {
  return (
    <div className={cn.Card}>
      <div className={cn.left_side}>
        <div className={cn.private_profile}>
          <img src={person.img[1] ? person.img[1] : person.img[0]} alt="" />
          <div className={cn.info}>
            <div className={cn.name}>{person.name}</div>
            <div className={cn.prof}>{person.jobs}</div>
            <div className={cn.likes}>
              <div className={cn.stars_wrap}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>5.0 (15 reviews)</p>
            </div>
            <ul className={cn.connection}>
              <li>
                <i className="fa-regular fa-comment"></i>
                <span>Chat</span>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <span>Chat</span>
              </li>
            </ul>
            <p>{person.description}</p>
          </div>
        </div>
        <div className={cn.skills}>
          {person.works?.map((el, index) => {
            return <div key={index}>{el}</div>;
          })}
        </div>
        <div className={cn.order}>
          <div className={cn.hour}>
            <span>$50 /</span>
            <p>1 hour</p>
          </div>
          <div className={cn.orderBtn}>order now</div>
        </div>
      </div>
    </div>
  );
};

export default CardOfMentor;
