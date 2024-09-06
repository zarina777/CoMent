import Card from "./components/Card";
import db from "../../../../../db.json";

import cn from "./style.module.scss";

const Mentors = () => {
  const data = JSON.parse(JSON.stringify(db)).mentors;

  return (
    <div className={cn.Mentors}>
      <div className={cn.heading}>
        <h1>CoMent</h1>
        <h2>Find exports that best fit for you</h2>
      </div>
      <div className={cn.cards_wrap}>
        {data.map((el, index) => {
        
          return (
            <Card
              type={el.type.toUpperCase()}
              img={el.img[0]}
              name={el.name + " " + el.surname}
              about={el.description.substring(0, 60)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Mentors;
