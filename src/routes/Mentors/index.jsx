import { useContext } from "react";
import Container from "../../components/Container";
import Category from "./components/Categories";
import { ContextCategory } from "./components/context";
import cn from "./style.module.scss";

const Mentors = () => {
  const { setCategoryOn } = useContext(ContextCategory);
  return (
    <div className={cn.Mentors}>
      <Container className={cn.Container}>
        <div className={cn.categories_wrap}>
          <Category
            onClick={() => {
              setCategoryOn("all");
            }}
            name="ALL"
          />
          <Category
            onClick={() => {
              setCategoryOn("it");
            }}
            name="IT"
          />
          <Category
            onClick={() => {
              setCategoryOn("ielts");
            }}
            name="IElTS"
          />
          <Category
            onClick={() => {
              setCategoryOn("psychology");
            }}
            name="Psychology"
          />
          <Category
            onClick={() => {
              setCategoryOn("business");
            }}
            name="Business"
          />
        </div>
      </Container>
    </div>
  );
};

export default Mentors;
