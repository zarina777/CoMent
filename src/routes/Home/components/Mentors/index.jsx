import Card from "./components/Card";
import cn from "./style.module.scss";

const Mentors = () => {
  return (
    <div className={cn.Mentors}>
      <div className={cn.heading}>
        <h1>CoMent</h1>
        <h2>Find exports that best fit for you</h2>
      </div>
      <div className={cn.cards_wrap}>
        <Card
          type="IT"
          img="./video.jpg"
          name="Azimjon Pulatov"
          about="Software Engineer with 8 years background"
        />
        <Card
          type="IELTS"
          img="./video.jpg"
          name="Azimjon Pulatov"
          about="Software Engineer with 8 years background"
        />
        <Card
          type="IELTS"
          img="./video.jpg"
          name="Azimjon Pulatov"
          about="Software Engineer with 8 years background"
        />
        <Card
          type="IELTS"
          img="./video.jpg"
          name="Azimjon Pulatov"
          about="Software Engineer with 8 years background"
        />
        <Card
          type="IELTS"
          img="./video.jpg"
          name="Azimjon Pulatov"
          about="Software Engineer with 8 years background"
        />
        <Card
          type="Business"
          img="./video.jpg"
          name="Azimjon Pulatov"
          about="Software Engineer with 8 years background"
        />
      </div>
    </div>
  );
};

export default Mentors;
