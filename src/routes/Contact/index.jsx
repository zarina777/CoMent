import Container from "../../components/Container";
import Contacts from "./components/Contacts";
import Form from "./components/Form";
import cn from "./style.module.scss";

const Contact = () => {
  return (
    <div className={cn.Contact}>
      <Container>
        <div className={cn.ContactWrapper}>
          <h3>Contact Address</h3>
          <div className={cn.ContactWrapperInner}>
            <Contacts />
            <hr />
            <Form />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
