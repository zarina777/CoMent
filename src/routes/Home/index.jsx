import Container from "../../components/Container";
import Banner from "./components/Banner";
import cn from "./style.module.scss";

const Home = () => {
  return (
    <div className={cn.Home}>
      <Container>
        <Banner />
        
      </Container>
    </div>
  );
};

export default Home;
