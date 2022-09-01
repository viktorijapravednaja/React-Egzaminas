import React from "react";

//Styles
import "./Form.css";

const Form = () => {
  return (
    <form>
      <label for="name">Name</label>
      <input
        className="nameIcon"
        type="text"
        id="name"
        name="name"
        value="Joy Shaheb"
      />
      <label for="email">Email</label>
      <input
        className="emailIcon"
        type="email"
        id="email"
        name="email"
        value="abc@gmail.com"
      />
      <label for="password">Password</label>
      <input className="passwordIcon" type="password" value="password" />
      <input className="submitBtn" type="submit" value="Submit" />
    </form>
  );
};

export default Form;
