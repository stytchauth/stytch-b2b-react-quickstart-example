import { useStytchMemberSession, StytchB2B } from "@stytch/react/b2b";
import { Navigate } from "react-router-dom";
import { discoveryConfig, discoveryStyles } from '../utils/stytchConfig';

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
