import { useContext } from "react";
import Container from "../../components/Container";
import Category from "../Mentors/components/Categories";
import { ContextCategory } from "../Mentors/components/context";
import Podcasts from "./components/Podcasts";
import cn from "./style.module.scss";

const Resources = () => {
  const { setResourceOn, resourceOn } = useContext(ContextCategory);
  return (
    <div className={cn.Resources}>
      <Container className={cn.Container}>
        <div className={cn.resources_wrap}>
          <Category
            onClick={() => {
              setResourceOn("podcasts");
            }}
            name="Podcasts"
          />
          <Category
            onClick={() => {
              setResourceOn("blog");
            }}
            name="Blog"
          />

          <Category
            onClick={() => {
              setResourceOn("video library");
            }}
            name="Video Library"
          />
          <Category
            onClick={() => {
              setResourceOn("partner deals");
            }}
            name="Partner Deals"
          />
          <Category
            onClick={() => {
              setResourceOn("glossary");
            }}
            name="Glossary"
          />
        </div>

        <div className={cn.Content_wrap}>
          {resourceOn == "podcasts" && <Podcasts />}
        </div>
      </Container>
    </div>
  );
};

export default Resources;
