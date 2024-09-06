import { useContext } from "react";
import Container from "../../components/Container";
import CardOfMentor from "./components/Card";
import Category from "./components/Categories";
import { ContextCategory } from "./components/context";
import cn from "./style.module.scss";
import db from "../../../db.json";

const Mentors = () => {
  const data = JSON.parse(JSON.stringify(db)).mentors;
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
        <div className={cn.mentors_wrap}>
          {data.map((el, index) => {
            return <CardOfMentor key={index} person={el} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default Mentors;
