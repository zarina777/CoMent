import { useContext } from "react";
import Container from "../../components/Container";
import CardOfMentor from "./components/Card";
import Category from "./components/Categories";
import { ContextCategory } from "./components/context";
import cn from "./style.module.scss";
import db from "../../../db.json";

const Mentors = () => {
  const data = JSON.parse(JSON.stringify(db)).mentors;
  const { setCategoryOn, categoryOn } = useContext(ContextCategory);
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
            name="IELTS"
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
          <Category
            onClick={() => {
              setCategoryOn("agricoach");
            }}
            name="Agriculture"
          />
        </div>
        <div className={cn.mentors_wrap}>
          {data.map((el, index) => {
            if (categoryOn == "all") {
              return <CardOfMentor key={index} person={el} />;
            } else if (categoryOn == "ielts") {
              if (el.type == "ielts") {
                return <CardOfMentor key={index} person={el} />;
              }
            } else if (categoryOn == "business") {
              if (el.type == "business") {
                return <CardOfMentor key={index} person={el} />;
              }
            } else if (categoryOn == "it") {
              if (el.type == "it") {
                return <CardOfMentor key={index} person={el} />;
              }
            } else if (categoryOn == "agricoach") {
              if (el.type == "agricoach") {
                return <CardOfMentor key={index} person={el} />;
              }
            } else if (categoryOn == "psychology") {
              if (el.type == "agricoach") {
                return <CardOfMentor key={index} person={el} />;
              }
            }
          })}
        </div>
      </Container>
    </div>
  );
};

export default Mentors;
