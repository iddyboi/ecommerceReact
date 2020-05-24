import React from "react";
import "./styles.scss";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/sign-up/SignUp";

const SignInSignOut = () => {
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignOut;
