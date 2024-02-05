import React from "react";
import { Card } from "../ui/card";
import CardWrapper from "./CardWrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonHref="/auth/register"
      backButtonLabel={`Don't have an account?`}
      showSocial
    >
      login form
    </CardWrapper>
  );
};

export default LoginForm;
