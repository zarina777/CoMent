import Card from "./Cards";
import cn from "./style.module.scss";
import data from "./../../../../../db.json";

const Podcasts = () => {
  return (
    <div className={cn.Podcasts}>
      <div className={cn.heading}>
        <h3>Find the benificial podcasts</h3>
        <p>
          Don't watse your time, the least thing you can do in your free time is
          to listen podcasts of most famous Mentors
        </p>
      </div>
      <div className={cn.wrapper}>
        {data.podcasts.map((el, index) => {
          return (
            <Card
              key={index}
              guest={el.guest}
              guest_target={el.guest_target}
              host={el.host}
              host_target={el.host_target}
              time={el.time}
              type={el.type}
              heading={el.heading}
              img_host={el.img_host}
              img_guest={el.img_guest}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Podcasts;
