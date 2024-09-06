import cn from "./style.module.scss";

const CardOfMentor = ({ person }) => {
  return (
    <div className={cn.Card}>
      <div className={cn.private_profile}>
        <img src={person.img[1] ? person.img[1] : person.img[0]} alt="" />
        <div className={cn.info}>
          <h2>{person.name + " " + person.surname}</h2>
          <div className={cn.prof}>{person.jobs}</div>
          <p className={cn.p}>
            Top Mentor and Tech leader | Mentored 50+ People in last 5 years
          </p>
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
              <span>Call</span>
            </li>
          </ul>
          <p>{person.description}</p>
        </div>
      </div>
      <div className={cn.skills}>
        {person.works?.map((el, index) => {
          return (
            <div className={cn.skill} key={index}>
              {el}
            </div>
          );
        })}
      </div>
      <div className={cn.order}>
        <div className={cn.hour}>
          <span>40 minutes</span>
          <span>-</span>
          <p>50$</p>
        </div>
        <div className={cn.orderBtn}>Order Now</div>
      </div>
    </div>
  );
};

export default CardOfMentor;
