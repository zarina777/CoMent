import Contacts from "./components/Contacts";
import Form from "./components/Form";
import cn from "./style.module.scss";

const Contact = () => {
  return <div className={cn.Contact}>
    <h2>Our Contact Address Here.</h2>
    <div className={cn.ContactWrapper}>
      <div className={cn.ContactWrapperInner}>
        <Contacts />
        <hr />
        <Form />
      </div>
    </div>
  </div>;
};

export default Contact;
