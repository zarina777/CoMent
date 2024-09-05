import Container from "../../components/Container";
import { ContextProvide } from "../Mentors/components/context";
import Banner from "./components/Banner";
import Mentors from "./components/Mentors";
import cn from "./style.module.scss";

const Home = () => {
  return (
    <div className={cn.Home}>
      <Container>
        <Banner />
        <Mentors />
      </Container>
    </div>
  );
};

export default Home;
