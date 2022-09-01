import React from "react";

//Styles
import "./ModalRight.css";

//Components
import Button from "./Button";
import Form from "./Form";

export const ModalRight = () => {
  return (
    <div className="modalRightWrapper">
      <div className="textWrapper">
        <h1>Get Started</h1>
        <p>Already have an account?</p>
        <a href="/">Log in</a>
      </div>

      <div className="btnWrapper">
        <Button
          style={"googleBtn"}
          text={"sign up"}
          icon={"https://freesvg.org/img/1534129544.png"}
        />
        <Button
          style={"facebookBtn"}
          text={"sign up"}
          icon={
            "https://scontent.fvno7-1.fna.fbcdn.net/v/t1.15752-9/301652740_615685229939218_4285131326518618361_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=8Um3lURVOBkAX9VcDjo&_nc_ht=scontent.fvno7-1.fna&oh=03_AVKCepQB8teERe7c1fpOi6UJv0nIKZGwBTKoL8fwV488MA&oe=63377F99"
          }
        />
      </div>
      <h5>Or</h5>
      <Form />
    </div>
  );
};
