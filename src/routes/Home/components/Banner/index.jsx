import cn from "./style.module.scss";

const Banner = () => {
  let array = [1, 2, 3, 4, 5, 6];
  return (
    <div className={cn.Banner}>
      <div className={cn.info}>
        <div className={cn.info_top}>
          <h1>The Ultimate Product Design and Figma Course</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div className={cn.info_bottom}>
          <ul>
            {array.map((el, index) => {
              return (
                <li
                  style={{
                    left: `${40 * index - index * 2}px`,
                    zIndex: `-${index }`,
                    backgroundImage: `url("./people.jpg")`,
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
            <span >from 800 + revievs</span>
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
            <p>Course preview </p>
            <p>The Ultimate Product Design and Figma Course</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
