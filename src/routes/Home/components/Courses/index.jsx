import Container from "../../../../components/Container";
import cn from "./style.module.scss";

const Courses = () => {
  return (
    <div className={cn.Courses}>
      <Container>
        <div className={cn.heading}>
          <h1>CoMent</h1>
          <h2>Bizda Mavjud Kurslar</h2>
          <p>We belive great design comes from umderstanding just a few basic principles.</p>
        </div>
      </Container>
    </div>
  );
};

export default Courses;
