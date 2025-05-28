import { useStytchMemberSession } from "@stytch/react/b2b";
import { Navigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { LoginOrSignup } from "./LoginOrSignup";

export const Authenticate = (): JSX.Element => {
  const { session } = useStytchMemberSession();
  const alreadyLoggedInRef = useRef<boolean>();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (alreadyLoggedInRef.current === undefined) {
      alreadyLoggedInRef.current = !!session;
      
      if (session) {
        setShouldRedirect(true);
      }
    }
  }, [session]);

  if (shouldRedirect) {
    return <Navigate to="/dashboard" replace />;
  }

  return <LoginOrSignup />;
};
