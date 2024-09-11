import React from "react";
import cn from "../style.module.scss";

const Form = () => {
  return (
    <div className={cn.Form}>
      <h4>Send a message</h4>
      <p>
        If you have any types of question or problem related to our program, you
        can message here. It’s our pleasure to help you
      </p>
      <form>
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter your email" />
        <textarea type="text" placeholder="Enter your message" />
        <button>Send Now</button>
      </form>
    </div>
  );
};

export default Form;
