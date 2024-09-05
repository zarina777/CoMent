import cn from "./style.module.scss";

const Banner = () => {
  let array = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className={cn.Banner}>
      <div className={cn.info}>
        <div className={cn.info_top}>
          <h1>CoffeeChat with Mentors</h1>
          <p>
            "Unlock your potential with personalized mentorship that drives
            success."
          </p>
        </div>
        <div className={cn.info_bottom}>
          <ul>
            {array.map((el, index) => {
              return (
                <li
                  style={{
                    left: `${40 * index - index * 2}px`,
                    zIndex: `-${index}`,
                    backgroundImage: `url("./circleImages/people.jpg")`,
                  }}
                >
                  <img src="" alt="" />
                </li>
              );
            })}
          </ul>
          <div className={cn.stars}>
            <div className={cn.stars_wrap}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <span>5.0</span>
            <span>from 800 + revievs</span>
          </div>
          <button className={cn.trial_btn}>30-days trial</button>
        </div>
      </div>
      <div className={cn.video}>
        <div className={cn.cover}>
          <div className={cn.circle}>
            <i class="fa-solid fa-play"></i>
          </div>
          <div className={cn.video_info}>
            <p>Session Preview </p>
            <p>Discover how you interact with exports...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
