import Container from "../../components/Container";
import Banner from "./components/Banner";
import Courses from "./components/Courses";
import cn from "./style.module.scss";

const Home = () => {
  return (
    <div className={cn.Home}>
      <Container>
        <Banner />
        <Courses />
      </Container>
    </div>
  );
};

export default Home;
