import { useStytchMemberSession } from "@stytch/react/b2b";
import { StytchB2B } from "@stytch/react/b2b";
import { AuthFlowType, B2BProducts } from "@stytch/vanilla-js";
import { Navigate } from "react-router-dom";
import { discoveryStyles } from "../utils/stytchConfig";

export const Reset = (): JSX.Element => {
  const { session } = useStytchMemberSession();

  if (session) {
    return <Navigate to="/dashboard" />;
  }

  const config = {
    authFlowType: AuthFlowType.PasswordReset,
    products: [B2BProducts.passwords],
    sessionOptions: { sessionDurationMinutes: 60 },
  };

  return (
    <div className="centered-login">
      <StytchB2B config={config} styles={discoveryStyles} />
    </div>
  );
}; 