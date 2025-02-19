import { StytchB2B, useStytchMemberSession } from "@stytch/react/b2b";
import { discoveryConfig, discoveryStyles } from '../utils/stytchConfig';
import { Navigate } from "react-router-dom";

export const LoginOrSignup = () => {

  const { session } = useStytchMemberSession();

  if (session) {
    return <Navigate to="/dashboard" />;
  }


  return (
    <div className="centered-login">
      <StytchB2B config={discoveryConfig} styles={discoveryStyles} />
    </div>
  );
};
